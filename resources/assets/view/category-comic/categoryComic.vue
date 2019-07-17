<template>

    <div class="categoryList-content content-update">
        <section class="categoryList-tab under-top-bar">
            <div class="tab-list">
                <a id="tab_update" class="tab-list-item update active"></a>
                <a id="tab_hot" class="tab-list-item hot "></a>
                <a id="tab_fav" class="tab-list-item fav"></a>
            </div>
        </section>
        <div id="list_hot_box" class="comic-list hot active">
            <ul id="list_hot">
                <li class="comic-item">
                    <a class="comic-link" href="https://m.ac.qq.com/comic/index/id/519855">
                        <div class="comic-cover">
                            <img class="cover-image" src="">
                        </div>
                        <div class="comic-info">
                            <strong class="comic-title">
                                王牌御史                                    </strong>
                            <small class="comic-update">2019-07-11 更新</small>
                            <small class="comic-hot">人气：522.8万</small>
                            <small class="comic-fav">收藏数：4312673</small>
                            <small class="comic-tag">玄幻 爆笑 都市</small>
                            <small class="comic-desc">
                                昼夜颠倒的新时代，勤劳的御史大人们降妖除魔打怪兽的欢乐故事~~在一个蛇精病一样爱好行为艺术的男主和一个穿着古装脾气暴躁上来就"跳楼"倒霉透顶的黑长直妹子中展开，漫画暂时每周五单新。恢复双更会再作通知的……
                            </small>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import './categoryComic.scss';
    import {getCategorys} from '@/api/category';

    export default {
        name: 'categoryComic',
        components: {},
        data() {
            return {
            }
        },
        mounted() {
        },
        methods: {}
    }
</script>
