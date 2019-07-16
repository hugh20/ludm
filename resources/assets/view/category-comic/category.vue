<template>
    <section class="categoryList-content content-update">
        <div id="list_update_box" class="comic-list update">
            <ul id="list_update">
            </ul>
            <section class="mod-load-more">
                <div class="mlm-status-loading">
                    <div class="mlm-dots">
                        <span class="mlm-dot"></span>
                        <span class="mlm-dot"></span>
                        <span class="mlm-dot"></span>
                    </div>
                    <p class="mlm-info">嘿咻嘿咻加载中</p>
                </div>
                <div class="mlm-status-over">
                    客官，人家已经没有那个的啦~~
                </div>
                <div class="mlm-status-again">
                    <a class="mlm-btn-again">
                        再刷一次！&gt;_&lt;
                    </a>
                </div>
            </section>
        </div>
        <div id="list_hot_box" class="comic-list hot active">
            <ul id="list_hot">
                <li class="comic-item">
                    <a class="comic-link" href="https://m.ac.qq.com/comic/index/id/519855">
                        <div class="comic-cover">
                            <img class="cover-image" src="./妖怪 - 腾讯动漫_files/210">
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
            <section class="mod-load-more">
                <div class="mlm-status-loading">
                    <div class="mlm-dots">
                        <span class="mlm-dot"></span>
                        <span class="mlm-dot"></span>
                        <span class="mlm-dot"></span>
                    </div>
                    <p class="mlm-info">嘿咻嘿咻加载中</p>
                </div>
                <div class="mlm-status-over">
                    客官，人家已经没有那个的啦~~
                </div>
                <div class="mlm-status-again">
                    <a class="mlm-btn-again">
                        再刷一次！&gt;_&lt;
                    </a>
                </div>
            </section>
        </div>
    </section>
</template>

<script>
    import './category.scss';
    import {getCategorys} from '@/api/category';

    export default {
        name: '',
        components: {},
        data() {
            return {
                categorys: []
            }
        },
        mounted() {
            getCategorys().then((res) => {
                console.log(res.data);
                this.categorys = res.data;
            });
        },
        methods: {}
    }
</script>
