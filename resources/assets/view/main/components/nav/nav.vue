<template>
    <!-- 导航菜单 -->
    <div class="nav-menu-box" style="{'display': display}">
        <div class="nav-menu-bg"></div>
        <div class="nav-menu">
            <ul class="nav-list">
                <li class="item" data-name="index">
                    <a class="link" href="/">
                        <i class="icon index">[家]</i>
                        <span class="name">首页</span>
                    </a>
                </li>
                <li class="item" data-name="category">
                    <a class="link" href="/category/index">
                        <i class="icon category">[分]</i>
                        <span class="name">分类</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    import './nav.scss'

    export default {
        name: 'Nav',
        components: {},
        data(){
            return {
                is_show: ''
            };
        },
        props: {
            display: String
        },
        computed: {},
        methods: {}
    }
</script>
