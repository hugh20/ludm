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
                                <span class="head-info-grade">{{comic.score}}</span>
                            </li>
                            <li class="head-info-tags">
                                <label>标签：</label>
                                <span></span>
                                <span></span>
                                <span></span>
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
                    <a class="tab-list-item" data-tab-link="detail">详情</a>
                    <a class="tab-list-item active" data-tab-link="comicList">目录</a>

                    <!--普通情况引用正常的评论tab-->
                    <a class="tab-list-item" data-tab-link="comment">评论</a>

                </div>
            </section>
            <!--标签切换 end-->
        </div>

        <div data-tab-name="detail" style="display: none;" class="lay-content">
            <!--作品详情 begin-->
            <section class="mod-detail">
                <i class="detail-icon iconfont">&#xe614;</i>

                <div class="detail-summary">
                    <p>三年前邱子南高中毕业时，曾和朋友们去酒吧玩耍，他乔装打扮，在那一晚偶遇了叫做【柳也】的男人。
                        子南一直对他念念不忘，没想到三年后这个男人成了姐姐的男朋友…</p>
                </div>
            </section>
            <!--作品详情 end-->
        </div>

        <div data-tab-name="comicList" class="lay-content">
            <!--作品目录 begin-->
            <section class="mod-comicList">
                <div class="comicList-info">

                    <div class="comicList-info-free" style="display: none;">
                        <a id="btn_payVip">
                            <img class="info-free-headImg" src="picture/freehead_03.png" alt="">
                            <span class="info-free-text"
                                  id="info_pay_text"></span>
                        </a>
                    </div>

                    <div class="comicList-info-layBox">
                    <span
                            class="comicList-info-time">2019-02-26</span>
                        <span class="comicList-info-update">更新到64话</span>
                    </div>
                </div>
                <!-- 9 -->
                <div class="chapter-list-box ">
                    <ul class="chapter-list" data-vip-free="1">
                        <li class="chapter-item">
                            <a class="chapter-link lock"
                               data-cid="91" data-seq="64"
                               href="/chapter/index/id/622756/cid/91">64</a>
                        </li>
                        <li class="chapter-item">
                            <a class="chapter-link lock"
                               data-cid="89" data-seq="63"
                               href="/chapter/index/id/622756/cid/89">63</a>
                        </li>
                        <li class="chapter-item">
                            <a class="chapter-link lock"
                               data-cid="88" data-seq="62"
                               href="/chapter/index/id/622756/cid/88">62</a>
                        </li>
                        <li class="chapter-item">
                            <a class="chapter-link "
                               data-cid="87" data-seq="61"
                               href="/chapter/index/id/622756/cid/87">61</a>
                        </li>
                        <li class="chapter-item">
                            <a class="chapter-link lock"
                               data-cid="86" data-seq="60"
                               href="/chapter/index/id/622756/cid/86">60</a>
                        </li>
                        <li class="chapter-item">
                            <a class="chapter-link lock"
                               data-cid="84" data-seq="59"
                               href="/chapter/index/id/622756/cid/84">59</a>
                        </li>
                        <li class="chapter-item">
                            <a class="chapter-link lock"
                               data-cid="83" data-seq="58"
                               href="/chapter/index/id/622756/cid/83">58</a>
                        </li>
                        <li class="chapter-item">
                            <a class="chapter-link lock"
                               data-cid="82" data-seq="57"
                               href="/chapter/index/id/622756/cid/82">57</a>
                        </li>
                        <li class="chapter-item">
                            <a class="chapter-link lock"
                               data-cid="81" data-seq="56"
                               href="/chapter/index/id/622756/cid/81">56</a>
                        </li>
                    </ul>
                    <a class="btn-expand-chapter-list"
                       id="btn_expandChapterList"
                       href="/comic/chapterList/id/622756">大人，查看更多目录
                    </a>
                </div>
            </section>
            <!--作品目录 end-->
        </div>

        <div data-tab-name="comment" style="display: none;" class="lay-content lay-comment">
            <section class="mod-common">
                <ul id="mod_comment">
                </ul>
            </section>
            <section class="mod-common-status" style="display: none;">
                <div class="common-status-loading">
                    <div class="mod-loading-btn-top">
                        <span></span><span></span><span></span>
                    </div>
                    <p>嘿咻嘿咻加载中</p>
                </div>
                <div class="common-status-over" style="display: none;">
                    客官，人家已经没有那个的啦~~
                </div>
            </section>
            <section class="mod-commentLink">
                <a href="/comment/index/id/622756">
                    <span class="iconfont">&#xe618;</span> 我来说两句
                </a>
            </section>
        </div>

        <!--底部工具栏 begin-->
        <section class="mod-toolBar">
            <div class="lay-flex">
                <div class="lay-box">
                    <a id="btn_toolFav" class="toolBar-toolFav unfav">[收藏]</a>
                    <a id="btn_toolShare" class="toolBar-toolShare">[分享]</a>
                    <a id="btn_toolDownload" class="toolBar-toolDownload">[下载]</a>
                </div>
                <a id="btn_toolRead" class="toolBar-toolRead"
                   href="/chapter/index/id/622756/seqno/1">开始阅读
                </a>
            </div>
        </section>
    </article>
</template>

<script>
    import './comic.scss';
    import {getComic} from '@/api/comic';

    export default {
        name: 'Comic',
        components: {},
        props:['id'],
        data() {
            return {
                comic: {}
            }
        },
        mounted() {
            getComic({id:this.id}).then((res) => {
                if(!res.data || !res.data.id){
                    this.$router();
                }
                this.comic = res.data;
            });
            console.log(this.id);
        },
        methods: {}
    }
</script>
