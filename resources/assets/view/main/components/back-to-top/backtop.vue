<template>
    <a class="back-to-top show" href="javascript: void(0);" @click="scrollTop">[返回顶部]</a>
</template>
<script>
    import './backtop.scss';

    export default {
        name: 'BackToTop',
        components: {},
        props: {},
        computed: {},
        methods: {
            scrollTop(){
//                console.log(window.scrollY,  window.pageYOffset, document.body.scrollTop, document.documentElement.scrollTop);
                document.documentElement.scrollTop = 0;
                document.body.scrollTop = 0;
                window.pageYOffset = 0;
                window.scrollY = 0;
            }
        }
    }
</script>
