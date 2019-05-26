<template>
    <div>
        <header></header>
        <nav></nav>
        <router-view/>
        <back-to-top></back-to-top>
        <footer></footer>
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
            return {}
        },
        computed: {},
        watch: {},
        mounted() {

        }
    }
</script>
