<template>

    <div class="categoryList-content content-update under-top-bar" >
        <div id="list_hot_box" class="comic-list hot active" v-infinite-scroll="loadMore"
             infinite-scroll-immediate="true" infinite-scroll-disabled="disabled">
            <ul id="list_hot" >
                <li class="comic-item" v-for="item in comics">
                    <router-link class="comic-link" :to="{path: '/comic-desc/' + item.id, query: {title: item.title}}">
                        <div class="comic-cover">
                            <img class="cover-image" :src="item.cover_image.url">
                        </div>
                        <div class="comic-info">
                            <strong class="comic-title">
                                {{item.title}}
                            </strong>
                            <small class="comic-update">{{item.updated_at.substr(0, 11)}} 更新</small>
                            <small class="comic-hot">人气：{{item.view_count}}</small>
                            <small class="comic-fav">收藏数：{{item.collection_count}}</small>
                            <small class="comic-tag">{{item.tags_name}}</small>
                            <small class="comic-desc">
                                {{item.descriptions}}
                            </small>
                        </div>
                    </router-link>
                </li>
            </ul>
            <section class="mod-load-more">
                <div class="mlm-status-loading" v-if="loading">
                    <div class="mlm-dots">
                        <span class="mlm-dot"></span>
                        <span class="mlm-dot"></span>
                        <span class="mlm-dot"></span>
                    </div>
                    <p class="mlm-info">嘿咻嘿咻加载中</p>
                </div>
                <div class="mlm-status-over" v-if="noMore || !count">
                    客官，人家已经没有那个的啦~~
                </div>
                <div class="mlm-status-again" v-if="load_fail">
                    <a class="mlm-btn-again">
                        再刷一次！&gt;_&lt;
                    </a>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import './tagComic.scss';
    import {InfiniteScroll} from 'element-ui';
    import {getTagComic} from '@/api/tag';
    import {mapMutations} from 'vuex';

    export default {
        name: 'tagComic',
        directives: {
            InfiniteScroll
        },
        components: {},
        props: ['id'],
        data() {
            return {
                comics: [],
                loading: false,
                noMore: false,
                load_fail: false,
                tagName: '',
                tag: {},
                meta:{
                    current_page: 0,
                    from:1,
                    to:1,
                    total: 0,
                    last_page: 1,
                    per_page: 10
                }
            }
        },
        mounted() {
            this.tagName = this.$route.query.tagName;
            this.setNoTitle(false);
            this.setTitle(this.tagName);
            this.setMetaTitle(this.tagName);
            this.setDescription('漫画-' + this.tagName);
            this.setKeywords('漫画-' + this.tagName);

//            this.load();
        },
        computed: {
            disabled() {
                return this.loading || this.noMore
            },
            count(){
                return this.comics.length;
            }
        },
        methods: {
            ...mapMutations([
                'setNoTitle',
                'setTitle',
                'setMetaTitle',
                'setDescription',
                'setKeywords',
            ]),
            loadMore() {
                this.loading = true;
                getTagComic({tag_id: this.id, page: this.meta.current_page + 1, per_page: this.meta.per_page}).then((res) => {
                    console.log(res);
                    if (res.data.length) {
                        res.data.forEach((item) => {
                            item.tags_name = [];
                            if (item.tags.length) {
                                item.tags.forEach((tag) => {
                                    item.tags_name.push(tag.name);
                                    if(tag.id == this.id){
                                        this.tag = tag;
                                    }
                                });
                            }
                            item.tags_name = item.tags_name.join(' ');
                        });
                        if(res.data.length < res.meta.per_page)  this.noMore = true;
                    } else {
                        this.noMore = true;
                    }
                    this.meta = Object.assign({}, this.meta, res.meta);
                    this.comics = res.data.concat(this.comics);
                    this.loading = false;
                    console.log(this.tag);
                }, (res) => {
                    this.load_fail = true;
                    this.loading = false;
                });
            }
        }
    }
</script>
