<template>
    <div>
        <!-- Banner与主菜单 -->
        <section class="banner-menu under-top-bar">
            <!--轮播图-->
            <div class="banner-list-box">
                <div class="banner-list-pad"></div>
                <Carousel style="width:auto; height:auto;" arrow="never" ref="carousel">
                    <carousel-item v-for="(item, index) in adverts" :key="index">
                        <v-touch @swipeleft="swipe_next(index)" @swiperight="swipe_prev(index)">
                            <img :src="item['cover_image']['url']"/>
                        </v-touch>
                    </carousel-item>
                </Carousel>
            </div>
            <ul class="menu-list">
                <li class="item">
                    <router-link to="/category-list" class="link" data-name="category">
                        <i class="icon category">[分]</i>
                        <span class="name">分类</span>
                    </router-link>
                </li>
                <li class="item">
                    <router-link to="/vip/index" data-name="rank" class="link">
                        <i class="icon rank">[奖]</i>
                        <span class="name">VIP</span>
                    </router-link>
                </li>
                <li class="item">
                    <router-link to="/login" class="link" data-name="schedule">
                        <i class="icon time">[表]</i>
                        <span class="name">登录</span>
                    </router-link>
                </li>
                <!--<li class="item">
                    <router-link class="link" data-name="history" to="/bookshelf/index">
                        <i class="icon history">[钟]</i>
                        <span class="name">历史</span>
                    </router-link>
                </li>-->
            </ul>
        </section>
        <recommend title="无良推荐" title-desc="无良推荐" link-more="/tag-comic-list/3?tagName=无良推荐" :comic-data="comices.recommend.data" type-class="recommend"></recommend>
        <!-- 条漫推荐 -->
        <!--<section class="light-comic">-->
            <!--<h2 class="sub-title">-->
                <!--<strong class="title-content">[每日一推]</strong>-->
                <!--<small class="desc">“弹幕君出没，快去抓住它！”</small>-->
                <!--<router-link class="link-more" to="/Light/recommend">[更多]</router-link>-->
            <!--</h2>-->
            <!--<div class="light-comic-recommend"-->
                 <!--data-id="518333">-->
                <!--<a class="link comic-cover"-->
                   <!--href="/Light/comicInfo/id/518333">-->
                    <!--<img class="cover-image"-->
                         <!--src="picture/e2a11c231f4944ddb09bf459a470eee3.gif"/>-->
                <!--</a>-->

                <!--<a class="link comic-title">-->
                    <!--<span class="text">狐妖小红娘</span>-->
                    <!--<small class="artist">作者：小新</small>-->
                <!--</a>-->
            <!--</div>-->
        <!--</section>-->
        <!-- 今日更新 -->
        <section class="update-today">
            <h2 class="sub-title">
                <strong class="title-content">[今日我更新]</strong>
                <small class="desc">“已把作者逼疯，吐血ing...”</small>
                <router-link class="link-more" to="/tag-comic-list/4?tagName=今日我更新">[更多]</router-link>
            </h2>
            <div class="update-area">
                <aside class="npc-2">[NPC图片2]</aside>
                <ul class="comic-list col-1">
                    <li class="comic-item item-1" v-for="comic in comices.new_update.data">
                        <router-link class="comic-link" :to="'/comic-desc/' + comic.id + '?title=' + comic.title">
                            <div class="comic-cover">
                                <img class="cover-image" :src="comic.cover_image.url"/>
                            </div>
                            <div class="comic-content">
                                <strong class="comic-title">{{comic.title}}</strong>
                                <small class="comic-artist">作者：{{comic.author}}</small>
                                <small class="comic-latest">更新到{{comic.section ? comic.section.length : 0}}章</small>
                                <!--<ul class="rank-bar">-->
                                    <!--<li class="rank-star">[星]</li>-->
                                    <!--<li class="rank-star">[星]</li>-->
                                    <!--<li class="rank-star">[星]</li>-->
                                    <!--<li class="rank-star">[星]</li>-->
                                    <!--<li class="rank-score">7.9</li>-->
                                <!--</ul>-->
                            </div>
                        </router-link>
                    </li>
                </ul>
            </div>
        </section>
        <recommend title="日漫经典" title-desc="日漫经典" link-more="/tag-comic-list/5?tagName=日漫经典" :comic-data="comices.classical.data" type-class="japan-comic"></recommend>
        <recommend title="新作上线" title-desc="新作上线" link-more="/tag-comic-list/2?tagName=新作上线" :comic-data="comices.be_online.data" type-class="new-comic"></recommend>
        <Footer></Footer>
    </div>
</template>

<script>
    import './index.scss';
    import Recommend from 'components/recommend';
    import Footer from '../components/footer';
    import {Carousel, CarouselItem} from 'element-ui';
    import {getAdverts, getIndexComic} from '@/api/index';
    import Vue from 'vue';
    import {mapMutations} from 'vuex';

    const VueTouch = require('vue-touch');
    Vue.use(VueTouch, {name: 'v-touch'});

    export default {
        name: 'index',
        components: {
            Recommend,
            Carousel,
            CarouselItem,
            Footer
        },
        data() {
            return {
                adverts:[],
                comices: {
                    be_online:{data:[]},
                    classical:{data:[]},
                    day_push:{data:[]},
                    new_update:{data:[]},//今日我更新
                    recommend:{data:[]}
                }
            }
        },
        mounted() {
            this.setNoTitle(true);
            getAdverts().then(res => {
                console.log(res);
                this.adverts = res.data;
            });

            getIndexComic().then(res => {
                console.log(res);
                this.comices = res.data;
            });
        },
        methods: {
            ...mapMutations([
                'setNoTitle'
            ]),
            swipe_prev(i) {
                this.$refs.carousel.setActiveItem(i-1);
            },
            swipe_next(i) {
                this.$refs.carousel.setActiveItem(i+1);
            }
        }
    }
</script>
