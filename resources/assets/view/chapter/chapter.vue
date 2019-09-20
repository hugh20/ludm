<template>
    <div>
        <section class="chapterAll-info under-top-bar">
            <a class="chapterAll-count">共{{sections.length}}章</a>
            <a class="chapterAll-sequence reverse" @click="reverse">
                <span class="iconfont" :style="iconfont">&#xe60b;</span><span>{{sort_text}}</span>
            </a>
        </section>
        <section class="chapter-list-box list-expanded" data-vip-free="1">
            <ul class="chapter-list normal">
                <li class="chapter-item" v-for="section in sections">
                    <router-link :class="{'chapter-link' : true, lock: section.access_type > 0 && !vip}"
                                 :to="{path:'/art/' + section.id, query:{lock: section.access_type > 0 && !vip, comic_id: id, min: min, max: max}}">
                        {{section.weight}}
                    </router-link>
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
    import './chapter.scss';
    import { mapState, mapMutations } from 'vuex';
    import { getChapters } from '@/api/chapter';
    //    import {getAdverts, getIndexComic} from '@/api/index';

    export default {
        name: 'chapter',
        components: {},
        props: ['id'],
        data() {
            return {
                sort: 'desc',
                sort_text: '正序',
                sections: [],
                iconfont: {transform: 'rotate(180deg)'},
                min: 1,
                max: 1
            }
        },
        computed: {
            ...mapState({
                vip: state => state.user.vip,

            })
        },
        mounted() {
            this.setNoTitle(false);
            getChapters({id: this.id, sort: this.sort}).then((res) => {
                if (res.status == 'success') {
                    console.log(res);
                    this.setTitle(res.data.title);
                    this.sections = res.data.section;
                    if(this.sections.length){
                        this.min = Math.min(this.sections[this.sections.length - 1].weight, this.sections[0].weight);
                        this.max = Math.max(this.sections[this.sections.length - 1].weight, this.sections[0].weight);
                    }
                    this.setMetaTitle(res.data.title);
                    this.setDescription(res.data.descriptions);
                    this.setKeywords(res.data.keywords);
                }

            });
        },
        methods: {
            ...mapMutations([
                'setNoTitle',
                'setTitle',
                'setMetaTitle',
                'setDescription',
                'setKeywords',
            ]),
            reverse(){
                getChapters({id: this.id, sort: this.sort == 'desc' ? 'asc' : 'desc'}).then((res) => {
                    if (res.status == 'success') {
                        this.sections = res.data.section;
                        if(this.sections.length){
                            this.min = Math.min(this.sections[this.sections.length - 1].weight, this.sections[0].weight);
                            this.max = Math.max(this.sections[this.sections.length - 1].weight, this.sections[0].weight);
                        }
                        if(this.sort == 'desc'){
                            this.sort = 'asc';
                            this.sort_text = '返序';
                            this.iconfont = {transform: 'rotate(0deg)'};
                        }else{
                            this.sort = 'desc';
                            this.sort_text = '正序';
                            this.iconfont = {transform: 'rotate(180deg)'};
                        }
                    }
                });
            }
        }
    }
</script>
