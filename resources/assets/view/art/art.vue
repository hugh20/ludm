<template>
    <div>
        <!-- 悬浮栏区域 -->
        <section :class="{'float-bar': true, top: true, hidden: tabHide}">
            <a class="float-bar-btn back" @click="$router.go(-1)">[返回]</a>
            <label class="float-bar-title">
                <span class="title">我爱上了女友的……</span>
                <!--<span class="progress">第...话 - 1/1</span>-->
            </label>
            <router-link class="float-bar-btn home" to="/">[首页]</router-link>
            <!--<a class="float-bar-btn bookshelf " href="/bookshelf/index">[书架]</a>-->
            <!--<a class="float-bar-btn more">[更多]</a>-->
        </section>
        <section class="float-bar-menu top-right hidden">
            <div class="menu-arrow-tag"></div>
            <div class="menu-content">
                <a class="float-bar-menu-btn share">
                    <i class="icon"></i>
                    <span class="text">分享</span>
                </a>
                <a class="float-bar-menu-btn comment-list" href="/comment/index/id/622756">
                    <i class="icon"></i>
                    <span class="text">评论</span>
                </a>
            </div>
        </section>

        <section :class="{'float-bar': true, bottom: true, hidden: tabHide}">
            <router-link class="float-bar-btn chapter-list" :to="{path:'/chapter-list/'+ comic_id, query:{comic_id: comic_id, min: min, max: max}}">[目录]</router-link>
            <!--<a class="float-bar-btn view-mode">[阅读模式]</a>-->
            <!--<div class="float-bar-btn download">[下载]</div>-->
            <a class="float-bar-btn prev-chapter" @click="prev">[上一章]</a>
            <a class="float-bar-btn next-chapter" @click="next">[下一章]</a>
        </section>
        <!-- 漫画图片区域 -->
        <section class="comic-pic-area">
            <!-- 浏览控制按键 - 上一页 -->
            <a class="nav-ctrl-btn prev" @click="prev">{{current == min ? '前面没有更多了~' : '点击加载上一章节'}}</a>

            <!-- 浏览模式提示 -->
            <div class="view-mode-hint"></div>

            <!-- 漫画图片列表插入位置 -->
            <section class="comic-pic-list-all" @click="showTob">
                <ul class="comic-pic-list">

                    <li class="comic-pic-item pic-loaded" v-for="url in urls">
                        <div class="comic-pic-pad" style="padding-top: 78.625%;"></div>
                        <div class="comic-pic-box">

                            <img class="comic-pic" v-lazy="url">
                        </div>
                        <!---->
                    </li>

                </ul>

            </section>
            <!-- 浏览控制按键 - 下一页 -->
            <a class="nav-ctrl-btn next" :style="{display: current == max ? 'none' : 'block'}" @click="next">点击加载下一章节</a>
            <!-- 结束信息区域 -->
            <section class="end-chapter-ads"></section>
        </section>
        <!-- 最新一话时的弹层 -->
        <div class="down-guide" style="display: none;">
            <div class='down-app-mask'>
                <div class='download'>
                    <a href='javascript:;' class='close-btn'></a>
                    <div class="go-read-comic">

                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import './art.scss';
    import {getInfo, nextComic, prevComic} from '@/api/section';
    import {Message, Image} from 'element-ui';
    import Vue from 'vue';
    import VueLazyload from 'vue-lazyload';
    import {mapMutations} from 'vuex';

    Vue.use(VueLazyload, {
        preLoad: 1.3, // 提前加载高度（数字 1 表示 1 屏的高度） 默认值:1.3
        attempt: 3 //  加载错误后最大尝试次数 默认值:3
    });

    export default {
        name: 'Art',
        components: {},
        props: ['id'],
        data() {
            return {
                urls: [],
                tabHide: false,
                current: 1,
                comic_id: 0,
                min: 1,
                max: 1
            }
        },
        created() {
        },
        mounted() {
            this.min = this.$route.query.min;
            this.max = this.$route.query.max;
            this.comic_id = this.$route.query.comic_id;
            getInfo({id: this.id, comic_id: this.comic_id}).then((res) => {
                if (res.status == 'success') {
                    this.urls = res.data.urls;
                    this.current = res.data.weight;
                    this.comic_id = res.data.article_id;
                    this.setMetaTitle(res.data.title);
                    this.setDescription(res.data.descriptions);
                    this.setKeywords(res.data.keywords);
                } else {
                    Message({showClose: true, message: res.message, type: 'error'});
                }
                console.log(res);
            }, (res) => {
                console.log(res);
//                Message({showClose: true, message: res.message, type: 'error'});
//                this.$router.go(-1);
            });
            window.onscroll = () => {
//                变量scrollTop是滚动条滚动时，距离顶部的距离
                var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                //变量windowHeight是可视区的高度
                var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
                //变量scrollHeight是滚动条的总高度
                var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
                if (scrollTop > 0) {
                    this.tabHide = true;
                }
//                滚动条到底部的条件
                if (scrollTop + windowHeight == scrollHeight) {
                    //写后台加载数据的函数
                    console.log("距顶部" + scrollTop + "可视区高度" + windowHeight + "滚动条总高度" + scrollHeight);
                }
//                console.log("距顶部"+scrollTop+"可视区高度"+windowHeight+"滚动条总高度"+scrollHeight);
            };
            setTimeout(() => {
                this.tabHide = true;
            }, 2000);
        },
        methods: {
            ...mapMutations([
                'setNoTitle',
                'setTitle',
                'setMetaTitle',
                'setDescription',
                'setKeywords',
            ]),
            showTob() {
                this.tabHide = false;
                setTimeout(() => {
                    this.tabHide = true;
                }, 2000);
            },
            next() {
                if(this.max == this.current){
                    return;
                }
                nextComic({
                    weight: this.current,
                    comic_id: this.comic_id
                }).then((res) => {
                    if (res.status == 'success') {
                        this.urls = res.data.urls;
                        this.current = res.data.weight;
                        this.$router.replace({path: '/art/' + res.data.id, query:{comic_id: this.comic_id, min: this.min, max: this.max}});
                    } else {
                        Message({showClose: true, message: res.message, type: 'error'});
                    }
                    console.log(res);

                });
            },
            prev() {
                if(this.min == this.current){
                    return;
                }
                prevComic({
                    weight: this.current,
                    comic_id: this.comic_id
                }).then((res) => {
                    if (res.status == 'success') {
                        this.urls = res.data.urls;
                        this.current = res.data.weight;
                        this.$router.replace({path: '/art/' + res.data.id, query:{comic_id: this.comic_id, min: this.min, max: this.max}});
                    } else {
                        Message({showClose: true, message: res.message, type: 'error'});
                    }
                    console.log(res);
                });
            }
        }
    }
</script>
