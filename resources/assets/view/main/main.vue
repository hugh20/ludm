<template>
    <div>
        <Header @on-show-menu="show_menu = $event"></Header>
        <Nav :class="show_menu ? 'show':  ''" :display="show_menu ? 'display' : 'none'"></Nav>
        <router-view/>
        <back-to-top></back-to-top>
        <Footer></Footer>
    </div>
</template>
<script>
    import Header from './components/header';
    import Nav from './components/nav';
    import Footer from './components/footer';
    import BackToTop from './components/back-to-top';
    import './main.scss';

    export default {
        name: 'Main',
        components: {
            Header,
            Footer,
            BackToTop,
            Nav
        },
        data() {
            return {
                show_menu: false
            }
        },
        computed: {},
        watch: {},
        mounted() {

        },
        methods: {}
    }
</script>
