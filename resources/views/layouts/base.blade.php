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
    <link rel="stylesheet" href="{{ mix('css/app.css') }}">
    <script>
        window.Laravel = <?php echo json_encode([
            'csrfToken' => csrf_token(),
        ]); ?>
    </script>
    <title>@yield('title'){{ config('app.name') }} </title>
</head>
<body>

@yield('content')

@yield('script')
</body>
</html>
