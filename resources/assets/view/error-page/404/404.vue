<template>
    <article class="main under-top-bar">
        <section class="mod-bgGirl">
            <img :src="src">
        </section>
        <section class="mod-content">
            <!--作品找不到-->
            <div class="err-type2">
                <p>大人，该作品被编辑拐跑了...</p>
                <router-link class="btn-link w-230" to="/">去首页</router-link>
            </div>
        </section>
    </article>
</template>

<script>
    import error404 from '../../../images/npc-not-found.png'
    import './error.scss';
    import {mapMutations} from 'vuex';

    export default {
        components: {},
        data() {
            return {
                src: error404
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
