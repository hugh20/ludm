<template>
    <header class="top-bar no-title">
        <a class="btn-top back">[返回]</a>

        <h1 class="top-title">#top_title#</h1>

        <div class="top-logo">[腾讯动漫LOGO]</div>

        <div class="padding"></div>
        <!--<a class="btn-top search" href="/search/index">[搜索]</a>-->
        <a class="btn-top menu" @click="showMenu">[菜单]</a>
    </header>
</template>
<script>
    import './header.scss'

    export default {
        name: 'Header',
        components: {},
        props: {},
        data(){
            return {
                menu_state: false,
            };
        },
        computed: {},
        methods: {
            showMenu() {
                this.menu_state = !this.menu_state;
                this.$emit('on-show-menu', this.menu_state);
            }
        }
    }
</script>
