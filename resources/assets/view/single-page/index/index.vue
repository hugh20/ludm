<template>
    <div>
        <!-- Banner与主菜单 -->
        <section class="banner-menu under-top-bar">
            <!--轮播图-->
            <ul class="menu-list">
                <li class="item">
                    <a class="link"
                       href="/category/index"
                       data-name="category">
                        <i class="icon category">[分]</i>
                        <span class="name">分类</span>
                    </a>
                </li>
                <li class="item">
                    <a class="link"
                       href="/vip/index"
                       data-name="rank">
                        <i class="icon rank">[奖]</i>
                        <span class="name">VIP</span>
                    </a>
                </li>
                <li class="item">
                    <a class="link"
                       href="/login/index"
                       data-name="schedule">
                        <i class="icon time">[表]</i>
                        <span class="name">登录</span>
                    </a>
                </li>
                <li class="item">
                    <a class="link"
                       href="/bookshelf/index?type=his"
                       data-name="history">
                        <i class="icon history">[钟]</i>
                        <span class="name">历史</span>
                    </a>
                </li>
            </ul>
        </section>


        <recommend title="dfsaf" title-desc="dsf" link-more="sdag" :comic-data="[]" type-class="recommend"></recommend>
    </div>
</template>

<script>
    import './index.scss';
    import Recommend from 'components/recommend';

    export default {
        name: 'index',
        components: {
            Recommend
        },
        data() {
            return {}
        },
        mounted() {
        },
        methods: {}
    }
</script>
