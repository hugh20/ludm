@extends('layouts.base')

@section('content')
    <!-- Banner与主菜单 -->
    <section class="banner-menu under-top-bar">
        <div class="banner-list-box">
            <div class="banner-list-pad"></div>
            <div class="loading bounce banner-list-loading">
                <div class="item"></div>
                <div class="item"></div>
                <div class="item"></div>
            </div>
            <ul class="banner-list">
                @foreach ($adverts as $advert)
                    <li class="item">
                        <a class="link"
                           title="{{$advert['name']}}"
                           href="{{$advert['link_url']}}"
                           data-pos="{{$loop->iteration}}">
                            <img class="cover"
                                 src="{{$advert['cover_image']['url']}}"
                                 onload="this.classList.add('load-ok');"/>
                        </a>
                    </li>
                @endforeach
            </ul>
            <ul class="dot-list">
                @foreach ($adverts as $advert)
                    <li class="dot"></li>
                @endforeach
            </ul>
        </div>
        <ul class="menu-list">
            <li class="item">
                <a class="link"
                   href="/category/index"
                   data-name="category">
                    <i class="icon category">[分]</i>
                    <span class="name">分类</span>
                </a>
            </li>
            <li class="item">
                <a class="link"
                   href="/vip/index"
                   data-name="rank">
                    <i class="icon rank">[奖]</i>
                    <span class="name">VIP</span>
                </a>
            </li>
            <li class="item">
                <a class="link"
                   href="/login/index"
                   data-name="schedule">
                    <i class="icon time">[表]</i>
                    <span class="name">登录</span>
                </a>
            </li>
            <li class="item">
                <a class="link"
                   href="/bookshelf/index?type=his"
                   data-name="history">
                    <i class="icon history">[钟]</i>
                    <span class="name">历史</span>
                </a>
            </li>
        </ul>
    </section>
    <!-- APP引导语 -->
    <!--<section class="app-guiding">-->
    <!--    <a class="app-guiding-download">-->
    <!--        <img class="app-guiding-img"-->
    <!--             src="//ugc.qpic.cn/manhua_detail/0/14_16_45_0b043261c475748ee26fb5d472ba71b2.jpg/0"/>-->
    <!--    </a>-->
    <!--    <a class="app-guiding-close">X</a>-->
    <!--</section>-->
    <!-- 编辑推荐 -->
    <section class="recommend">
        <h2 class="sub-title">
            <strong class="title-content">[无良推荐]</strong>
            <small class="desc">“看看小编们的恶趣味吧”</small>
            <a class="link-more" href="/index/more/type/suggest">[更多]</a>
        </h2>
        <!-- 智能推荐模块配置 begin -->
        <script>
            window.RecommendMod = (function () {
                var helperAdded = false;

                function RecommendMod(opts) {
                    this.adPos = opts.adPos;
                    this.sum = opts.sum;
                    this.comicId = opts.comicId;
                    this.poolId = opts.poolId;
                    this.listSelector = opts.listSelector;
                    this.templateSelector = opts.templateSelector;
                }

                RecommendMod.prototype = {
                    // 开始一系列检查和处理
                    startProcess: function () {
                        var self = this;
                        if (self.checkIsTarget()) {
                            self.loadRecommend(exposureAndBindClick);
                        } else {
                            exposureAndBindClick();
                        }
                        function exposureAndBindClick() {
                            self.exposure();
                            self.bindClick();
                        }
                    },
                    // 检查是否灰度目标
                    checkIsTarget: function () {
                        return true;    // 全量
                        // var uin = ek.cookie.getCookie('uin') ||
                        //         ek.cookie.getCookie('luin') ||
                        //         ek.cookie.getCookie('o_cookie') ||
                        //         ek.cookie.getCookie('pgv_pvid'),
                        //     tail = uin && uin.substr(-1);
                        // return tail && tail >= 1;
                    },
                    // 拉取服务端服务端推荐数据
                    loadRecommend: function (cb) {
                        var self = this,
                            adPos = this.adPos,
                            sum = this.sum,
                            comicId = this.comicId,
                            poolId = this.poolId;
                        ek.ajax({
                            url: '/Recommend/get/?num=' + sum + '&adpos=' + adPos +
                            (comicId ? '&comic_id=' + comicId : '') +
                            (poolId ? '&pool_id=' + poolId : ''),
                            type: 'GET',
                            success: function (data) {
                                if (data.status == 2 ||
                                    data.ret == 2) {
                                    self.render(data);
                                }
                                cb();
                            }
                        });
                    },
                    // 将数据渲染成页面元素
                    render: function (data) {
                        if (!helperAdded) {
                            helperAdded = true;
                            template.helper('joinTags', function (tags) {
                                var buffer = [];
                                for (var k in tags) {
                                    if (tags.hasOwnProperty(k)) {
                                        buffer.push(tags[k]);
                                    }
                                }
                                return buffer.join(' ');
                            });
                        }
                        var templateHtml = $(this.templateSelector).html(),
                            render = template.compile(templateHtml);
                        $(this.listSelector).html(render(data));
                    },
                    // 曝光（已展示）
                    exposure: function () {
                        var adPos = this.adPos,
                            comicIds = [],
                            traceId = '';
                        $(this.listSelector).find('[data-id][data-trace-id]').each(function () {
                            var $this = $(this),
                                comicId = $this.attr('data-id');
                            traceId = $this.attr('data-trace-id');
                            (comicIds.indexOf(comicId) < 0) && comicIds.push(comicId);
                        });
                        var recommendShow = new Image();
                        recommendShow.src = '/Recommend/view/?adpos=' + adPos + '&trace_id=' + traceId + '&result=' + comicIds.join(';');
                    },
                    // 绑定点击反馈
                    bindClick: function () {
                        var adPos = this.adPos;
                        $(this.listSelector).on('click', function (e) {
                            var item = e.target && $(e.target).closest('[data-id][data-trace-id]'),
                                comicId = item.attr('data-id'),
                                traceId = item.attr('data-trace-id');
                            var recommendClick = new Image();
                            recommendClick.src = '/Recommend/click/?adpos=' + adPos + '&trace_id=' + traceId + '&comic_id=' + comicId;
                        });
                    }
                };

                return RecommendMod;
            })();
        </script>
        <script>
            document.addEventListener('DOMContentLoaded', function () {
                // 开始启动智能推荐模块处理
                var recommend = new RecommendMod({
                    adPos: '910',
                    sum: 6,
                    listSelector: '.recommend-list',
                    templateSelector: '[data-tpl-name="recommend-list"]'
                });
                recommend.startProcess();
            });
        </script>
        <!-- 智能推荐模块配置 end -->
        <ul class="comic-list col-3 no-tag recommend-list">
            <li class="comic-item item-1">
                <a class="comic-link"
                   href="/comic/index/id/547278?trace_id=910_106.61.84.208_1558618935"
                   data-id="547278"
                   data-trace-id="910_106.61.84.208_1558618935"
                   data-pos="1">
                    <div class="comic-cover">
                        <img class="cover-image" src="picture/7195acc5db9b45b5bb0493320d14bfed.gif"/>
                    </div>
                    <div class="comic-content">
                        <strong class="comic-title">脱团大作战</strong>
                        <small class="comic-desc">
                            变成妹子开后宫                        </small>
                    </div>
                </a>
            </li>
            <li class="comic-item item-2">
                <a class="comic-link"
                   href="/comic/index/id/543124?trace_id=910_106.61.84.208_1558618935"
                   data-id="543124"
                   data-trace-id="910_106.61.84.208_1558618935"
                   data-pos="2">
                    <div class="comic-cover">
                        <img class="cover-image" src="picture/79382f4a609942ada8110ffcb1ae4ba1.gif"/>
                    </div>
                    <div class="comic-content">
                        <strong class="comic-title">火戟特工</strong>
                        <small class="comic-desc">
                            接单除妖，特工参上                        </small>
                    </div>
                </a>
            </li>
            <li class="comic-item item-3">
                <a class="comic-link"
                   href="/comic/index/id/551804?trace_id=910_106.61.84.208_1558618935"
                   data-id="551804"
                   data-trace-id="910_106.61.84.208_1558618935"
                   data-pos="3">
                    <div class="comic-cover">
                        <img class="cover-image" src="picture/a07dea1e0e6448599f772bccad9371c5.gif"/>
                    </div>
                    <div class="comic-content">
                        <strong class="comic-title">天神纠错组</strong>
                        <small class="comic-desc">
                            我的老板是天神~！                        </small>
                    </div>
                </a>
            </li>
            <li class="comic-item item-4">
                <a class="comic-link"
                   href="/comic/index/id/537515?trace_id=910_106.61.84.208_1558618935"
                   data-id="537515"
                   data-trace-id="910_106.61.84.208_1558618935"
                   data-pos="4">
                    <div class="comic-cover">
                        <img class="cover-image" src="picture/453d1c4912ba4bca9b1a40fa48fea6ca.gif"/>
                    </div>
                    <div class="comic-content">
                        <strong class="comic-title">白泽异闻录</strong>
                        <small class="comic-desc">
                            白泽，行走的美男计                        </small>
                    </div>
                </a>
            </li>
            <li class="comic-item item-5">
                <a class="comic-link"
                   href="/comic/index/id/534987?trace_id=910_106.61.84.208_1558618935"
                   data-id="534987"
                   data-trace-id="910_106.61.84.208_1558618935"
                   data-pos="5">
                    <div class="comic-cover">
                        <img class="cover-image" src="picture/29a6682aae6a4e22b7212970f53a2616.gif"/>
                    </div>
                    <div class="comic-content">
                        <strong class="comic-title">整容医师</strong>
                        <small class="comic-desc">
                            整形医生的明争暗斗                        </small>
                    </div>
                </a>
            </li>
            <li class="comic-item item-6">
                <a class="comic-link"
                   href="/comic/index/id/549152?trace_id=910_106.61.84.208_1558618935"
                   data-id="549152"
                   data-trace-id="910_106.61.84.208_1558618935"
                   data-pos="6">
                    <div class="comic-cover">
                        <img class="cover-image" src="picture/a2c592e49de345e5be00adbfc85badd1.gif"/>
                    </div>
                    <div class="comic-content">
                        <strong class="comic-title">阿多尼斯</strong>
                        <small class="comic-desc">
                            重生女主征服世界                        </small>
                    </div>
                </a>
            </li>
        </ul>
    </section>
    <!-- 条漫推荐 -->
    <section class="light-comic">
        <h2 class="sub-title">
            <strong class="title-content">[每日一推]</strong>
            <small class="desc">“弹幕君出没，快去抓住它！”</small>
            <a class="link-more" href="/Light/recommend">[更多]</a>
        </h2>
        <div class="light-comic-recommend"
             data-id="518333">
            <a class="link comic-cover"
               href="/Light/comicInfo/id/518333">
                <img class="cover-image"
                     src="picture/e2a11c231f4944ddb09bf459a470eee3.gif"/>
            </a>

            <a class="link comic-title">
                <span class="text">狐妖小红娘</span>
                <small class="artist">作者：小新</small>
            </a>
        </div>
    </section>


    <!-- 特别君 渠道临时屏蔽中 -->
    <section class="promotion">
        <h2 class="sub-title">
            <strong class="title-content">[特别君]</strong>
            <small class="desc"></small>
        </h2>
        <ul class="promotion-list">
            <li class="promotion-item">
                <a class="promotion-link"
                   href="http://m.ac.qq.com/event/topic_list_home/index.html"
                   data-pos="1">
                    <img class="promotion-cover"
                         src="picture/promotion-topics.jpg"/>
                </a>
            </li>
            <li class="promotion-item">
                <a class="promotion-link"
                   href="http://m.ac.qq.com/event/downloadGuide201707/index.shtml"
                   data-pos="2">
                    <img class="promotion-cover"
                         src="picture/promotion-vip.jpg"/>
                </a>
            </li>
        </ul>
    </section>
    <!-- 今日更新 -->
    <section class="update-today">
        <h2 class="sub-title">
            <strong class="title-content">[今日我更新]</strong>
            <small class="desc">“已把作者逼疯，吐血ing...”</small>
            <a class="link-more" href="/index/more/type/update">[更多]</a>
        </h2>
        <div class="update-area">
            <aside class="npc-2">[NPC图片2]</aside>
            <ul class="comic-list col-1">
                <li class="comic-item item-1">
                    <a class="comic-link"
                       href="/comic/index/id/634566"
                       data-id="634566"
                       data-pos="1">
                        <div class="comic-cover">
                            <img class="cover-image" src="picture/7bcb4fadaf9f4f888b019aa5cda4b683.gif"/>
                        </div>
                        <div class="comic-content">
                            <strong class="comic-title">侠客行</strong>
                            <small class="comic-artist">作者：凤凰娱乐</small>
                            <small class="comic-latest">更新到49话</small>
                            <ul class="rank-bar">
                                <li class="rank-star">[星]</li>
                                <li class="rank-star">[星]</li>
                                <li class="rank-star">[星]</li>
                                <li class="rank-star">[星]</li>
                                <li class="rank-score">7.9</li>
                            </ul>
                        </div>
                    </a>
                </li>
                <li class="comic-item item-2">
                    <a class="comic-link"
                       href="/comic/index/id/526730"
                       data-id="526730"
                       data-pos="2">
                        <div class="comic-cover">
                            <img class="cover-image" src="picture/a9927c17b39a4c41a0e9df74b6739bb5.gif"/>
                        </div>
                        <div class="comic-content">
                            <strong class="comic-title">我为苍生</strong>
                            <small class="comic-artist">作者：痞子赵</small>
                            <small class="comic-latest">更新到388话</small>
                            <ul class="rank-bar">
                                <li class="rank-star">[星]</li>
                                <li class="rank-star">[星]</li>
                                <li class="rank-star">[星]</li>
                                <li class="rank-star">[星]</li>
                                <li class="rank-star">[星]</li>
                                <li class="rank-score">8.6</li>
                            </ul>
                        </div>
                    </a>
                </li>
                <li class="comic-item item-3">
                    <a class="comic-link"
                       href="/comic/index/id/633503"
                       data-id="633503"
                       data-pos="3">
                        <div class="comic-cover">
                            <img class="cover-image" src="picture/ed737dd1f046453ea646ec8d4767f9ad.gif"/>
                        </div>
                        <div class="comic-content">
                            <strong class="comic-title">黑良</strong>
                            <small class="comic-artist">作者：十字星动漫</small>
                            <small class="comic-latest">更新到124话</small>
                            <ul class="rank-bar">
                                <li class="rank-star">[星]</li>
                                <li class="rank-star">[星]</li>
                                <li class="rank-star">[星]</li>
                                <li class="rank-star">[星]</li>
                                <li class="rank-star">[星]</li>
                                <li class="rank-score">9.3</li>
                            </ul>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </section>
    <!-- 追更入口 -->
    <section class="time-list">
        <h2 class="time-list-title">
            <a class="time-list-link"
               href="/comic/schedule">
                <img class="time-list-image"
                     alt="[追更早知道 - 一周更新表抢先看]"
                     src="picture/time-list.png"/>
            </a>
        </h2>
    </section>

    <!-- 日漫推荐 -->
    <section class="japan-comic">
        <h2 class="sub-title">
            <strong class="title-content">[日漫经典]</strong>
            <small class="desc">“那些年，一起挖过的宝藏。”</small>
            <a class="link-more" href="/index/more/type/jump">[更多]</a>
        </h2>
        <ul class="comic-list col-3 no-desc">
            <li class="comic-item item-1">
                <a class="comic-link"
                   href="/comic/index/id/552820"
                   data-id="552820"
                   data-pos="1">
                    <div class="comic-cover">
                        <img class="cover-image" src="picture/eaa83e065a7d4e6e8c7f35408640877f.gif"/>
                    </div>
                    <div class="comic-content">
                        <strong class="comic-title">真实账号</strong>
                        <small class="comic-tag">热血 冒险 科幻</small>
                    </div>
                </a>
            </li>
            <li class="comic-item item-2">
                <a class="comic-link"
                   href="/comic/index/id/549715"
                   data-id="549715"
                   data-pos="2">
                    <div class="comic-cover">
                        <img class="cover-image" src="picture/b0b742f8911349fa9801c11ffe9334e9.gif"/>
                    </div>
                    <div class="comic-content">
                        <strong class="comic-title">七人传奇</strong>
                        <small class="comic-tag">热血 冒险 玄幻</small>
                    </div>
                </a>
            </li>
            <li class="comic-item item-3">
                <a class="comic-link"
                   href="/comic/index/id/543782"
                   data-id="543782"
                   data-pos="3">
                    <div class="comic-cover">
                        <img class="cover-image" src="picture/d72ccaf687ff40c2bd5512fe3214ba10.gif"/>
                    </div>
                    <div class="comic-content">
                        <strong class="comic-title">干物妹！小埋</strong>
                        <small class="comic-tag">爆笑 萌系 生活</small>
                    </div>
                </a>
            </li>
        </ul>
    </section>
    <!-- 新作推荐 -->
    <section class="new-comic">
        <h2 class="sub-title">
            <strong class="title-content">[新作上线]</strong>
            <small class="desc">“趁热来一发！”</small>
            <a class="link-more" href="/index/more/type/new">[更多]</a>
        </h2>
        <!-- 智能推荐模块配置 begin -->
        <script>
            document.addEventListener('DOMContentLoaded', function () {
                // 开始启动智能推荐模块处理
                var recommend = new RecommendMod({
                    adPos: '49985',
                    sum: 3,
                    listSelector: '.new-comic .comic-list',
                    templateSelector: '[data-tpl-name="new-comic-list"]'
                });
                recommend.startProcess();
            });
        </script>
        <!-- 智能推荐模块配置 end -->
        <ul class="comic-list col-3 no-desc">
            <li class="comic-item item-1">
                <a class="comic-link"
                   href="/comic/index/id/638767?trace_id=49985_106.61.84.208_1558618935"
                   data-id="638767"
                   data-trace-id="49985_106.61.84.208_1558618935"
                   data-pos="1">
                    <div class="comic-cover">
                        <img class="cover-image" src="picture/0f828ca9e2d74885a5b6d94229b206c9.gif"/>
                    </div>
                    <div class="comic-content">
                        <strong class="comic-title">六界圣尊</strong>
                        <small class="comic-tag">爆笑 科幻</small>
                    </div>
                </a>
            </li>
            <li class="comic-item item-2">
                <a class="comic-link"
                   href="/comic/index/id/638573?trace_id=49985_106.61.84.208_1558618935"
                   data-id="638573"
                   data-trace-id="49985_106.61.84.208_1558618935"
                   data-pos="2">
                    <div class="comic-cover">
                        <img class="cover-image" src="picture/417899129f6c417989d0092058052666.gif"/>
                    </div>
                    <div class="comic-content">
                        <strong class="comic-title">镜·朱颜</strong>
                        <small class="comic-tag">玄幻 恋爱</small>
                    </div>
                </a>
            </li>
            <li class="comic-item item-3">
                <a class="comic-link"
                   href="/comic/index/id/640871?trace_id=49985_106.61.84.208_1558618935"
                   data-id="640871"
                   data-trace-id="49985_106.61.84.208_1558618935"
                   data-pos="3">
                    <div class="comic-cover">
                        <img class="cover-image" src="picture/a4e4e917dbad421fa0bbed5ca02e9d6d.gif"/>
                    </div>
                    <div class="comic-content">
                        <strong class="comic-title">最强杀神</strong>
                        <small class="comic-tag">都市 热血</small>
                    </div>
                </a>
            </li>
        </ul>
    </section>
@endsection

@section('script')

    <script src="js/core.js" crossorigin></script>

    <!--强制刷新-->
    <script>
        var pg_Index = new BIU.Page({
            name: 'pg_Index'
        });
    </script>
    <script src="js/index.js"></script>
@endsection
