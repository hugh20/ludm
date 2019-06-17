<template>
    <div>
        <!--推荐分类-->
        <section class="category-strong under-top-bar">
            <ul class="category-strong-ul">
                <li class="strong-ul-item">
                    <a class="strong-ul-item-link" href="/category/listAll?type=tm&rank=upt">
                        <strong>条漫</strong>
                        <small>城会玩</small>
                    </a>
                </li>
                <li class="strong-ul-item">
                    <a class="strong-ul-item-link" href="/category/listAll?type=dj&rank=upt">
                        <strong>独家</strong>
                        <small>就我有</small>
                    </a>
                </li>
                <li class="strong-ul-item">
                    <a class="strong-ul-item-link" href="/category/listAll?type=wj&rank=upt">
                        <strong>完结</strong>
                        <small>选我咯</small>
                    </a>
                </li>
                <li class="strong-ul-item">
                    <a class="strong-ul-item-link" href="/category/listAll?type=rm&rank=upt">
                        <strong>日漫</strong>
                        <small>神作集</small>
                    </a>
                </li>
            </ul>
        </section>

        <!--普通分类列表-->
        <section class="category-normal">
            <ul class="category-normal-ul">
                <li class="category-normal-item">
                    <a class="item-link" href="/category/listAll?type=kb&rank=pgv">
                        <span class="item-name">| 恐怖</span>
                        <img class="item-cover" src="picture/03bfc90afefb4a799a4745a88e0248b5.gif">
                    </a>
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
    import './category.scss';
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
