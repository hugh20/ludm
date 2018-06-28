## lucms

## 项目概述

- 产品名称：lucms
- demo: https://lucms.codehaoshi.com/dashboard  账号：dev@lucms.com  密码： 123456

lucms 是一个基于 `laravel5.5*` 与 `iviewjs` 开发的一套后台管理系统。

<p align="center">
  <br>
  <b>Ucer-admin</b>
  <br>
  <a href="https://www.codehaoshi.com">
    <img src="https://gitee.com/uploads/images/2018/0628/193946_711f853f_923445.png "lucms-1.png" width=800>
  </a>
  <br>
  <a href="https://www.codehaoshi.com">
    <img src="https://gitee.com/uploads/images/2018/0628/194014_117a03f4_923445.png "lucms-2.png" width=800>
  </a>
  <a href="https://www.codehaoshi.com">
    <img src="https://gitee.com/uploads/images/2018/0628/194036_ec75ea27_923445.png "lucms3.png" width=800>
  </a>
  <a href="https://www.codehaoshi.com">
    <img src="https://gitee.com/uploads/images/2018/0628/194105_bb523b94_923445.png "lucms4.png" width=800>
  </a>
</p>

## 功能如下

- 用户认证 —— 登录、退出
- 用户管理 —— 头像上传、资料修改
- 权限系统 —— 多角色、多权限管理
- 权限系统 —— 多角色、多权限管理
- 附件管理 —— 服务器文件管理
- 新闻系统 —— 基础新闻管理

## 开发环境部署/安装

本项目代码使用 PHP 框架 Laravel 5.5 开发，本地开发环境使用 Laravel Homestead。

下文将在假定读者已经安装好了 Homestead 的情况下进行说明。如果您还未安装 Homestead，可以参照 Homestead 安装与设置 进行安装配置。

### 基础安装

- 克隆源代码

克隆 lucms 源代码到本地：

> git@gitee.com:zhjaa/lucms.git

- php 配置修改

1). 配置本地环境，根目录指向 `public`

2). 目录访问权限配置

```text
  $ chmod -R 777 storage
```

3). 安装 passport 客户端, vue api 请求 token 认证要用到
```
 $ art passport:install
```

4). 生成配置文件
```html
cp .env.example .env
你可以根据情况修改 .env 文件里的内容，如数据库连接、缓存、邮件设置等：
```

5). 生成数据表及生成测试数据

/database/lucms.sql
```sh
$ art migrate
```

6). 生成密钥
```html
art key:generate
```

7). 设定图片上传软链接 `storage/app/public/*` 到 `public/storage/images`

8). 配置 .env 
```sh
.

.

.
QUEUE_DRIVER=sync 「同步模式，不使用任何队列」 => redis

.

.

.
```

- 修改 js 配置

1). 修改基本域名

`lucms/lu/src/libs/util.js`
```js
const ajaxUrl = env === 'development'
    ? 'http://lucms.test/api'
    : env === 'production'
        ? 'http://lucms.test/api'
        : 'http://lucms.test/api';
```

`lucms/lu/src/main.js`
```js
const app_url = '//lucms.test/api';
```

### vuejs 安装与运行

1). 开发环境
```
cd lu
cnpm install
npm run dev
```

## 扩展包使用情况

| 扩展包	| 一句话描述	| 本项目应用场景|
| --- | --- | --- |
| [laravel/passport](https://github.com/laravel/passport)     | jwt 用户认证包          | api 登录认证|
| [Intervention/image](https://github.com/Intervention/image)     | 图片处理包     | 图片上传裁剪|
| [laravel-permission:~2.7](https://github.com/spatie/laravel-permission)     | 权限管理包     | 权限管理|
| [mews/purifier](https://github.com/mewebstudio/Purifier)     | xss过滤     | 富文本编辑器|
| [overtrue/pinyin](https://github.com/overtrue/pinyin)     | 基于 CC-CEDICT 词典的中文转拼音工具     | 文章 seo 友好的 url|
| [nrk/predis](https://github.com/nrk/predis)     | redis 队列驱动器     | 队列管理 |
| [laravel/horizon](https://laravel-china.org/docs/laravel/5.5/horizon/1345)     | 队列监控     | 队列监控 |


## 队列

| Jobs | 一句话描述|
|--- | --- |
| TranslateSlug | 翻译文章 title |


