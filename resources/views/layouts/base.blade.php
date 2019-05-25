<!DOCTYPE html>
<html>
<head>
    <meta name="baidu-site-verification" content="SEGRBySjTy"/>
    <meta charset="utf-8"/>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" />
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="site" content=""/>

    <!-- 关闭iOS电话号码识别、配置状态栏效果 -->
    <meta name="format-detection" content="telephone=no" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="white" />

    <!-- iOS主屏&书签图标 -->
    <link rel="apple-touch-icon-precomposed" sizes="57x57" href="images/touch-icon-iphone-114.png?v=35ef6fea80e50951" />
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="images/touch-icon-iphone-114.png?v=35ef6fea80e50951" />
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="images/touch-icon-ipad-144.png?v=784fdda39985ba20" />
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="images/touch-icon-ipad-144.png?v=784fdda39985ba20" />
    <link rel="shortcut icon" href="images/touch-icon-iphone-114.png?v=35ef6fea80e50951">
    <link rel="shortcut icon" sizes="196x196" href="touch-icon-iphone-196.png?v=271259d431f48a94">

    <!-- QQ浏览器锁定竖屏、全屏、应用模式 -->
    <!--<meta name="x5-orientation" content="portrait"/>-->
    <!--<meta name="x5-fullscreen" content="true"/>-->
    <meta name="x5-pagetype" content="webapp" />

    <!-- UC浏览器锁定竖屏、全屏、应用模式 -->
    <!--<meta name="screen-orientation" content="portrait"/>-->
    <!--<meta name="full-screen" content="yes"/>-->
    <!--<meta name="browsermode" content="application"/>-->

    <!-- 分享信息 -->
    <meta itemprop="image" content="images/share-icon.png?v=7ee367fb9d2965dc" />
    <meta itemprop="name" content="动漫" />
    <meta name="description" itemprop="description" content="" />

    <meta name="page-name" content="index" />

    <!-- 通用样式与脚本 -->
    <link rel="stylesheet" href="css/core.css" />
    <link rel="stylesheet" href="{{ mix('css/app.css') }}">
    <script>
        window.Laravel = <?php echo json_encode([
            'csrfToken' => csrf_token(),
        ]); ?>
    </script>
    <script>
        window.COOPERATION_CLIENT = '';

        window.pageAction = window.pageAction || {};
        window.presetPageAction = window.presetPageAction || {};
        ;
        /**
         * Created by krimeshu on 2016/6/6.
         */

        (function () {
            function Blocker(opts) {
                opts = opts || {};
                var timeKey = opts.timeKey || 'default';

                this.KEY = 'H5_BLOCKER-' + timeKey;
                this.EXPIRE_DAYS = 2;
                // this.BLOCK_TIME = ['00:00', '23:59'];
            }

            Blocker.prototype = {
                check: function () {
                    var isCooperation = COOPERATION_CLIENT ? true : false,
                        isPad = this.isPad(),
                        hasBlocked = this.getCookie(this.KEY),
                        // now = new Date(),
                        // today = [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
                        // blockTimeStart = new Date(today + ' ' + this.BLOCK_TIME[0]),
                        // blockTimeEnd = new Date(today + ' ' + this.BLOCK_TIME[1]),
                        // isBlockTime = now >= blockTimeStart && now < blockTimeEnd;
                        isBlockTime = true;
                    return (!isCooperation && !isPad && !hasBlocked && isBlockTime);
                },
                checkAndGo: function () {
                    if (this.check()) {
                        this.rememberBlocked();
                        this.goBlockPage();
                    }
                },
                checkAndDialog: function () {
                    if (this.check()) {
                        this.rememberBlocked();
                        this.showBlockDialog();
                    }
                },
                rememberBlocked: function () {
                    var expire = this.EXPIRE_DAYS * 24 * 60;
                    this.setCookie(this.KEY, new Date().getTime(), expire, '', '/');
                },
                goBlockPage: function () {
                    var channelIDs = { 'index': 1 },
                        channelID = channelIDs['index'];
                    window.location.href = '/block.html?retUrl=' + encodeURIComponent(window.location.href) +
                        (channelID ? '&channelID=' + channelID : '');
                },
                showBlockDialog: function () {
                    var self = this,
                        dialog = window.blockDialog;
                    if (dialog) {
                        dialog.open();
                    } else {
                        window.setTimeout(function () {
                            self.showBlockDialog();
                        }, 50);
                    }
                },
                getCookie: function (key) {
                    var allcookies = document.cookie;
                    var cookiesReg = new RegExp('(^|;)\\s*' + key + '\\s*(=\\s*([^;$]*?))?(;|$)');
                    var groups = cookiesReg.exec(allcookies);
                    return decodeURIComponent(groups ? (groups[3] || '') : '');
                },
                setCookie: function (key, value, expires, domain, path) {
                    var values = [key + '=' + encodeURIComponent(value)];
                    if (expires) {
                        if (typeof expires === 'number') {
                            var expiresTime = new Date();
                            expiresTime.setMinutes(expiresTime.getMinutes() + expires);
                            values.push('expires=' + expiresTime.toGMTString());
                        } else {
                            values.push('expires=' + expires);
                        }
                    }
                    values.push('domain=' + (domain || ''));
                    values.push('path=' + (path || '/'));
                    document.cookie = values.join(';');
                },
                isPad: function () {
                    var ua = window.navigator.userAgent;
                    return /(^| |\()iPad(;| |\/|$)/.test(ua);
                }
            };

            window.Blocker = Blocker;
        })();;
    </script>
    <!-- fragEnd: withOutDynamicConfig -->
    <script>
        window.COOPERATION_CLIENT = '';
    </script>
    <script>

        (function autoBlock() {
            // 拦截类型：页面、忽略、对话框（默认）
            var specBlockType = {
                'index': 'ignore',
                'chapter': 'ignore',
                'comic_info': 'ignore'
            };
            // 根据页面名称确定拦截类型，并做处理
            var blockType = specBlockType['index'];
            // 微博里不适合跳转拦截页，强制改为弹窗
            if (/(^| )(Weibo)( |\/|$|\()/i.test(navigator.userAgent)) {
                blockType = null;
            }
            switch (blockType) {
                case 'page':
                    new Blocker().checkAndGo();
                    break;
                case 'ignore':
                    break;
                default:
                    new Blocker().checkAndDialog();
                    break;
            }
        })();
    </script>
    <title>@yield('title'){{ config('app.name') }} </title>
    <link rel="stylesheet" href="css/index.css"/>
</head>
<body class="pushable">
<div id="app2">
    @include('layouts.common.navbar')
</div>
<div class="main container pusher" id="app">
    @yield('content')
    <messages message-session="{{ session()->get('toastrMsg.message') }}"
              message-type="{{ session()->get('toastrMsg.status') }}"></messages>
</div>
@include('layouts.common.footer')

{{--<script src="{{ mix('js/app.js') }}"></script>--}}
<script src="{{ mix('js/jquery.js') }}"></script>

@yield('script')

</body>

</html>
