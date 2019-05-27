<template>
    <div>
        <Header></Header>
        <Nav></Nav>
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
            return {}
        },
        computed: {},
        watch: {},
        mounted() {

        }
    }
</script>
