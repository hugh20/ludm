<template>
    <section :class="typeClass">
        <h2 class="sub-title">
            <strong class="title-content">[{{title}}]</strong>
            <small class="desc">“{{titleDesc}}”</small>
            <router-link class="link-more" :to="linkMore">[更多]</router-link>
        </h2>

        <ul :class="['comic-list', 'col-3', 'no-tag', typeClass + '-list']">
            <li :class="['comic-item', 'item-' + (index + 1)]" v-for="(item, index) in comicData">
                <router-link class="comic-link" :to="'/comic-desc/' + item.id + '?title=' + item.title">
                    <div class="comic-cover">
                        <img class="cover-image" :src="item.cover_image.url"/>
                    </div>
                    <div class="comic-content">
                        <strong class="comic-title">{{item.title}}</strong>
                        <small class="comic-desc">
                            {{item.keywords}}
                        </small>
                    </div>
                </router-link>
            </li>
        </ul>
    </section>
</template>
<script>
    import './recommend.scss';


    export default {
        name: 'Recommend',
        components: {},
        props: {
            title: String,
            titleDesc: String,
            linkMore: String,
            comicData: Array,
            typeClass: String
        },
        computed: {},
        methods: {}
    }
</script>
