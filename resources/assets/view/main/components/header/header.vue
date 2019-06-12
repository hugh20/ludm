<template>
    <div>
        <header class="top-bar no-title">
            <a class="btn-top back">[返回]</a>

            <h1 class="top-title">#top_title#</h1>

            <div class="top-logo">[腾讯动漫LOGO]</div>

            <div class="padding"></div>
            <!--<a class="btn-top search" href="/search/index">[搜索]</a>-->
            <a class="btn-top menu" @click="showMenu">[菜单]</a>
        </header>
        <Nav :class="menu_state ? 'show':  ''" :display="menu_state ? 'block' : 'none'"></Nav>
    </div>
</template>
<script>
    import './header.scss';
    import Nav from '../../components/nav';

    export default {
        name: 'Header',
        components: {
            Nav
        },
        props: {},
        data(){
            return {
                menu_state: false
            };
        },
        computed: {},
        methods: {
            showMenu() {
                this.menu_state = !this.menu_state;
                console.log(this.menu_state);
            }
        }
    }
</script>
