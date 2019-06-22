<template>
    <div>

        <section class="chapterAll-info under-top-bar">
            <a class="chapterAll-count">共64话</a>
            <a class="chapterAll-sequence reverse" id="btn_sequence">
                <span class="iconfont">&#xe60b;</span><span id="sequence_text">正序</span>
            </a>
        </section>
        <section class="chapter-list-box list-expanded" data-vip-free="1">
            <ul class="chapter-list normal">
                <li class="chapter-item">
                    <a class="chapter-link lock"
                       data-cid="91" data-seq="64"
                       href="/chapter/index/id/622756/cid/91">64</a>
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
    import './chapter.scss';
//    import {getAdverts, getIndexComic} from '@/api/index';

    export default {
        name: 'category',
        components: {
        },
        data() {
            return {
            }
        },
        mounted() {
            console.log(this.$route);
        },
        methods: {
        }
    }
</script>
