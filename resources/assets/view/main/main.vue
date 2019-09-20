<template>
    <div>
        <Header></Header>
        <router-view/>
        <back-to-top></back-to-top>
    </div>
</template>
<script>
    import Header from './components/header';
    import Nav from './components/nav';
    import BackToTop from './components/back-to-top';
    import './main.scss';
    import {mapMutations} from 'vuex';


    export default {
        name: 'Main',
        components: {
            Header,
            BackToTop,
            Nav
        },
        data() {
            return {
            }
        },
        computed: {},
        watch: {},
        mounted() {
        },
        methods: {
        }
    }
</script>
