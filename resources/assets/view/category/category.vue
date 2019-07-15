<template>
    <div>
        <!--推荐分类-->
        <section class="category-strong under-top-bar">
            <ul class="category-strong-ul">
                <li class="strong-ul-item">
                    <a class="strong-ul-item-link" href="/category/listAll?type=1">
                        <strong>条漫</strong>
                        <small>城会玩</small>
                    </a>
                </li>
                <li class="strong-ul-item">
                    <a class="strong-ul-item-link" href="/category/listAll?type=2">
                        <strong>独家</strong>
                        <small>就我有</small>
                    </a>
                </li>
                <li class="strong-ul-item">
                    <a class="strong-ul-item-link" href="/category/listAll?type=3">
                        <strong>完结</strong>
                        <small>选我咯</small>
                    </a>
                </li>
                <li class="strong-ul-item">
                    <a class="strong-ul-item-link" href="/category/listAll?type=4">
                        <strong>日漫</strong>
                        <small>神作集</small>
                    </a>
                </li>
            </ul>
        </section>

        <!--普通分类列表-->
        <section class="category-normal">
            <ul class="category-normal-ul">
                <li class="category-normal-item" v-for="item in categorys">
                    <router-link to="/" class="item-link">
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
                categorys:[]
            }
        },
        mounted() {
            getCategorys().then((res) => {
                console.log(res.data);
                this.categorys = res.data;
            });
        },
        methods: {
        }
    }
</script>
