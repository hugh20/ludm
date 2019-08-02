<template>
    <article class="main">
        <!--布局上的头部，包括 mod-nav，mod-head，mod-stratRead，mod-tab-->
        <div class="lay-head">
            <!--头部作品信息 begin-->
            <section class="mod-head">
                <div class="head-banner">
                    <svg width="0" height="0" class="banner-svg" id="banner_svg">
                        <defs>
                            <filter id="f">
                                <feImage id="svg_feImage"
                                         :xlink:href="comic.cover_image.url"
                                         x="0"
                                         y="0" width="0" height="0" preserveAspectRatio="xMidYMid slice"/>
                                <feGaussianBlur stdDeviation="30"/>
                            </filter>
                        </defs>
                        <rect id="svg_rect" x="0" y="0" width="0" height="0" filter="url(#f)"/>
                    </svg>
                </div>

                <div class="head-info">
                    <div class="head-info-cover">
                        <img :src="comic.cover_image.url"
                             :alt="comic.title"/>
                    </div>
                    <div class="head-info-detail">
                        <ul>
                            <li class="head-info-title">
                                <h1>{{comic.title}}</h1>
                                <span class="head-info-grade">{{comic.score || 9.0}}</span>
                            </li>
                            <li class="head-info-tags" v-html="'<label>标签：</label>' + comic.tags_name">

                            </li>
                            <li class="head-info-author">
                                作者：{{comic.user.name}}
                            </li>
                            <li class="head-info-hot">
                                人气：<span class="info-number">{{comic.view_count}}</span>
                            </li>
                            <li class="head-info-mt" style="display: none;">
                                月票：<span class="info-number" id="txt_mtNumber">...</span>
                            </li>
                        </ul>
                    </div>
                </div>

            </section>
            <!--头部作品信息 end-->

            <!--标签切换 begin-->
            <section class="mod-tab" data-nowTab="comicList">
                <div class="tab-list">
                    <a :class="{'tab-list-item': true, active:!toggle}" data-tab-link="detail" @click="tab(1)">详情</a>
                    <a :class="{'tab-list-item': true, active:toggle}" data-tab-link="comicList" @click="tab(2)">目录</a>
                    <!--普通情况引用正常的评论tab-->
                </div>
            </section>
            <!--标签切换 end-->
        </div>

        <div data-tab-name="detail" class="lay-content" v-if="!toggle">
            <!--作品详情 begin-->
            <section class="mod-detail">
                <i class="detail-icon iconfont">&#xe614;</i>

                <div class="detail-summary">
                    <p>{{comic.descriptions}}</p>
                </div>
            </section>
            <!--作品详情 end-->
        </div>

        <div data-tab-name="comicList" class="lay-content" v-if="toggle">
            <!--作品目录 begin-->
            <section class="mod-comicList">
                <div class="comicList-info">

                    <div class="comicList-info-layBox">
                        <span class="comicList-info-time">{{comic.sections.length && comic.sections[0].updated_at.substr(0, 11)}}</span>
                        <span class="comicList-info-update">更新到{{comic.sections.length && comic.sections[0].weight}}话</span>
                    </div>
                </div>
                <!-- 9 -->
                <div class="chapter-list-box ">
                    <ul class="chapter-list" data-vip-free="1">
                        <li class="chapter-item" v-for="section in comic.sections">
                            <router-link :class="{'chapter-link' : true, lock: section.access_type > 0 && !vip}"
                                         :to="{path:'/art/' + section.id, query:{lock: section.access_type > 0 && !vip, comic_id: id, min: min, max: max}}">
                                {{section.weight}}
                            </router-link>
                        </li>
                    </ul>
                    <router-link class="btn-expand-chapter-list"
                                 id="btn_expandChapterList"
                                 :to="{path: '/chapter-list/'+ id, query:{comic_id: id, min: min, max: max}}">大人，查看更多目录
                    </router-link>
                </div>
            </section>
            <!--作品目录 end-->
        </div>

        <!--底部工具栏 begin-->
        <section class="mod-toolBar">
            <div class="lay-flex">
                <div class="lay-box" style="display: none;">
                    <a id="btn_toolFav" class="toolBar-toolFav unfav">[收藏]</a>
                    <a id="btn_toolShare" class="toolBar-toolShare">[分享]</a>
                    <a id="btn_toolDownload" class="toolBar-toolDownload">[下载]</a>
                </div>
                <router-link id="btn_toolRead" class="toolBar-toolRead"
                             :to="{path:'/art/' + first_id, query:{comic_id: id, min: min, max: max}}">开始阅读
                </router-link>
            </div>
        </section>
    </article>
</template>

<script>
    import './comic.scss';
    import {getComic} from '@/api/comic';
    import { mapState, mapMutations} from 'vuex';
    import {Message} from 'element-ui';


    export default {
        name: 'Comic',
        components: {},
        props: ['id'],
        data() {
            return {
                comic: {
                    cover_image: {url:''},
                    user: {},
                    sections: []
                },
                toggle: 1,
                min: 1,
                max: 1,
                first_id: 0
            }
        },
        computed:{
            ...mapState({
                vip: state => state.user.vip,

            })
        },
        mounted() {
            this.setNoTitle(false);
            getComic({id: this.id}).then((res) => {
                if (!res.data || !res.data.id) {
                    this.$router().go(-1);
                }
                if (res.data.tags.length) {
                    res.data.tags_name = res.data.tags.map(function (tag) {
                        return '<span>' + tag.name + '</span>';
                    }).join(' ');
                } else {
                    res.data.tags_name = '';
                }

                this.comic = res.data;
                this.setTitle(this.comic.title);
                if(this.comic.sections.length > 0){
                    this.max = this.comic.sections[0].weight;
                }
                this.min = res.data.first_section ? res.data.first_section.weight : 1;
                this.first_id = res.data.first_section ? res.data.first_section.id : 0;
                console.log(res);
            }, (res) => {

            });
        },
        methods: {
            ...mapMutations([
                'setNoTitle',
                'setTitle',
            ]),
            tab(type) {
                if(type == 1){
                    this.toggle = 0;
                }else{
                    this.toggle = 1;
                }
            }
        },
        beforeRouteLeave (to, from, next) {
            // 导航离开该组件的对应路由时调用
            // 可以访问组件实例 `this`
            if(to.params.id == 0){
                Message({showClose: true, message: '未找到您访问的章节', type: 'error'});
                return next(false);
            }
            if(to.query.lock) {
                Message({showClose: true, message: '您暂时没有权限阅读此章节', type: 'error'});
                return next(false);
            }
            next();
        }
    }
</script>
