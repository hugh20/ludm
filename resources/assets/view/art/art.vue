<template>
    <div>

        <!-- 悬浮栏区域 -->
        <section class="float-bar top">
            <a class="float-bar-btn back">[返回]</a>
            <label class="float-bar-title">
                <span class="title">我爱上了女友的……</span>
                <span class="progress">第...话 - 1/1</span>
            </label>
            <a class="float-bar-btn home" href="/">[首页]</a>
            <a class="float-bar-btn bookshelf" href="/bookshelf/index">[书架]</a>
            <a class="float-bar-btn more">[更多]</a>
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

        <section class="float-bar bottom">
            <a class="float-bar-btn chapter-list" href="/comic/chapterList/id/622756">[目录]</a>
            <a class="float-bar-btn view-mode">[阅读模式]</a>
            <div class="float-bar-btn download">[下载]</div>
            <a class="float-bar-btn prev-chapter">[上一章]</a>
            <a class="float-bar-btn next-chapter">[下一章]</a>
        </section>
        <!-- 漫画图片区域 -->
        <section class="comic-pic-area">
            <!-- 浏览控制按键 - 上一页 -->
            <a class="nav-ctrl-btn prev">点击加载上一章节</a>
            <!-- 章节图片列表loading -->
            <!-- 浏览页新增漫画详情信息 -->
            <div class="comic-pic-detail">
                <div class="comic-pic-container">
                    <img src="picture/c36b92ebcfa643eaabee6e77e5d1ddd3.gif" class="comic-pic-cover" />
                    <div class="comic-pic-mask">
                        <div class="mask">
                            <p class="comic-title">
                                我爱上了女友的……                                                    <span class="tag-type c-r">蔷薇</span>
                                <span class="tag-type c-r">都市</span>
                            </p>
                            <p class="comic-desc">三年前邱子南高中毕业时，曾和朋友们去酒吧玩耍，他乔装打扮，在那一晚偶遇了叫做【柳也】的男人。
                                子南一直对他念念不忘，没想到三年后这个男人成了姐姐的男朋友…</p>
                        </div>
                        <div class="comic-cover-info">
                            <p class="comic-detail">17.8亿<small>人气</small><a href="https://m.ac.qq.com/Chapter/index/id/622756/cid/3" class="go-to-read">看第一话<i class="icon-circle-arrow-right"></i></a></p>
                            <p class="comic-from">该作品来自腾讯动漫<span class="line"></span></p>
                        </div>
                    </div>
                    <div class="comic-chap-title">
                        <p><span class="chap-title">我爱上女友的……</span></p>
                    </div>
                </div>
            </div>
            <!-- APP引导语（分享流程下） -->   <!-- 分享的作品隐藏顶部引导下载bar -->
            <section class="app-guiding shared" style="display: none!important;"
                     data-url-Android="http://m.ac.qq.com/apkSet/qqcomic_android_dm2097.apk"
                     data-url-iOS="https://itunes.apple.com/cn/app/id569387346">
                <a class="app-guiding-download">
                    <img class="app-guiding-img"
                         src="picture/app-guiding.png"/>
                </a>
                <a class="app-guiding-close">X</a>
            </section>

            <!-- 浏览模式提示 -->
            <div class="view-mode-hint"></div>

            <!-- 漫画图片列表插入位置 -->
            <section class="comic-pic-list-all">
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
            <a class="nav-ctrl-btn next">点击加载下一章节</a>
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

        <!-- 进度框 -->
        <div class="progress-box"></div>
    </div>
</template>

<script>
    import './art.scss';
    import {getInfo} from '@/api/section';
    import {Message, Image} from 'element-ui';
    import Vue from 'vue';
    import VueLazyload from 'vue-lazyload';

    Vue.use(VueLazyload, {
        preLoad: 1.3, // 提前加载高度（数字 1 表示 1 屏的高度） 默认值:1.3
        attempt: 3 //  加载错误后最大尝试次数 默认值:3
    });

    export default {
        name: 'Art',
        components: {
        },
        props: ['id'],
        data() {
            return {
                urls : []
            }
        },
//        created(){
//            window.onscroll = function(){
                //变量scrollTop是滚动条滚动时，距离顶部的距离
//                var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
//                //变量windowHeight是可视区的高度
//                var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
//                //变量scrollHeight是滚动条的总高度
//                var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
                //滚动条到底部的条件
//                if(scrollTop+windowHeight==scrollHeight){
//                    //写后台加载数据的函数
//                    console.log("距顶部"+scrollTop+"可视区高度"+windowHeight+"滚动条总高度"+scrollHeight);
//                }
//            }
//        },
        mounted() {
            getInfo({id: this.id}).then( (res) => {
                if(res.status == 'success'){
                    this.urls = res.data.urls;
                }else{
                    Message({showClose: true, message: res.message, type: 'error'});
                }
                console.log(res);
            },  (res) => {
                console.log(res);
//                Message({showClose: true, message: res.message, type: 'error'});
//                this.$router.go(-1);
            });
        },
        methods: {
        }
    }
</script>
