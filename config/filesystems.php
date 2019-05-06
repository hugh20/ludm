<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Default Filesystem Disk
    |--------------------------------------------------------------------------
    |
    | Here you may specify the default filesystem disk that should be used
    | by the framework. The "local" disk, as well as a variety of cloud
    | based disks are available to your application. Just store away!
    |
    */

    'default' => env('FILESYSTEM_DRIVER', 'public'),

    /*
    |--------------------------------------------------------------------------
    | Default Cloud Filesystem Disk
    |--------------------------------------------------------------------------
    |
    | Many applications store files both locally and in the cloud. For this
    | reason, you may specify a default "cloud" driver here. This driver
    | will be bound as the Cloud disk implementation in the container.
    |
    */

    'cloud' => env('FILESYSTEM_CLOUD', 's3'),

    /*
    |--------------------------------------------------------------------------
    | Filesystem Disks
    |--------------------------------------------------------------------------
    |
    | Here you may configure as many filesystem "disks" as you wish, and you
    | may even configure multiple disks of the same driver. Defaults have
    | been setup for each driver as an example of the required options.
    |
    | Supported Drivers: "local", "ftp", "s3", "rackspace"
    |
    */

    'disks' => [

        'local' => [
            'driver' => 'local',
            'root' => storage_path('app'),
        ],

        'public' => [
            'driver' => 'local',
            'root' => storage_path('app/public'),
            'url' => env('APP_URL') . '/storage',
            'visibility' => 'public',
        ],

        's3' => [
            'driver' => 's3',
            'key' => env('AWS_ACCESS_KEY_ID'),
            'secret' => env('AWS_SECRET_ACCESS_KEY'),
            'region' => env('AWS_DEFAULT_REGION'),
            'bucket' => env('AWS_BUCKET'),
        ],
        'oss' => [
            'driver' => 'oss',
            'access_key_id' => env('ALI_OSS_ACCESS_KEY_ID'),
            'access_key_secret' => env('ALI_OSS_ACCESS_KEY_SECRET'),
            'endpoint' => env('ALI_OSS_ENDPOINT'),
            'bucket' => env('ALI_OSS_BUCKET'),
        ],

    ],

    // 配置的允许大小不能超过 PHP.ini 限制. 默认PHP POST 请求允许最大8MB，File Upload 最大 2MB
    'uploader' => [

        'folder' => ['avatar', 'advertisement', 'wang', 'tmp', 'new_version', 'carousel', 'article', 'blog', 'page', 'website', 'slide', 'link', 'video', 'annex', 'voice', 'navigation'],

        'application' => [
            'size_limit' => 204857600000, // 单位：字节，默认：5MB (5242880 B)  // 104857600
            'allowed_ext' => ['zip','rar','7z','gz', 'pdf','doc','docx','xls','xlsx','ppt','pptx'],
        ],
        // 图片
        'image' => [
            'size_limit' => 5242880, // 单位：字节，默认：5MB
            'allowed_ext' => ["png", "jpg", "gif", 'jpeg', 'bmp'],
        ],

        // 音频
        'audio' => [
            'size_limit' => 5242880, // 单位：字节，默认：5MB
            'allowed_ext' => ['mp3','wmv'],
        ],

        // 视频
        'video' => [
            'size_limit' => 5242880, // 单位：字节，默认：5MB
            'allowed_ext' => ['mp4'],
        ],

        // Ueditor 配置
        'ueditor' => [
            "imageActionName" => "uploadimage",
            "imageFieldName" => "upload_file",
            "imageMaxSize" => 5242880,
            "imageAllowFiles" => [".png", ".jpg", ".jpeg", ".gif", ".bmp"],
            "imageCompressEnable" => true,
            "imageCompressBorder" => 1600,
            "imageInsertAlign" => "none",
            "imageUrlPrefix" => "",
            "imagePathFormat" => "",
            "imageManagerUrlPrefix" => "",

            "imageManagerActionName" => "listimage",
            "imageManagerListSize" => 20,
            "fileManagerListSize" => 20,

            "snapscreenActionName" => "uploadimage",
            "snapscreenInsertAlign" => "none",
            "snapscreenUrlPrefix" => "",
            "snapscreenPathFormat" => "",

            "videoActionName" => "uploadvideo",
            "videoFieldName" => "upload_file",
            "videoMaxSize" => 5242880,
            "videoAllowFiles" => [".flv", ".swf", ".mkv", ".avi", ".rm", ".rmvb", ".mpeg", ".mpg", ".ogg", ".ogv", ".mov", ".wmv", ".mp4", ".webm", ".mp3", ".wav", ".mid"],
            "videoUrlPrefix" => "",
            "videoPathFormat" => "",

            "catcherLocalDomain" =>  ["127.0.0.1", "localhost", "img.baidu.com"],
            "catcherActionName" => "catchimage",
            "catcherFieldName" =>  "source",
            "catcherUrlPrefix" =>  "",
            "catcherMaxSize" =>  2048000,
            "catcherAllowFiles" =>  [".png", ".jpg", ".jpeg", ".gif", ".bmp"],
        ],

    ],
];
