<template>
    <div>
        <!--推荐分类-->
        <section class="category-strong under-top-bar">
            <ul class="category-strong-ul">
                <li class="strong-ul-item" v-for="(item, index) in categorys1">
                    <router-link :to="'/category-comic-list/' + (index + 1)" class="strong-ul-item-link">
                        <strong>{{item.name}}</strong>
                        <small>城会玩</small>
                    </router-link>
                </li>

            </ul>
        </section>

        <!--普通分类列表-->
        <section class="category-normal">
            <ul class="category-normal-ul">
                <li class="category-normal-item" v-for="(item, index) in categorys2">
                    <router-link :to="{ path: '/category-comic-list/' + (index + 1), params: { category: item.name }}" class="item-link">
                        <span class="item-name">| {{item.name}} </span>
                        <img class="item-cover" :src="item.cover_image.url">
                    </router-link>
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
    import './category.scss';
    import {getCategorys} from '@/api/category';

    export default {
        name: 'category',
        components: {
        },
        data() {
            return {
                categorys1:[],
                categorys2:[],

            }
        },
        mounted() {
            getCategorys().then((res) => {
                this.categorys1 = res.data.slice(0, 4);
                this.categorys2 = res.data.slice(4);
                console.log(res.data);
            });
        },
        methods: {
        }
    }
</script>
