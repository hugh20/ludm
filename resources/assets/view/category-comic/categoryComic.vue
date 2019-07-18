<template>

    <div class="categoryList-content content-update">
        <section class="categoryList-tab under-top-bar">
            <div class="tab-list" style="display: none;">
                <a id="tab_update" class="tab-list-item update active"></a>
                <a id="tab_hot" class="tab-list-item hot "></a>
                <a id="tab_fav" class="tab-list-item fav"></a>
            </div>
        </section>
        <div id="list_hot_box" class="comic-list hot active">
            <ul id="list_hot">
                <li class="comic-item" v-for="item in comics">
                    <router-link class="comic-link" to="/">
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

                            </small>
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import './categoryComic.scss';
    import {getCategoryComic} from '@/api/category';

    export default {
        name: 'categoryComic',
        components: {},
        props:['id'],
        data() {
            return {
                comics: []
            }
        },
        mounted() {
            getCategoryComic({category_id: this.id, page:0, per_page:10}).then((res) => {
                res.data.forEach(function (item) {
                    if(item.tags.length){
                        item.tags_name = item.tags.map(function (tag) {
                            console.log(tag);
                            return tag.name;
                        }).join(' ');
                    }else{
                        item.tags_name = '';
                    }
                });
                this.comics = res.data;
            });
        },
        methods: {}
    }
</script>
