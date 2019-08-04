<template>
    <article class="main under-top-bar">
        <section class="mod-bgGirl">
            <img :src="src">
        </section>
        <section class="mod-content">
            <div class="err-type2">
                <p>您没有浏览这个页面的权限...</p>
                <router-link class="btn-link w-230" to="/">去首页</router-link>
            </div>
        </section>
    </article>
</template>

<script>
    import error401 from '../../../images/npc-not-found.png';
    import {mapMutations} from 'vuex';
    import './error.scss';

    export default {
        components: {},
        data() {
            return {
                src: error401
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
