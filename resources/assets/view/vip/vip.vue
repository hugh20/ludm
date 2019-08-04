<template>
    <div class="content-vip">
        <img :src="src">
    </div>
</template>

<script>
    import img from '../../images/qrcode.jpg';
    import {mapMutations} from 'vuex';
    import './vip.scss';

    export default {
        components: {},
        data() {
            return {
                src: img
            }
        },
        mounted(){
            this.setNoTitle(false);
            this.setTitle('付款');
        },
        methods:{
            ...mapMutations([
                'setNoTitle',
                'setTitle',
            ]),
        }
    }
</script>
