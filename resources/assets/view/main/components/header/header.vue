<template>
    <div>
        <header :class="{'top-bar': true, 'no-title': noTitle}">
            <a class="btn-top back" @click="$router.go(-1)">[返回]</a>

            <h1 class="top-title">{{title}}</h1>

            <div class="top-logo">[腾讯动漫LOGO]</div>

            <div class="padding"></div>
            <!--<a class="btn-top search" href="/search/index">[搜索]</a>-->
            <a class="btn-top menu" @click="showMenu">[菜单]</a>
        </header>
        <Nav :class="menu_state ? 'show':  ''" :display="menu_state ? 'block' : 'none'" @jumpView="closeMenu"></Nav>
    </div>
</template>
<script>
    import './header.scss';
    import Nav from '../../components/nav';
    import {mapState} from 'vuex';


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
        computed: {
            ...mapState({
                title: state => state.app.title,
                noTitle: state => state.app.noTitle
            })
        },
        methods: {
            showMenu() {
                this.menu_state = !this.menu_state;
                console.log(this.menu_state);
            },
            closeMenu(value){
                console.log(value);
                this.menu_state = value;
            }
        }
    }
</script>
