<template>
    <article class="main under-top-bar">
        <section class="mod-bgGirl">
            <img :src="src">
        </section>
        <section class="mod-content">
            <div class="err-type2">
                <p>服务器开小差了...</p>
                <router-link class="btn-link w-230" to="/">去首页</router-link>
            </div>
        </section>
    </article>
</template>

<script>
    import error500 from '../../../images/npc-not-found.png';
    import {mapMutations} from 'vuex';
    import './error.scss';

    export default {
        components: {},
        data() {
            return {
                src: error500
            }
        },
        mounted(){
            this.setNoTitle(false);
            this.setTitle('错误页面');
        },
        methods:{
            ...mapMutations([
                'setNoTitle',
                'setTitle',
            ]),
        }
    }
</script>
