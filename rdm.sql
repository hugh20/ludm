/*
Navicat MySQL Data Transfer

Source Server         : 本地
Source Server Version : 50721
Source Host           : localhost:3306
Source Database       : rdm

Target Server Type    : MYSQL
Target Server Version : 50721
File Encoding         : 65001

Date: 2019-07-25 21:47:21
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for dm_admin_messages
-- ----------------------------
DROP TABLE IF EXISTS `dm_admin_messages`;
CREATE TABLE `dm_admin_messages` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `admin_id` int(11) NOT NULL DEFAULT '0' COMMENT '发给哪个管理员的消息,0为所有管理员',
  `user_id` int(11) NOT NULL DEFAULT '0' COMMENT '哪个用户发的消息，对应 app 用户表',
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `type` enum('SY','FK') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'SY',
  `content` varchar(2000) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `status` enum('U','R') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'U' COMMENT '消息状态',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `admin_messages_status_index` (`status`),
  KEY `admin_messages_type_index` (`type`),
  KEY `admin_messages_user_id_index` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of dm_admin_messages
-- ----------------------------

-- ----------------------------
-- Table structure for dm_admin_users
-- ----------------------------
DROP TABLE IF EXISTS `dm_admin_users`;
CREATE TABLE `dm_admin_users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `enable` enum('T','F') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'F' COMMENT '启用状态：F禁用，T启用',
  `is_admin` enum('T','F') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'F' COMMENT '是否可登录后台：F否，是',
  `description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '一句话描述',
  `head_image` int(11) NOT NULL DEFAULT '0' COMMENT '头像',
  `remember_token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `admin_users_email_unique` (`email`),
  KEY `admin_users_head_image_index` (`head_image`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of dm_admin_users
-- ----------------------------

-- ----------------------------
-- Table structure for dm_advertisement_positions
-- ----------------------------
DROP TABLE IF EXISTS `dm_advertisement_positions`;
CREATE TABLE `dm_advertisement_positions` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '广告位名称',
  `description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '广告位描述',
  `type` enum('default','model','spa') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'default' COMMENT '广告位类型:默认、跳转到模型、单页面',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of dm_advertisement_positions
-- ----------------------------
INSERT INTO `dm_advertisement_positions` VALUES ('1', '砖石卡座', '轮播图下面的几个模块入口', 'default', '2019-05-08 22:02:51', '2019-05-25 12:21:27');
INSERT INTO `dm_advertisement_positions` VALUES ('2', '轮播图', '', 'default', '2019-05-25 12:23:29', '2019-05-25 12:23:29');

-- ----------------------------
-- Table structure for dm_advertisements
-- ----------------------------
DROP TABLE IF EXISTS `dm_advertisements`;
CREATE TABLE `dm_advertisements` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '广告标题',
  `cover_image` int(11) NOT NULL DEFAULT '0' COMMENT '广告封面图片',
  `content` text COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '广告内容:json_encode([raw:xxx,html:xxx])',
  `descriptions` text COLLATE utf8mb4_unicode_ci COMMENT '描述',
  `weight` int(11) NOT NULL DEFAULT '20' COMMENT '权重',
  `advertisement_positions_id` int(11) NOT NULL DEFAULT '0' COMMENT '所属广告位',
  `link_url` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '跳转 url:为空则不跳转',
  `model_column_value` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT 'json_encode([model=>article,column=>slug,value=markdown-language)',
  `start_at` timestamp NULL DEFAULT NULL,
  `end_at` timestamp NULL DEFAULT NULL,
  `enable` enum('T','F') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'F' COMMENT '启用状态：F禁用，T启用',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `advertisements_cover_image_index` (`cover_image`),
  KEY `advertisements_advertisement_positions_id_index` (`advertisement_positions_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of dm_advertisements
-- ----------------------------
INSERT INTO `dm_advertisements` VALUES ('1', '是打发', '10', '{\"raw\":\"\",\"html\":\"<p><img src=\\\"http:\\/\\/dm.lc\\/storage\\/images\\/file\\/wang\\/201905\\/06\\/U5yGDrjJC8oqyZDBaTfFx60Qpqcox13xykK80M8n.jpeg\\\" alt=\\\"U5yGDrjJC8oqyZDBaTfFx60Qpqcox13xykK80M8n.jpeg\\\" \\/><img src=\\\"http:\\/\\/dm.lc\\/storage\\/images\\/file\\/wang\\/201905\\/06\\/7xZ2i6jPBt8uvGJOoCrCCxW83xTcZtK6x2TsuMMx.jpeg\\\" alt=\\\"7xZ2i6jPBt8uvGJOoCrCCxW83xTcZtK6x2TsuMMx.jpeg\\\" \\/><img src=\\\"http:\\/\\/dm.lc\\/storage\\/images\\/file\\/wang\\/201905\\/06\\/pZ5vARpblv6ikKhTV28Wv2DeK3N9X15X8oeWLE29.jpeg\\\" alt=\\\"pZ5vARpblv6ikKhTV28Wv2DeK3N9X15X8oeWLE29.jpeg\\\" \\/><img src=\\\"http:\\/\\/dm.lc\\/storage\\/images\\/file\\/wang\\/201905\\/06\\/I02SLCg1wPw4bjU1MQV43T683jE4XYYjNjy7ZYq4.jpeg\\\" alt=\\\"I02SLCg1wPw4bjU1MQV43T683jE4XYYjNjy7ZYq4.jpeg\\\" \\/><br \\/><\\/p>\"}', null, '20', '1', 'https://baidu.com', '{\"model\":\"\",\"column\":\"\",\"value\":\"\"}', null, null, 'T', '2019-05-08 23:50:58', '2019-05-25 12:25:37');
INSERT INTO `dm_advertisements` VALUES ('2', '发多少分开了', '8', '{\"raw\":\"\",\"html\":\"<p>\\u591a\\u798f\\u591a\\u5bff<\\/p>\"}', '', '20', '2', 'http://dm.lc/', '{\"model\":\"\",\"column\":\"\",\"value\":\"\"}', null, null, 'T', '2019-05-25 12:24:13', '2019-05-25 12:24:45');
INSERT INTO `dm_advertisements` VALUES ('3', 'dsfghj', '9', '{\"raw\":\"\",\"html\":\"<p>\\u591a\\u798f\\u591a\\u5bfffdsghj<\\/p>\"}', 'gfdfh', '0', '2', 'http://dm.lc/', '{\"model\":\"\",\"column\":\"\",\"value\":\"\"}', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'T', '2019-05-25 14:56:50', '2019-05-25 14:56:50');
INSERT INTO `dm_advertisements` VALUES ('4', 'asdfghj', '11', '{\"raw\":\"\",\"html\":\"<p>\\u591a\\u798f\\u591a\\u5bfffdsghjsgdh<\\/p>\"}', 'dsfd', '20', '2', 'http://dm.lc/', '{\"model\":\"\",\"column\":\"\",\"value\":\"\"}', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'T', '2019-05-25 15:15:12', '2019-05-25 15:21:50');

-- ----------------------------
-- Table structure for dm_alipay_notifies
-- ----------------------------
DROP TABLE IF EXISTS `dm_alipay_notifies`;
CREATE TABLE `dm_alipay_notifies` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `model_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'undefined' COMMENT '订单类型:一般写表名称:users,取return_param下的第一个值',
  `notify_time` timestamp NULL DEFAULT NULL COMMENT '交易创建时间',
  `notify_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '通知类型',
  `notify_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '通知id',
  `app_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '支付宝分配给开发者的应用Id',
  `transaction_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '支付宝交易凭证号',
  `order_no` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '服务器订单号',
  `out_biz_no` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '商户业务号',
  `trade_state` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '交易状态',
  `amount` decimal(9,2) NOT NULL DEFAULT '0.00' COMMENT '本次交易支付的订单金额，单位为人民币（元）',
  `subject` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '订单标题',
  `body` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '商品描述',
  `refund_fee` decimal(9,2) NOT NULL DEFAULT '0.00' COMMENT '退款通知中，返回总退款金额，单位为元，支持两位小数',
  `trade_create_time` timestamp NULL DEFAULT NULL COMMENT '交易创建时间',
  `pay_time` timestamp NULL DEFAULT NULL COMMENT '交易付款时间',
  `trade_close_time` timestamp NULL DEFAULT NULL COMMENT '交易结束时间',
  `channel` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '支付渠道',
  `return_param` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '参数：多个以_param_分隔',
  `other` text COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'json 信息',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `alipay_notifies_order_no_index` (`order_no`),
  KEY `alipay_notifies_transaction_id_index` (`transaction_id`),
  KEY `alipay_notifies_amount_index` (`amount`),
  KEY `alipay_notifies_trade_state_index` (`trade_state`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of dm_alipay_notifies
-- ----------------------------

-- ----------------------------
-- Table structure for dm_api_messages
-- ----------------------------
DROP TABLE IF EXISTS `dm_api_messages`;
CREATE TABLE `dm_api_messages` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `admin_id` int(11) NOT NULL DEFAULT '0' COMMENT '哪个管理员发的消息',
  `user_id` int(11) NOT NULL DEFAULT '0' COMMENT '发给哪个用户的消息,0为所有管理员',
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `content` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `url` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '跳转url',
  `status` enum('U','R') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'U' COMMENT '消息状态',
  `type` enum('SY') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'SY',
  `is_alert_at_home` enum('F','T') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'F' COMMENT '是否在首页弹出提示框，已读后就不再弹出',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `api_messages_status_index` (`status`),
  KEY `api_messages_type_index` (`type`),
  KEY `api_messages_user_id_index` (`user_id`),
  KEY `api_messages_is_alert_at_home_index` (`is_alert_at_home`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of dm_api_messages
-- ----------------------------

-- ----------------------------
-- Table structure for dm_app_versions
-- ----------------------------
DROP TABLE IF EXISTS `dm_app_versions`;
CREATE TABLE `dm_app_versions` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `port` enum('A') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'A' COMMENT '留置有多个 app 的情况',
  `system` enum('ANDROID','IOS','ALL') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'ANDROID',
  `version_sn` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '1.0.0',
  `version_intro` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `package` int(11) NOT NULL DEFAULT '0' COMMENT '对应的包',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `app_versions_system_index` (`system`),
  KEY `app_versions_version_sn_index` (`version_sn`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of dm_app_versions
-- ----------------------------

-- ----------------------------
-- Table structure for dm_areas
-- ----------------------------
DROP TABLE IF EXISTS `dm_areas`;
CREATE TABLE `dm_areas` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `areaid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `area` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `cityid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  KEY `areas_cityid_index` (`cityid`),
  KEY `areas_area_index` (`area`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of dm_areas
-- ----------------------------

-- ----------------------------
-- Table structure for dm_articles
-- ----------------------------
DROP TABLE IF EXISTS `dm_articles`;
CREATE TABLE `dm_articles` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '文章标题',
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT 'slug',
  `keywords` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '关键词,以英文逗号隔开',
  `descriptions` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '描述',
  `cover_image` int(11) NOT NULL DEFAULT '0' COMMENT '封面图片',
  `content` text COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '内容',
  `user_id` int(11) NOT NULL DEFAULT '0' COMMENT '作者 id',
  `category_id` int(11) NOT NULL DEFAULT '0' COMMENT '分类 id',
  `view_count` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '查看数量',
  `vote_count` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '点赞数量',
  `comment_count` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '评论数量',
  `collection_count` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '收藏数量',
  `enable` enum('T','F') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'F' COMMENT '启用状态：F禁用，T启用',
  `recommend` enum('T','F') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'F' COMMENT '是否推荐到首页',
  `top` enum('T','F') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'F' COMMENT '是否置顶',
  `weight` int(11) NOT NULL DEFAULT '20' COMMENT '权重',
  `access_type` enum('PUB','PRI','PWD') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'PUB' COMMENT '访问权限类型：公开、私密、密码访问',
  `access_value` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '访问权限值：PUB->不公开的用户ids,PRI->公开的用户ids,PWD->访问密码',
  `created_year` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '创建年：2018',
  `created_month` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '01',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `articles_weight_index` (`weight`),
  KEY `articles_category_id_index` (`category_id`),
  KEY `articles_user_id_index` (`user_id`),
  KEY `articles_created_year_index` (`created_year`),
  KEY `articles_created_month_index` (`created_month`),
  KEY `articles_access_type_index` (`access_type`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of dm_articles
-- ----------------------------
INSERT INTO `dm_articles` VALUES ('1', '我的多看看', 'wo-de-duo-kan-kan', '是打发', '啥地方工会经费', '10', '{\"raw\":\"\\u6492\\u53cd\\u5bf9\\u8be5\\u53f7\\u7801\\u7684\\u516c\\u53f8\\u80a1\\u4efd![](http:\\/\\/dm.lc\\/storage\\/images\\/file\\/wang\\/201905\\/06\\/U5yGDrjJC8oqyZDBaTfFx60Qpqcox13xykK80M8n.jpeg)![](http:\\/\\/dm.lc\\/storage\\/images\\/file\\/wang\\/201905\\/06\\/pZ5vARpblv6ikKhTV28Wv2DeK3N9X15X8oeWLE29.jpeg)![](http:\\/\\/dm.lc\\/storage\\/images\\/file\\/wang\\/201905\\/06\\/I02SLCg1wPw4bjU1MQV43T683jE4XYYjNjy7ZYq4.jpeg)![](http:\\/\\/dm.lc\\/storage\\/images\\/file\\/wang\\/201905\\/06\\/7xZ2i6jPBt8uvGJOoCrCCxW83xTcZtK6x2TsuMMx.jpeg)\",\"html\":\"<p>\\u6492\\u53cd\\u5bf9\\u8be5\\u53f7\\u7801\\u7684\\u516c\\u53f8\\u80a1\\u4efd<img src=\\\"http:\\/\\/dm.lc\\/storage\\/images\\/file\\/wang\\/201905\\/06\\/U5yGDrjJC8oqyZDBaTfFx60Qpqcox13xykK80M8n.jpeg\\\" alt=\\\"\\\" \\/><img src=\\\"http:\\/\\/dm.lc\\/storage\\/images\\/file\\/wang\\/201905\\/06\\/pZ5vARpblv6ikKhTV28Wv2DeK3N9X15X8oeWLE29.jpeg\\\" alt=\\\"\\\" \\/><img src=\\\"http:\\/\\/dm.lc\\/storage\\/images\\/file\\/wang\\/201905\\/06\\/I02SLCg1wPw4bjU1MQV43T683jE4XYYjNjy7ZYq4.jpeg\\\" alt=\\\"\\\" \\/><img src=\\\"http:\\/\\/dm.lc\\/storage\\/images\\/file\\/wang\\/201905\\/06\\/7xZ2i6jPBt8uvGJOoCrCCxW83xTcZtK6x2TsuMMx.jpeg\\\" alt=\\\"\\\" \\/><\\/p>\"}', '1', '1', '0', '0', '0', '0', 'T', 'F', 'F', '20', 'PUB', '', '2019', '05', '2019-05-07 00:29:42', '2019-05-08 23:42:38');
INSERT INTO `dm_articles` VALUES ('2', 'sgdhfgjh', 'sgdhfgjh', '', '', '10', '{\"raw\":\"dsfgh\",\"html\":\"<p>dsfgh<\\/p>\"}', '1', '1', '0', '0', '0', '0', 'T', 'F', 'F', '20', 'PUB', '', '2019', '05', '2019-05-11 18:33:19', '2019-05-12 01:21:34');
INSERT INTO `dm_articles` VALUES ('3', 'adsfghjk', 'adsfghjk', 'dsf', 'dfsss', '7', '{\"raw\":\"fs\",\"html\":\"<p>fs<\\/p>\"}', '1', '1', '0', '0', '0', '0', 'T', 'F', 'F', '20', 'PUB', '', '2019', '07', '2019-07-20 22:53:27', '2019-07-20 22:53:27');
INSERT INTO `dm_articles` VALUES ('4', 'sfdfffffffff', 'sfdfffffffff', 'sdff', 'dsfff', '8', '{\"raw\":\"fs\",\"html\":\"<p>fs<\\/p>\"}', '1', '1', '0', '0', '0', '0', 'T', 'F', 'F', '20', 'PUB', '', '2019', '07', '2019-07-20 22:54:24', '2019-07-20 22:54:24');
INSERT INTO `dm_articles` VALUES ('5', 'dsagfhgjgcxzf', 'dsagfhgjgcxzf', 'sdfgh', 'sdfgnh', '9', '{\"raw\":\"fsfdghj\",\"html\":\"<p>fsfdghj<\\/p>\"}', '1', '1', '0', '0', '0', '0', 'T', 'F', 'F', '20', 'PUB', '', '2019', '07', '2019-07-20 22:55:17', '2019-07-20 22:55:17');
INSERT INTO `dm_articles` VALUES ('6', 'dfsgfhjg', 'dfsgfhjg', 'sdfghv', 'fsdgh', '10', '{\"raw\":\"szdfxghjzzxn\",\"html\":\"<p>szdfxghjzzxn<\\/p>\"}', '1', '1', '0', '0', '0', '0', 'T', 'F', 'F', '20', 'PUB', '', '2019', '07', '2019-07-20 22:55:51', '2019-07-20 22:55:51');
INSERT INTO `dm_articles` VALUES ('7', 'zfdxgchvbjnm', 'zfdxgchvbjnm', 'sdfgnhbm,n', '是否都改好没那么', '10', '{\"raw\":\"szdfxghjzzxn\",\"html\":\"<p>szdfxghjzzxn<\\/p>\"}', '1', '3', '0', '0', '0', '0', 'T', 'F', 'F', '20', 'PUB', '', '2019', '07', '2019-07-20 22:56:18', '2019-07-20 22:56:18');
INSERT INTO `dm_articles` VALUES ('8', '对方是个很健康', 'dui-fang-shi-ge-hen-jian-kang', 'dsfghm', '反对该回家', '8', '{\"raw\":\"szdfxghjzzxn\\u662f\\u5927\\u5bb6\\u89c2\\u770b\\u5ba2\\u6237\",\"html\":\"<p>szdfxghjzzxn\\u662f\\u5927\\u5bb6\\u89c2\\u770b\\u5ba2\\u6237<\\/p>\"}', '1', '1', '0', '0', '0', '0', 'T', 'F', 'F', '20', 'PUB', '', '2019', '07', '2019-07-20 22:56:42', '2019-07-20 22:56:42');
INSERT INTO `dm_articles` VALUES ('9', '你们还旷工一天的人也是', 'ni-men-hai-kuang-gong-yi-tian-de-ren-ye-shi', 'zxcvty654', '的发现个初级', '10', '{\"raw\":\"szdfxghjzzxn\",\"html\":\"<p>szdfxghjzzxn<\\/p>\"}', '1', '1', '0', '0', '0', '0', 'T', 'F', 'F', '20', 'PUB', '', '2019', '07', '2019-07-20 22:57:03', '2019-07-20 22:57:03');
INSERT INTO `dm_articles` VALUES ('10', 'vbnhjgtyrewq', 'vbnhjgtyrewq', '程序把你们', '生股份合计', '7', '{\"raw\":\"szdfxghjzzxn\\u662f\\u5927\\u5bb6\\u89c2\\u770b\\u5ba2\\u6237\",\"html\":\"<p>szdfxghjzzxn\\u662f\\u5927\\u5bb6\\u89c2\\u770b\\u5ba2\\u6237<\\/p>\"}', '1', '1', '0', '0', '0', '0', 'T', 'F', 'F', '20', 'PUB', '', '2019', '07', '2019-07-20 22:57:21', '2019-07-20 22:57:21');
INSERT INTO `dm_articles` VALUES ('11', '房贷vbn', 'fang-dai-vbn', 'vxbnm', '双方的高考后即可', '7', '{\"raw\":\"szdfxghjzzxn\\u662f\\u5927\\u5bb6\\u89c2\\u770b\\u5ba2\\u6237\",\"html\":\"<p>szdfxghjzzxn\\u662f\\u5927\\u5bb6\\u89c2\\u770b\\u5ba2\\u6237<\\/p>\"}', '1', '1', '0', '0', '0', '0', 'T', 'F', 'F', '20', 'PUB', '', '2019', '07', '2019-07-20 22:57:38', '2019-07-20 22:57:38');
INSERT INTO `dm_articles` VALUES ('12', '，好久没跟你比vcvxz', 'hao-jiu-mei-gen-ni-bi-vcvxz', '对方是个好寂寞', '东风股份合计', '7', '{\"raw\":\"szdfxghjzzxn\",\"html\":\"<p>szdfxghjzzxn<\\/p>\"}', '1', '1', '0', '0', '0', '0', 'T', 'F', 'F', '20', 'PUB', '', '2019', '07', '2019-07-20 23:00:10', '2019-07-20 23:00:10');

-- ----------------------------
-- Table structure for dm_attachments
-- ----------------------------
DROP TABLE IF EXISTS `dm_attachments`;
CREATE TABLE `dm_attachments` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL DEFAULT '0' COMMENT '上传用户 id',
  `ip` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '附件上传者 ip',
  `original_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '原始名称',
  `mime_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT 'mime 类型',
  `size` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0' COMMENT '大小/kb',
  `type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'tmp' COMMENT '类型',
  `storage_position` enum('oss','local','api_local','api_oss') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'local' COMMENT '存储位置',
  `domain` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '域名地址,https://jiayouhaoshi.com',
  `storage_path` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '附件相对 storage 目录,app/public/images/avatars',
  `link_path` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '附件相对网站根目录,访问路径：storage/images/avatars',
  `storage_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '存储名称',
  `enable` enum('T','F') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'T' COMMENT '启用状态：F禁用，T启用',
  `use_status` enum('T','F') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'F' COMMENT '使用状态：F临时图片，T使用中',
  `remark` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '附件备注',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `attachments_user_id_index` (`user_id`),
  KEY `attachments_use_status_index` (`use_status`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of dm_attachments
-- ----------------------------

-- ----------------------------
-- Table structure for dm_carousels
-- ----------------------------
DROP TABLE IF EXISTS `dm_carousels`;
CREATE TABLE `dm_carousels` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `cover_image` int(11) NOT NULL DEFAULT '0',
  `description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `url` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `weight` int(11) NOT NULL DEFAULT '10',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of dm_carousels
-- ----------------------------
INSERT INTO `dm_carousels` VALUES ('1', '8', '', '', '10', '2019-05-08 23:48:33', '2019-05-08 23:48:33');

-- ----------------------------
-- Table structure for dm_categories
-- ----------------------------
DROP TABLE IF EXISTS `dm_categories`;
CREATE TABLE `dm_categories` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '分类名称',
  `cover_image` int(11) NOT NULL DEFAULT '0' COMMENT '封面图片',
  `description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '描述',
  `weight` int(11) NOT NULL DEFAULT '10',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `categories_cover_image_index` (`cover_image`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of dm_categories
-- ----------------------------
INSERT INTO `dm_categories` VALUES ('1', '条漫', '8', '条漫', '1', '2019-05-04 10:48:41', '2019-07-15 22:43:27');
INSERT INTO `dm_categories` VALUES ('2', '独家', '8', '独家', '10', '2019-07-15 22:43:47', '2019-07-15 22:43:47');
INSERT INTO `dm_categories` VALUES ('3', '完结', '11', '完结', '10', '2019-07-15 22:44:05', '2019-07-15 22:44:05');
INSERT INTO `dm_categories` VALUES ('4', '就我', '11', '就我', '10', '2019-07-15 22:44:18', '2019-07-15 22:44:18');
INSERT INTO `dm_categories` VALUES ('5', '恐怖', '11', '恐怖', '10', '2019-07-18 00:20:17', '2019-07-18 00:20:17');

-- ----------------------------
-- Table structure for dm_cities
-- ----------------------------
DROP TABLE IF EXISTS `dm_cities`;
CREATE TABLE `dm_cities` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `cityid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `city` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `provinceid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  KEY `cities_provinceid_index` (`provinceid`),
  KEY `cities_city_index` (`city`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of dm_cities
-- ----------------------------

-- ----------------------------
-- Table structure for dm_failed_jobs
-- ----------------------------
DROP TABLE IF EXISTS `dm_failed_jobs`;
CREATE TABLE `dm_failed_jobs` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of dm_failed_jobs
-- ----------------------------

-- ----------------------------
-- Table structure for dm_files
-- ----------------------------
DROP TABLE IF EXISTS `dm_files`;
CREATE TABLE `dm_files` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `type` enum('image','voice','video','annex','file') COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '文件类型',
  `disks` enum('local','public','s3','oss','azure','aliyun','qiniu','upyun','huawei','baidu') COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '文件类型',
  `path` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '文件路径',
  `mime_type` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '文件mimeType',
  `md5` char(32) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'Md5',
  `title` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '文件标题',
  `folder` char(20) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '文件对象类型',
  `object_id` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '文件对象ID',
  `storage_id` varchar(64) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '文件对象ID',
  `size` int(11) NOT NULL DEFAULT '0' COMMENT '文件大小',
  `width` smallint(6) NOT NULL DEFAULT '0' COMMENT '宽度',
  `height` smallint(6) NOT NULL DEFAULT '0' COMMENT '高度',
  `downloads` mediumint(9) NOT NULL DEFAULT '0' COMMENT '下载次数',
  `public` enum('0','1') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '1' COMMENT '是否公开',
  `editor` enum('0','1') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0' COMMENT '富编辑器图片',
  `status` enum('0','1') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0' COMMENT '附件状态',
  `created_op` int(11) NOT NULL DEFAULT '0' COMMENT '创建人',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `md5_type_folder_unique` (`md5`,`type`,`folder`),
  KEY `type_index` (`type`),
  KEY `folder_index` (`folder`),
  KEY `object_id_index` (`object_id`),
  KEY `public_index` (`public`),
  KEY `status_index` (`status`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of dm_files
-- ----------------------------
INSERT INTO `dm_files` VALUES ('7', 'file', 'public', 'images/file/wang/201905/06/U5yGDrjJC8oqyZDBaTfFx60Qpqcox13xykK80M8n.jpeg', 'image/jpeg', '43a88659e50fe3ec4fe58723a7c1e3ba', '65e3aa6b1c54238e726f08c27d020743.jpg', 'wang', '0', null, '61278', '960', '720', '0', '1', '0', '1', '0', '2019-05-06 23:31:31', '2019-05-06 23:31:31', null);
INSERT INTO `dm_files` VALUES ('8', 'file', 'public', 'images/file/wang/201905/06/7xZ2i6jPBt8uvGJOoCrCCxW83xTcZtK6x2TsuMMx.jpeg', 'image/jpeg', 'dd308735fcee1b77a1e2dd0ba44f71db', '463ce54943b1a36bda8410b5cf5b8886.jpg', 'wang', '0', null, '47353', '673', '496', '0', '1', '0', '1', '0', '2019-05-06 23:33:23', '2019-05-06 23:33:23', null);
INSERT INTO `dm_files` VALUES ('9', 'file', 'public', 'images/file/wang/201905/06/pZ5vARpblv6ikKhTV28Wv2DeK3N9X15X8oeWLE29.jpeg', 'image/jpeg', '8e7df96f8dfef612657435e21687f035', '2a9ee5a614d8a450c1ad1ab5b6fbe08e.jpg', 'wang', '0', null, '97660', '1024', '1024', '0', '1', '0', '1', '0', '2019-05-06 23:33:23', '2019-05-06 23:33:23', null);
INSERT INTO `dm_files` VALUES ('10', 'file', 'public', 'images/file/wang/201905/06/I02SLCg1wPw4bjU1MQV43T683jE4XYYjNjy7ZYq4.jpeg', 'image/jpeg', 'd45583f9ec2d7f1d2ed48040385a126b', 'fc0743f05efad91272b011b40e03d0d0.jpg', 'wang', '0', null, '238275', '1024', '640', '0', '1', '0', '1', '0', '2019-05-06 23:43:18', '2019-05-06 23:43:18', null);
INSERT INTO `dm_files` VALUES ('11', 'file', 'public', 'images/file/advertisement/201905/25/pvETPcY1dyGkAKLlgmtcrJWQBaCHwAv3xjiYLReT.jpeg', 'image/jpeg', '14d650e47b270403214209766650d45c', '0.jpeg', 'advertisement', '0', null, '66934', '750', '436', '0', '1', '0', '0', '1', '2019-05-25 15:21:48', '2019-05-25 15:21:48', null);

-- ----------------------------
-- Table structure for dm_ip_filters
-- ----------------------------
DROP TABLE IF EXISTS `dm_ip_filters`;
CREATE TABLE `dm_ip_filters` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `type` enum('white','black') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'white' COMMENT '类型',
  `ip` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT 'IP',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ip_filters_ip_unique` (`ip`),
  KEY `ip_filters_type_index` (`type`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of dm_ip_filters
-- ----------------------------

-- ----------------------------
-- Table structure for dm_logs
-- ----------------------------
DROP TABLE IF EXISTS `dm_logs`;
CREATE TABLE `dm_logs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL DEFAULT '0',
  `type` enum('C','U','R','D','L','O') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'O' COMMENT '日志所属操作类型:模型 CURD 操作,后台登录,其它操作',
  `table_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '表名：articles',
  `ip` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT 'IP',
  `content` text COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '日志内容,json_encode([data=>insert into ... ,message=>添加数据)',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `logs_user_id_index` (`user_id`),
  KEY `logs_type_index` (`type`),
  KEY `logs_table_name_index` (`table_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of dm_logs
-- ----------------------------

-- ----------------------------
-- Table structure for dm_migrations
-- ----------------------------
DROP TABLE IF EXISTS `dm_migrations`;
CREATE TABLE `dm_migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of dm_migrations
-- ----------------------------
INSERT INTO `dm_migrations` VALUES ('1', '2014_10_12_100000_create_password_resets_table', '1');
INSERT INTO `dm_migrations` VALUES ('2', '2016_06_01_000001_create_oauth_auth_codes_table', '1');
INSERT INTO `dm_migrations` VALUES ('3', '2016_06_01_000002_create_oauth_access_tokens_table', '1');
INSERT INTO `dm_migrations` VALUES ('4', '2016_06_01_000003_create_oauth_refresh_tokens_table', '1');
INSERT INTO `dm_migrations` VALUES ('5', '2016_06_01_000004_create_oauth_clients_table', '1');
INSERT INTO `dm_migrations` VALUES ('6', '2016_06_01_000005_create_oauth_personal_access_clients_table', '1');
INSERT INTO `dm_migrations` VALUES ('7', '2018_06_19_100726_create_permission_tables', '1');
INSERT INTO `dm_migrations` VALUES ('8', '2018_06_19_104740_seed_roles_and_permissions_data', '1');
INSERT INTO `dm_migrations` VALUES ('9', '2018_06_25_044857_oauth_access_token_providers', '1');
INSERT INTO `dm_migrations` VALUES ('10', '2018_06_28_155337_create_failed_jobs_table', '1');
INSERT INTO `dm_migrations` VALUES ('11', '2018_07_07_112147_create_users_table', '1');
INSERT INTO `dm_migrations` VALUES ('12', '2018_07_07_123102_create_admin_users_table', '1');
INSERT INTO `dm_migrations` VALUES ('13', '2018_07_07_123220_create_attachments_table', '1');
INSERT INTO `dm_migrations` VALUES ('14', '2018_07_07_124609_add_description_to_roles_table', '1');
INSERT INTO `dm_migrations` VALUES ('15', '2018_07_07_124746_add_description_to_permissions_table', '1');
INSERT INTO `dm_migrations` VALUES ('16', '2018_07_07_124856_create_advertisement_positions_table', '1');
INSERT INTO `dm_migrations` VALUES ('17', '2018_07_07_125225_create_advertisements_table', '1');
INSERT INTO `dm_migrations` VALUES ('18', '2018_07_07_130107_create_categories_table', '1');
INSERT INTO `dm_migrations` VALUES ('19', '2018_07_07_130328_create_tags_table', '1');
INSERT INTO `dm_migrations` VALUES ('20', '2018_07_07_130428_create_model_has_tags_table', '1');
INSERT INTO `dm_migrations` VALUES ('21', '2018_07_07_134918_create_articles_table', '1');
INSERT INTO `dm_migrations` VALUES ('22', '2018_07_07_141918_create_logs_table', '1');
INSERT INTO `dm_migrations` VALUES ('23', '2018_07_07_142556_create_ip_filters_table', '1');
INSERT INTO `dm_migrations` VALUES ('24', '2018_07_17_090002_add_phone_to_users_table', '1');
INSERT INTO `dm_migrations` VALUES ('25', '2018_07_31_142658_create_smses_table', '1');
INSERT INTO `dm_migrations` VALUES ('26', '2018_08_23_114057_create_provinces_table', '1');
INSERT INTO `dm_migrations` VALUES ('27', '2018_08_23_114113_create_cities_table', '1');
INSERT INTO `dm_migrations` VALUES ('28', '2018_08_23_114153_create_areas_table', '1');
INSERT INTO `dm_migrations` VALUES ('29', '2018_08_25_114220_create_alipay_notifies_table', '1');
INSERT INTO `dm_migrations` VALUES ('30', '2018_08_25_114241_create_weixinpay_notifies_table', '1');
INSERT INTO `dm_migrations` VALUES ('31', '2018_08_27_101831_create_pay_notify_raws_table', '1');
INSERT INTO `dm_migrations` VALUES ('32', '2018_08_29_185221_create_system_versions_table', '1');
INSERT INTO `dm_migrations` VALUES ('33', '2018_08_31_192337_create_system_configs_table', '1');
INSERT INTO `dm_migrations` VALUES ('34', '2018_09_25_144618_create_admin_messages_table', '1');
INSERT INTO `dm_migrations` VALUES ('35', '2018_09_25_144632_create_api_messages_table', '1');
INSERT INTO `dm_migrations` VALUES ('36', '2018_09_27_180209_create_carousels_table', '1');
INSERT INTO `dm_migrations` VALUES ('37', '2018_09_28_103501_create_mobile_connect_user_lists_table', '1');
INSERT INTO `dm_migrations` VALUES ('38', '2018_10_02_093825_create_app_versions_table', '1');
INSERT INTO `dm_migrations` VALUES ('39', '2017_03_17_202713_create_files_table', '2');
INSERT INTO `dm_migrations` VALUES ('40', '2018_06_23_221222_create_multiple_files_table', '2');

-- ----------------------------
-- Table structure for dm_mobile_connect_user_lists
-- ----------------------------
DROP TABLE IF EXISTS `dm_mobile_connect_user_lists`;
CREATE TABLE `dm_mobile_connect_user_lists` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL DEFAULT '0',
  `register_id` int(11) NOT NULL DEFAULT '0' COMMENT '大于0表示已经注册过了',
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `last_invited_at` int(11) NOT NULL DEFAULT '0' COMMENT '最近一次邀请时间,时间戳',
  `first_alpha` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '用户姓名的拼音的第一个字母，用于筛选',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `mobile_connect_user_lists_user_id_index` (`user_id`),
  KEY `mobile_connect_user_lists_register_id_index` (`register_id`),
  KEY `mobile_connect_user_lists_phone_index` (`phone`),
  KEY `mobile_connect_user_lists_first_alpha_index` (`first_alpha`),
  KEY `mobile_connect_user_lists_last_invited_at_index` (`last_invited_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of dm_mobile_connect_user_lists
-- ----------------------------

-- ----------------------------
-- Table structure for dm_model_has_permissions
-- ----------------------------
DROP TABLE IF EXISTS `dm_model_has_permissions`;
CREATE TABLE `dm_model_has_permissions` (
  `permission_id` int(10) unsigned NOT NULL,
  `model_id` int(10) unsigned NOT NULL,
  `model_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`permission_id`,`model_id`,`model_type`),
  KEY `model_has_permissions_model_id_model_type_index` (`model_id`,`model_type`),
  CONSTRAINT `model_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `dm_permissions` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of dm_model_has_permissions
-- ----------------------------

-- ----------------------------
-- Table structure for dm_model_has_roles
-- ----------------------------
DROP TABLE IF EXISTS `dm_model_has_roles`;
CREATE TABLE `dm_model_has_roles` (
  `role_id` int(10) unsigned NOT NULL,
  `model_id` int(10) unsigned NOT NULL,
  `model_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`role_id`,`model_id`,`model_type`),
  KEY `model_has_roles_model_id_model_type_index` (`model_id`,`model_type`),
  CONSTRAINT `model_has_roles_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `dm_roles` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of dm_model_has_roles
-- ----------------------------
INSERT INTO `dm_model_has_roles` VALUES ('1', '1', 'App\\Models\\User');

-- ----------------------------
-- Table structure for dm_model_has_tags
-- ----------------------------
DROP TABLE IF EXISTS `dm_model_has_tags`;
CREATE TABLE `dm_model_has_tags` (
  `tag_id` int(10) unsigned NOT NULL,
  `model_id` int(10) unsigned NOT NULL,
  `model_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`tag_id`,`model_type`,`model_id`),
  KEY `model_has_tags_model_id_model_type_index` (`model_id`,`model_type`),
  CONSTRAINT `model_has_tags_tag_id_foreign` FOREIGN KEY (`tag_id`) REFERENCES `dm_tags` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of dm_model_has_tags
-- ----------------------------
INSERT INTO `dm_model_has_tags` VALUES ('1', '1', 'App\\Models\\Article');
INSERT INTO `dm_model_has_tags` VALUES ('2', '1', 'App\\Models\\Article');
INSERT INTO `dm_model_has_tags` VALUES ('1', '2', 'App\\Models\\Section');
INSERT INTO `dm_model_has_tags` VALUES ('2', '2', 'App\\Models\\Section');
INSERT INTO `dm_model_has_tags` VALUES ('2', '3', 'App\\Models\\Article');
INSERT INTO `dm_model_has_tags` VALUES ('5', '3', 'App\\Models\\Article');
INSERT INTO `dm_model_has_tags` VALUES ('3', '3', 'App\\Models\\Section');
INSERT INTO `dm_model_has_tags` VALUES ('5', '3', 'App\\Models\\Section');
INSERT INTO `dm_model_has_tags` VALUES ('4', '4', 'App\\Models\\Article');
INSERT INTO `dm_model_has_tags` VALUES ('5', '4', 'App\\Models\\Article');
INSERT INTO `dm_model_has_tags` VALUES ('1', '5', 'App\\Models\\Article');
INSERT INTO `dm_model_has_tags` VALUES ('2', '5', 'App\\Models\\Article');
INSERT INTO `dm_model_has_tags` VALUES ('3', '5', 'App\\Models\\Article');
INSERT INTO `dm_model_has_tags` VALUES ('4', '5', 'App\\Models\\Article');
INSERT INTO `dm_model_has_tags` VALUES ('2', '6', 'App\\Models\\Article');
INSERT INTO `dm_model_has_tags` VALUES ('3', '6', 'App\\Models\\Article');
INSERT INTO `dm_model_has_tags` VALUES ('1', '7', 'App\\Models\\Article');
INSERT INTO `dm_model_has_tags` VALUES ('2', '7', 'App\\Models\\Article');
INSERT INTO `dm_model_has_tags` VALUES ('3', '7', 'App\\Models\\Article');
INSERT INTO `dm_model_has_tags` VALUES ('4', '7', 'App\\Models\\Article');
INSERT INTO `dm_model_has_tags` VALUES ('1', '8', 'App\\Models\\Article');
INSERT INTO `dm_model_has_tags` VALUES ('2', '9', 'App\\Models\\Article');
INSERT INTO `dm_model_has_tags` VALUES ('4', '9', 'App\\Models\\Article');
INSERT INTO `dm_model_has_tags` VALUES ('1', '10', 'App\\Models\\Article');
INSERT INTO `dm_model_has_tags` VALUES ('4', '10', 'App\\Models\\Article');
INSERT INTO `dm_model_has_tags` VALUES ('3', '11', 'App\\Models\\Article');
INSERT INTO `dm_model_has_tags` VALUES ('2', '12', 'App\\Models\\Article');
INSERT INTO `dm_model_has_tags` VALUES ('4', '12', 'App\\Models\\Article');

-- ----------------------------
-- Table structure for dm_multiple_files
-- ----------------------------
DROP TABLE IF EXISTS `dm_multiple_files`;
CREATE TABLE `dm_multiple_files` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `multiple_file_table_id` int(10) unsigned NOT NULL,
  `multiple_file_table_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `field` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `order` int(11) NOT NULL DEFAULT '0' COMMENT '排序',
  `path` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '路径',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `multiple_file_table_type_index` (`multiple_file_table_type`),
  KEY `multiple_file_table_id_index` (`multiple_file_table_id`),
  KEY `field_index` (`field`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of dm_multiple_files
-- ----------------------------

-- ----------------------------
-- Table structure for dm_oauth_access_token_providers
-- ----------------------------
DROP TABLE IF EXISTS `dm_oauth_access_token_providers`;
CREATE TABLE `dm_oauth_access_token_providers` (
  `oauth_access_token_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `provider` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`oauth_access_token_id`),
  CONSTRAINT `oauth_access_token_providers_oauth_access_token_id_foreign` FOREIGN KEY (`oauth_access_token_id`) REFERENCES `dm_oauth_access_tokens` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of dm_oauth_access_token_providers
-- ----------------------------

-- ----------------------------
-- Table structure for dm_oauth_access_tokens
-- ----------------------------
DROP TABLE IF EXISTS `dm_oauth_access_tokens`;
CREATE TABLE `dm_oauth_access_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `client_id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `expires_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_access_tokens_user_id_index` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of dm_oauth_access_tokens
-- ----------------------------
INSERT INTO `dm_oauth_access_tokens` VALUES ('001e49ae4811c6a74a5ea5f33a725d4377485b40392bdb1ccc6bdaa9dbfd50927a95e0a11aceff3d', '1', '4', null, '[\"*\"]', '0', '2019-05-11 16:27:04', '2019-05-11 16:27:04', '2019-05-14 16:27:04');
INSERT INTO `dm_oauth_access_tokens` VALUES ('085c8a4d61a379f460509cc2ace4cee488f81ac20f48c026ca602ed98f58c0d1e5b9a4a9c9f19c9d', '6', '4', null, '[\"*\"]', '0', '2019-07-24 21:47:45', '2019-07-24 21:47:45', '2019-07-27 21:47:45');
INSERT INTO `dm_oauth_access_tokens` VALUES ('0b0fdfe3c195fd0c9e06b76298e1aa8ee906f6f36f907f0d9e7ffaf188c6d0aafa8f671c7ddd9d0f', '1', '4', null, '[\"*\"]', '0', '2019-07-11 20:26:38', '2019-07-11 20:26:38', '2019-07-14 20:26:38');
INSERT INTO `dm_oauth_access_tokens` VALUES ('145e3dd966dc356b6aebb51de6a9f41af33aa611e8bc84b560526f29a895692c037cba6ab816cf8d', '1', '4', null, '[\"*\"]', '0', '2019-05-09 21:22:22', '2019-05-09 21:22:22', '2019-05-12 21:22:22');
INSERT INTO `dm_oauth_access_tokens` VALUES ('1c144b2d680c19d31e5faad739d27c562dd164ff5881f071ede38509bf27bb35f5ed18f9c658b014', '1', '4', null, '[\"*\"]', '0', '2019-07-14 21:22:50', '2019-07-14 21:22:50', '2019-07-17 21:22:50');
INSERT INTO `dm_oauth_access_tokens` VALUES ('21d21097b6b922c0acd70387e09308311c9188f75d96a48263a159080e558cd5d9c7d9efb5dabdd8', '1', '4', null, '[\"*\"]', '0', '2019-07-14 15:05:50', '2019-07-14 15:05:50', '2019-07-17 15:05:50');
INSERT INTO `dm_oauth_access_tokens` VALUES ('234f1dca58e3bf3be1e859fe0c655080522494425c1148d3867c1174cfa7a35a4b7b381601738235', '1', '4', null, '[\"*\"]', '0', '2019-07-14 14:54:06', '2019-07-14 14:54:06', '2019-07-17 14:54:06');
INSERT INTO `dm_oauth_access_tokens` VALUES ('2ba887a8d75141a108bedd08d4b811676b4d04ca2d57ccb72ab1a23c950f53c556f118dc06f0239c', '1', '4', null, '[\"*\"]', '0', '2019-05-05 01:03:28', '2019-05-05 01:03:28', '2019-05-08 01:03:28');
INSERT INTO `dm_oauth_access_tokens` VALUES ('2bd557c8253db919f84f7a2030e2c4012f1d5f4763d15fdc2693ba1c01e00ca8f54219d77017d405', '1', '4', null, '[\"*\"]', '0', '2019-07-24 22:33:41', '2019-07-24 22:33:41', '2019-07-27 22:33:41');
INSERT INTO `dm_oauth_access_tokens` VALUES ('3044e85fbf5f6293954099fe7e3365f43e3c97e00c66c364285597808bfc612e544d71ace50587f1', '1', '4', null, '[\"*\"]', '0', '2019-05-05 21:18:30', '2019-05-05 21:18:30', '2019-05-08 21:18:30');
INSERT INTO `dm_oauth_access_tokens` VALUES ('366669f18ba54ed03658d67462f392d66ff3c7700a2a14564dd122370feb193af143ed317d5c67e3', '1', '4', null, '[\"*\"]', '0', '2019-07-14 15:02:48', '2019-07-14 15:02:48', '2019-07-17 15:02:48');
INSERT INTO `dm_oauth_access_tokens` VALUES ('38a1ea6f159db75414a6aaabbad86c210ec1d473b924d015b31fedb75b0866e15150959e15d3037f', '1', '4', null, '[\"*\"]', '0', '2019-05-21 20:02:30', '2019-05-21 20:02:30', '2019-05-24 20:02:30');
INSERT INTO `dm_oauth_access_tokens` VALUES ('38df8df751518356da5698ecf887485c3b88829be06b92a771fe9ee8244d631223e189caf5363c0e', '6', '4', null, '[\"*\"]', '0', '2019-07-14 22:27:58', '2019-07-14 22:27:58', '2019-07-17 22:27:58');
INSERT INTO `dm_oauth_access_tokens` VALUES ('3bca2531d542ccaaae9cfdb2ee9380fce8e07a4e45cab30c18aeb681a45164b0802d83f4ebbd8fdc', '1', '4', null, '[\"*\"]', '0', '2019-07-23 21:18:11', '2019-07-23 21:18:11', '2019-07-26 21:18:11');
INSERT INTO `dm_oauth_access_tokens` VALUES ('3cf5709da4007ee1d8329a18fe0b3c33cea0a16c39909e0a0ba653fb09377962b95d8bf5f49df1d7', '6', '4', null, '[\"*\"]', '0', '2019-07-14 22:29:41', '2019-07-14 22:29:41', '2019-07-17 22:29:41');
INSERT INTO `dm_oauth_access_tokens` VALUES ('40a5f17eb5618938aae33d87cf70dd14df00ec210d55855730cb81b156e347c99200484feefc200e', '1', '4', null, '[\"*\"]', '0', '2019-07-14 15:05:04', '2019-07-14 15:05:04', '2019-07-17 15:05:04');
INSERT INTO `dm_oauth_access_tokens` VALUES ('4cca77c0205f4b4893a7e833c1bcfcd68fa419d0ffa6d7007644687974fa3f4c8ab748212f16522e', '1', '4', null, '[\"*\"]', '0', '2019-07-02 21:13:24', '2019-07-02 21:13:24', '2019-07-05 21:13:24');
INSERT INTO `dm_oauth_access_tokens` VALUES ('5383ad48220b78eabab7d6c0759cef08c14d12c71bab15d232f706ecab02b587cc778b61015e7750', '1', '4', null, '[\"*\"]', '0', '2019-05-25 12:19:12', '2019-05-25 12:19:12', '2019-05-28 12:19:12');
INSERT INTO `dm_oauth_access_tokens` VALUES ('79d98b2a58fb894d45202dd7477b7e93718e582d6e55c26e16e2ddbc33686a4033c4219d180e3365', '6', '4', null, '[\"*\"]', '0', '2019-07-23 23:15:58', '2019-07-23 23:15:58', '2019-07-26 23:15:58');
INSERT INTO `dm_oauth_access_tokens` VALUES ('7a950cb8a30068bd68c6aa50f5b532d924bab1411749e8d0fd7d0eff533ef8f16c3ab4ccd3633e5b', '1', '4', null, '[\"*\"]', '0', '2019-07-11 23:01:16', '2019-07-11 23:01:16', '2019-07-14 23:01:16');
INSERT INTO `dm_oauth_access_tokens` VALUES ('80a5242690ed07a7786780174edd56dead6a3a28c2747711200d842c640eca2a6a396be3eab81b4c', '1', '4', null, '[\"*\"]', '0', '2019-06-24 21:56:24', '2019-06-24 21:56:24', '2019-06-27 21:56:24');
INSERT INTO `dm_oauth_access_tokens` VALUES ('85059259826fe9f85fd691a339056d19f610f37f377e69e09ffc0f9ae1b0c6b640232cac13128429', '1', '4', null, '[\"*\"]', '0', '2019-06-17 23:18:04', '2019-06-17 23:18:04', '2019-06-20 23:18:04');
INSERT INTO `dm_oauth_access_tokens` VALUES ('88513a46577e967a4eaef35039448b0c80462c1e66ec92053edd81ccaebd0bf77cb58e41f716d2b1', '1', '4', null, '[\"*\"]', '0', '2019-05-08 20:17:51', '2019-05-08 20:17:51', '2019-05-11 20:17:51');
INSERT INTO `dm_oauth_access_tokens` VALUES ('8d04a234de1b44ef852eee380764d1ff89f106524f64309b9c43eb41a63a11d4a912ab4bf442e641', '1', '4', null, '[\"*\"]', '0', '2019-05-17 23:45:27', '2019-05-17 23:45:27', '2019-05-20 23:45:27');
INSERT INTO `dm_oauth_access_tokens` VALUES ('963dda6666526c7fefd04d75d878b24b866c102c1b35eb0847669fc2f75d5af35678775f0502262d', '1', '4', null, '[\"*\"]', '0', '2019-05-05 01:00:38', '2019-05-05 01:00:38', '2019-05-08 01:00:38');
INSERT INTO `dm_oauth_access_tokens` VALUES ('9f12f00be6b8bccc6af1673777e79fba2c91a55bd3fd8dba4e122a4fe0024cc4ac977c75b6d3f046', '1', '4', null, '[\"*\"]', '0', '2019-05-27 21:13:21', '2019-05-27 21:13:21', '2019-05-30 21:13:21');
INSERT INTO `dm_oauth_access_tokens` VALUES ('a9084766c673454014455c666b7fdbf953607c05a27ddd0919176d9c0ea6c881547bde6163a56268', '1', '4', null, '[\"*\"]', '0', '2019-05-30 22:11:37', '2019-05-30 22:11:37', '2019-06-02 22:11:37');
INSERT INTO `dm_oauth_access_tokens` VALUES ('af591ce2321a266118877100bc8c88abc701ba119deee4f53e22a4f78613cab331a69d59625b16b2', '1', '4', null, '[\"*\"]', '0', '2019-07-17 20:09:15', '2019-07-17 20:09:15', '2019-07-20 20:09:15');
INSERT INTO `dm_oauth_access_tokens` VALUES ('bc672efc58bf4465dc6df03f1a7bccd64c629966779dde169b765258526dc6e519cb3b7712299855', '1', '4', null, '[\"*\"]', '0', '2019-05-04 00:30:28', '2019-05-04 00:30:28', '2019-05-07 00:30:28');
INSERT INTO `dm_oauth_access_tokens` VALUES ('bfdeca7d73e52e7a72dc5e5546b93d5481c9066cf74b4fa3868c0c8abd054533fb8e686d6f97f8a1', '1', '4', null, '[\"*\"]', '0', '2019-05-07 02:25:11', '2019-05-07 02:25:11', '2019-05-10 02:25:11');
INSERT INTO `dm_oauth_access_tokens` VALUES ('c2f43846ce8002816d63789628f5cb54d3a6f3a8786c528d09985452555c6dc5e2cbfddb57ce4d8b', '6', '4', null, '[\"*\"]', '0', '2019-07-14 22:31:22', '2019-07-14 22:31:22', '2019-07-17 22:31:22');
INSERT INTO `dm_oauth_access_tokens` VALUES ('c30b03743729ee86282e78ff3be5934d45e709f6d7f6770ce0ab2e2b96ba0e455d294e246af62925', '1', '4', null, '[\"*\"]', '0', '2019-07-24 00:01:00', '2019-07-24 00:01:00', '2019-07-27 00:01:00');
INSERT INTO `dm_oauth_access_tokens` VALUES ('c3975fa8563b4406b3646f8cc2bea2e47812945f2b9fe1f610e7cb44f8d2abc44de0e40b6f2ed03d', '1', '4', null, '[\"*\"]', '0', '2019-07-20 20:01:15', '2019-07-20 20:01:15', '2019-07-23 20:01:15');
INSERT INTO `dm_oauth_access_tokens` VALUES ('c62dfe70258c13d9c80a14badb47bc06e68fd4fdbdc72a873f02a57815593f484ed9f9e4d6598fbf', '1', '4', null, '[\"*\"]', '0', '2019-07-14 14:53:51', '2019-07-14 14:53:51', '2019-07-17 14:53:51');
INSERT INTO `dm_oauth_access_tokens` VALUES ('ce253bb098bb108a563d58af6ba2ce595c8615527dd7cea1237b90c622e836f3e308480b838f24d0', '1', '4', null, '[\"*\"]', '0', '2019-05-04 14:30:00', '2019-05-04 14:30:00', '2019-05-07 14:30:00');
INSERT INTO `dm_oauth_access_tokens` VALUES ('d9f84e2be2818c35c61517a3d1e7b904365af588ac7cf5f5913f9ec34ee479c757b10d7f80c2d199', '1', '4', null, '[\"*\"]', '0', '2019-05-04 00:29:57', '2019-05-04 00:29:57', '2019-05-07 00:29:57');
INSERT INTO `dm_oauth_access_tokens` VALUES ('dd341856a1098aef96536e66d0f72da704e23a1a817f4b509f866ec76c083a1b7195159f676738bf', '1', '4', null, '[\"*\"]', '0', '2019-05-06 01:42:58', '2019-05-06 01:42:58', '2019-05-09 01:42:58');
INSERT INTO `dm_oauth_access_tokens` VALUES ('df6b41efd8d133b5623718a09207d15a1df86c66565e3db502d61cc9f5c0845de87fcd2b7ff503cb', '1', '4', null, '[\"*\"]', '0', '2019-05-23 00:11:52', '2019-05-23 00:11:52', '2019-05-26 00:11:52');
INSERT INTO `dm_oauth_access_tokens` VALUES ('e9dc5b48435ea80068b68fd3a0151a9ed9afd0d75ea9dfebc42d059d6a73fdb7b892a1e3f258f9a4', '1', '4', null, '[\"*\"]', '0', '2019-07-14 15:03:10', '2019-07-14 15:03:10', '2019-07-17 15:03:10');
INSERT INTO `dm_oauth_access_tokens` VALUES ('eb1ca301424d471f4f554cea303707fb343a78cd99b2366f4d09fbeba1bfaded06f0f3ef0cb5dbc6', '1', '4', null, '[\"*\"]', '0', '2019-07-15 22:38:55', '2019-07-15 22:38:55', '2019-07-18 22:38:55');
INSERT INTO `dm_oauth_access_tokens` VALUES ('f039ec07616e72656402686df09426602c8de16015e30e11b9795a6878e9753bdf3d276fbebc73a7', '1', '4', null, '[\"*\"]', '0', '2019-07-18 21:49:38', '2019-07-18 21:49:38', '2019-07-21 21:49:38');
INSERT INTO `dm_oauth_access_tokens` VALUES ('f40a2fb6fd88b67de689f55caa51fc5e72c2cd91e67889de97711bf3cd79adf201cf0b1c3816da12', '1', '4', null, '[\"*\"]', '0', '2019-07-14 14:56:09', '2019-07-14 14:56:09', '2019-07-17 14:56:09');
INSERT INTO `dm_oauth_access_tokens` VALUES ('f5168c1221615979c9065e8f19983339b790dc7e0ea954fbe81145c7c055403c10fb49f880409593', '1', '4', null, '[\"*\"]', '0', '2019-05-26 19:16:40', '2019-05-26 19:16:40', '2019-05-29 19:16:40');
INSERT INTO `dm_oauth_access_tokens` VALUES ('fc7f8c528aa7ecb093d783dc8bba0115d0c92a1654a73695c52cba0d76b5e9b9dd6174d219a6da8e', '1', '4', null, '[\"*\"]', '0', '2019-05-12 16:40:45', '2019-05-12 16:40:45', '2019-05-15 16:40:45');
INSERT INTO `dm_oauth_access_tokens` VALUES ('fff225f19384a3b78d69519786ed3dcd6cc23515211283f31b62e966326536c5e36e964c5dba7dfe', '6', '4', null, '[\"*\"]', '0', '2019-07-14 22:28:14', '2019-07-14 22:28:14', '2019-07-17 22:28:14');

-- ----------------------------
-- Table structure for dm_oauth_auth_codes
-- ----------------------------
DROP TABLE IF EXISTS `dm_oauth_auth_codes`;
CREATE TABLE `dm_oauth_auth_codes` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` int(11) NOT NULL,
  `client_id` int(11) NOT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of dm_oauth_auth_codes
-- ----------------------------

-- ----------------------------
-- Table structure for dm_oauth_clients
-- ----------------------------
DROP TABLE IF EXISTS `dm_oauth_clients`;
CREATE TABLE `dm_oauth_clients` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `secret` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `redirect` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `personal_access_client` tinyint(1) NOT NULL,
  `password_client` tinyint(1) NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_clients_user_id_index` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of dm_oauth_clients
-- ----------------------------
INSERT INTO `dm_oauth_clients` VALUES ('3', null, 'dm Personal Access Client', 'ThRFgFD0zW2ZCg6167yJTGQx3lCxobmeL5FbtcuL', 'http://localhost', '1', '0', '0', '2019-05-04 00:26:20', '2019-05-04 00:26:20');
INSERT INTO `dm_oauth_clients` VALUES ('4', null, 'dm Password Grant Client', 'mBPTRuD5TJDb4B4Yvmyl4kkJdPXv2YZdDMqazuRH', 'http://localhost', '0', '1', '0', '2019-05-04 00:26:20', '2019-05-04 00:26:20');

-- ----------------------------
-- Table structure for dm_oauth_personal_access_clients
-- ----------------------------
DROP TABLE IF EXISTS `dm_oauth_personal_access_clients`;
CREATE TABLE `dm_oauth_personal_access_clients` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `client_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_personal_access_clients_client_id_index` (`client_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of dm_oauth_personal_access_clients
-- ----------------------------
INSERT INTO `dm_oauth_personal_access_clients` VALUES ('1', '1', '2019-05-04 00:25:20', '2019-05-04 00:25:20');
INSERT INTO `dm_oauth_personal_access_clients` VALUES ('2', '3', '2019-05-04 00:26:20', '2019-05-04 00:26:20');

-- ----------------------------
-- Table structure for dm_oauth_refresh_tokens
-- ----------------------------
DROP TABLE IF EXISTS `dm_oauth_refresh_tokens`;
CREATE TABLE `dm_oauth_refresh_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `access_token_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_refresh_tokens_access_token_id_index` (`access_token_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of dm_oauth_refresh_tokens
-- ----------------------------
INSERT INTO `dm_oauth_refresh_tokens` VALUES ('024f3daf8b35b613c563a68d876e6dfd55d3f9c118185d6910d6b3ea628af8b5b05cfb17e95e2bd6', '48ccaf142efc9a823d8c7770cc4f09ba98256ee07365d2c2e8e749869cb8c65771321a769418bdd8', '0', '2019-07-27 21:55:51');
INSERT INTO `dm_oauth_refresh_tokens` VALUES ('068c937b23d778026cc324e7955d0093c765dcdbe7d24eedd98119923a0ddfaf0bb7a2a52d315250', '3044e85fbf5f6293954099fe7e3365f43e3c97e00c66c364285597808bfc612e544d71ace50587f1', '0', '2019-05-08 21:18:30');
INSERT INTO `dm_oauth_refresh_tokens` VALUES ('0d6cfa95d735d5a27a112afab2eff646b90e7ca6d2116be19986d6366f675926e0d29f8606388576', '234f1dca58e3bf3be1e859fe0c655080522494425c1148d3867c1174cfa7a35a4b7b381601738235', '0', '2019-07-17 14:54:06');
INSERT INTO `dm_oauth_refresh_tokens` VALUES ('1ae224fadf1bf7fc0d345dbce02d6a50707c7a5f00a16392e6b46b50ce1b16d13a3741c6fbe9fb93', '9f12f00be6b8bccc6af1673777e79fba2c91a55bd3fd8dba4e122a4fe0024cc4ac977c75b6d3f046', '0', '2019-05-30 21:13:21');
INSERT INTO `dm_oauth_refresh_tokens` VALUES ('1bccd2f408a3a00ba5f652bc03fa654b2e14290f2c71421044b53d51dde4355cf1cbe6c46299de23', '4cca77c0205f4b4893a7e833c1bcfcd68fa419d0ffa6d7007644687974fa3f4c8ab748212f16522e', '0', '2019-07-05 21:13:24');
INSERT INTO `dm_oauth_refresh_tokens` VALUES ('1e246d5f5b5334be5445f18e738bf41e2b6fd5c37312d016f45a32a0c439c127b4bab651cd7eb14c', 'fff225f19384a3b78d69519786ed3dcd6cc23515211283f31b62e966326536c5e36e964c5dba7dfe', '0', '2019-07-17 22:28:14');
INSERT INTO `dm_oauth_refresh_tokens` VALUES ('27455a640ca83c48de02dc4ac309aa024cecb43cd1f50a9dcd316c9ef7230eea6a9e8a14fafd9cae', '366669f18ba54ed03658d67462f392d66ff3c7700a2a14564dd122370feb193af143ed317d5c67e3', '0', '2019-07-17 15:02:48');
INSERT INTO `dm_oauth_refresh_tokens` VALUES ('3241cdb546379a4d12c7e6b4a693664089b0654a8deb934c6f0e49e47ac5391010aa0219f6a3c114', '79d98b2a58fb894d45202dd7477b7e93718e582d6e55c26e16e2ddbc33686a4033c4219d180e3365', '0', '2019-07-26 23:15:58');
INSERT INTO `dm_oauth_refresh_tokens` VALUES ('374b94dfabea7f9507c462a739f8fedec5e03227b7f6793b086172da20beb4b12cf85433ebbc3589', '3bca2531d542ccaaae9cfdb2ee9380fce8e07a4e45cab30c18aeb681a45164b0802d83f4ebbd8fdc', '0', '2019-07-26 21:18:11');
INSERT INTO `dm_oauth_refresh_tokens` VALUES ('3836e70b03dcb7c2474250ed3c45df30318a1dcc64298080938cdb01c5aa301397350aa7b60c355e', 'fc7f8c528aa7ecb093d783dc8bba0115d0c92a1654a73695c52cba0d76b5e9b9dd6174d219a6da8e', '0', '2019-05-15 16:40:45');
INSERT INTO `dm_oauth_refresh_tokens` VALUES ('3a0f0c2e7da5784afe502f50cdc3dfbd73dbb5473754dffba8f9fe30aa0026f8e1862f3122818ed9', '145e3dd966dc356b6aebb51de6a9f41af33aa611e8bc84b560526f29a895692c037cba6ab816cf8d', '0', '2019-05-12 21:22:22');
INSERT INTO `dm_oauth_refresh_tokens` VALUES ('48a2d5b1306c687769d0e68a508fa3bf6f22b2ad261d9233356d9400f00519d938870db97f835f0b', '80a5242690ed07a7786780174edd56dead6a3a28c2747711200d842c640eca2a6a396be3eab81b4c', '0', '2019-06-27 21:56:24');
INSERT INTO `dm_oauth_refresh_tokens` VALUES ('4c85545571de37b1051656e157740a8ea4c6cb1865035fc9920defe1da50156e6a7b5799405bf2be', 'f039ec07616e72656402686df09426602c8de16015e30e11b9795a6878e9753bdf3d276fbebc73a7', '0', '2019-07-21 21:49:38');
INSERT INTO `dm_oauth_refresh_tokens` VALUES ('68be8e359f42da386b80bf38e5ca42d30a9df5e6ff86f2f9a28b023bd93f7d12b17016e9259400e9', '40a5f17eb5618938aae33d87cf70dd14df00ec210d55855730cb81b156e347c99200484feefc200e', '0', '2019-07-17 15:05:04');
INSERT INTO `dm_oauth_refresh_tokens` VALUES ('6929ed6d0ccba50eaf97aee578c7123519fbc4b56581e1ac3ec69a6c495512e2cf88da22dc72d023', 'ce253bb098bb108a563d58af6ba2ce595c8615527dd7cea1237b90c622e836f3e308480b838f24d0', '0', '2019-05-07 14:30:00');
INSERT INTO `dm_oauth_refresh_tokens` VALUES ('69dba6e682b0c45e8d98617ca3c40856700f535bc191afb2368508d7cdb5a0eb5bbd447b0e66f3ed', 'bc672efc58bf4465dc6df03f1a7bccd64c629966779dde169b765258526dc6e519cb3b7712299855', '0', '2019-05-07 00:30:28');
INSERT INTO `dm_oauth_refresh_tokens` VALUES ('6d87acb532e66a52294ba2d5113f5b123b902fbd2b1fe5f9acab48d091aacae55fc6bc64eff894ca', 'c2f43846ce8002816d63789628f5cb54d3a6f3a8786c528d09985452555c6dc5e2cbfddb57ce4d8b', '0', '2019-07-17 22:31:22');
INSERT INTO `dm_oauth_refresh_tokens` VALUES ('720699f40840704eb2ff423aeeb6fdf10c56a50fcc2e18b57b922f12e8716b34d422046808e7c674', 'e9dc5b48435ea80068b68fd3a0151a9ed9afd0d75ea9dfebc42d059d6a73fdb7b892a1e3f258f9a4', '0', '2019-07-17 15:03:10');
INSERT INTO `dm_oauth_refresh_tokens` VALUES ('737449a0107d3061da4d253c375c9f3b6bf646f883512985992f8efee74acfc650da183a73d9f30c', 'bfdeca7d73e52e7a72dc5e5546b93d5481c9066cf74b4fa3868c0c8abd054533fb8e686d6f97f8a1', '0', '2019-05-10 02:25:11');
INSERT INTO `dm_oauth_refresh_tokens` VALUES ('7ecd78bb375fbc5b4befaefb7e662aed63cf7530b17317c6930ca4c9aac4b65018a06d089a553d8c', '001e49ae4811c6a74a5ea5f33a725d4377485b40392bdb1ccc6bdaa9dbfd50927a95e0a11aceff3d', '0', '2019-05-14 16:27:04');
INSERT INTO `dm_oauth_refresh_tokens` VALUES ('855091171233f8f983beab58762035387f2545d473f308c1ef4bce9ba17b11ffa03fb41dfa5fe3c9', 'dd341856a1098aef96536e66d0f72da704e23a1a817f4b509f866ec76c083a1b7195159f676738bf', '0', '2019-05-09 01:42:58');
INSERT INTO `dm_oauth_refresh_tokens` VALUES ('87a964c949e7524b0bf2fad1df74c7c06a7079714b035ae8618415ace7dac1701f8d65a91ce1fd45', '085c8a4d61a379f460509cc2ace4cee488f81ac20f48c026ca602ed98f58c0d1e5b9a4a9c9f19c9d', '0', '2019-07-27 21:47:45');
INSERT INTO `dm_oauth_refresh_tokens` VALUES ('899e81583d5024735c0297b1e4d42ca271d4c2c6a757bda3e3b2ea2c4249a17572e262a13cdc9627', 'd9f84e2be2818c35c61517a3d1e7b904365af588ac7cf5f5913f9ec34ee479c757b10d7f80c2d199', '0', '2019-05-07 00:29:57');
INSERT INTO `dm_oauth_refresh_tokens` VALUES ('8f831e55629c9f39234a91b1403f3d3f034faeb7afc5554212f47bfdd41bec3fae800a84011ed712', 'c3975fa8563b4406b3646f8cc2bea2e47812945f2b9fe1f610e7cb44f8d2abc44de0e40b6f2ed03d', '0', '2019-07-23 20:01:15');
INSERT INTO `dm_oauth_refresh_tokens` VALUES ('93315660279c44609f59acd5526c903c8092168da92033ac23d34bded345d67740e90fbc0e3fa84a', 'af591ce2321a266118877100bc8c88abc701ba119deee4f53e22a4f78613cab331a69d59625b16b2', '0', '2019-07-20 20:09:15');
INSERT INTO `dm_oauth_refresh_tokens` VALUES ('9820f290a58374d0ade08f04ed371089cb7f161af52acafb97ff8e6d1c1bcd6815ecfdc55fa61dd0', 'a9084766c673454014455c666b7fdbf953607c05a27ddd0919176d9c0ea6c881547bde6163a56268', '0', '2019-06-02 22:11:37');
INSERT INTO `dm_oauth_refresh_tokens` VALUES ('996bfcbe966d3875e9440b0d9a1102a136ada02bb00c053e16bdcb3635210a126c3c3c74f73deadd', '1c144b2d680c19d31e5faad739d27c562dd164ff5881f071ede38509bf27bb35f5ed18f9c658b014', '0', '2019-07-17 21:22:50');
INSERT INTO `dm_oauth_refresh_tokens` VALUES ('9a01911d9cdae9651eeeb3225dde7b74785011053f4b75c069108de9a5c6065080d87a8ccad5f500', '21d21097b6b922c0acd70387e09308311c9188f75d96a48263a159080e558cd5d9c7d9efb5dabdd8', '0', '2019-07-17 15:05:50');
INSERT INTO `dm_oauth_refresh_tokens` VALUES ('a018fe0806029033cf65b147b5d6efba7984418f526d7db5cc8faa150d2f551a2b5e6931f9b38612', '38df8df751518356da5698ecf887485c3b88829be06b92a771fe9ee8244d631223e189caf5363c0e', '0', '2019-07-17 22:27:58');
INSERT INTO `dm_oauth_refresh_tokens` VALUES ('a53526b079a1c9002157ee1382702b0d16a10e3da94b17890d2845d21cd3d97d581d24e8f00dcbd2', 'f40a2fb6fd88b67de689f55caa51fc5e72c2cd91e67889de97711bf3cd79adf201cf0b1c3816da12', '0', '2019-07-17 14:56:09');
INSERT INTO `dm_oauth_refresh_tokens` VALUES ('ad0c7a15020a3364ab810b03eb1cbb0fa1daba0af9bef0a17f6a7c9695da90d2ebac07b920b0e984', '7a950cb8a30068bd68c6aa50f5b532d924bab1411749e8d0fd7d0eff533ef8f16c3ab4ccd3633e5b', '0', '2019-07-14 23:01:16');
INSERT INTO `dm_oauth_refresh_tokens` VALUES ('afc2c1056c7577f1a6e06ff91946a69d31014638361473aada14024caeb88513aded04712c38b8c7', '963dda6666526c7fefd04d75d878b24b866c102c1b35eb0847669fc2f75d5af35678775f0502262d', '0', '2019-05-08 01:00:38');
INSERT INTO `dm_oauth_refresh_tokens` VALUES ('b8a1b4ba57a4f609453d26a2ea14ddf009ebb39fdec548a44c7149603149ee05d66470690ca36231', '8d04a234de1b44ef852eee380764d1ff89f106524f64309b9c43eb41a63a11d4a912ab4bf442e641', '0', '2019-05-20 23:45:27');
INSERT INTO `dm_oauth_refresh_tokens` VALUES ('c430c43e4300876f17715953c203b84afe4d4580ef7ea6083a0d6775cbd8b6b79ebada95400df1eb', '0b0fdfe3c195fd0c9e06b76298e1aa8ee906f6f36f907f0d9e7ffaf188c6d0aafa8f671c7ddd9d0f', '0', '2019-07-14 20:26:38');
INSERT INTO `dm_oauth_refresh_tokens` VALUES ('c7cfed0651073532a2fe6abd04eadc6e8800f8666a8afd9c6a2674f91a7d2cbc65ca8c95a2c46d4b', '2bd557c8253db919f84f7a2030e2c4012f1d5f4763d15fdc2693ba1c01e00ca8f54219d77017d405', '0', '2019-07-27 22:33:41');
INSERT INTO `dm_oauth_refresh_tokens` VALUES ('d1489ab6162896afeef6e2a85e3a9518122a0745098338436cef0dc0b108c68e454352c65e0bfffd', '5383ad48220b78eabab7d6c0759cef08c14d12c71bab15d232f706ecab02b587cc778b61015e7750', '0', '2019-05-28 12:19:12');
INSERT INTO `dm_oauth_refresh_tokens` VALUES ('d15c7477a3c61ccff8af5bd7f85a09d1fe793eddfbeaad24d4aac8064d3f88a474bead6e254ed5ed', '3cf5709da4007ee1d8329a18fe0b3c33cea0a16c39909e0a0ba653fb09377962b95d8bf5f49df1d7', '0', '2019-07-17 22:29:41');
INSERT INTO `dm_oauth_refresh_tokens` VALUES ('d93a3071235ed2ae906418e208a373cde5e29b346f2a90b482f7203588637c33eef7c30c31d9167e', '85059259826fe9f85fd691a339056d19f610f37f377e69e09ffc0f9ae1b0c6b640232cac13128429', '0', '2019-06-20 23:18:04');
INSERT INTO `dm_oauth_refresh_tokens` VALUES ('dc580742caf04417431e8fa22f4c28654bd0cf50775f8c5e863e6a67aef498e7f04f9adbdf3af244', '2ba887a8d75141a108bedd08d4b811676b4d04ca2d57ccb72ab1a23c950f53c556f118dc06f0239c', '0', '2019-05-08 01:03:28');
INSERT INTO `dm_oauth_refresh_tokens` VALUES ('dd8916409b470ccfe8e4b9b0c94b023740affed7af0997b9fcd352e47989f1cd99501a2af1adb4f2', '8e186e24910f1f76a69fac5c46a9dd1b6200fd3d333929456d1b4d22749a964cdc4264e7fa3dffa3', '0', '2019-07-27 22:30:31');
INSERT INTO `dm_oauth_refresh_tokens` VALUES ('df28c852285dca32c2800d23ab83ed36e2fbe479d317e9606dd21fa5ae4001a926429946cc395276', 'c30b03743729ee86282e78ff3be5934d45e709f6d7f6770ce0ab2e2b96ba0e455d294e246af62925', '0', '2019-07-27 00:01:00');
INSERT INTO `dm_oauth_refresh_tokens` VALUES ('e314d53f9d83ea2bd462d10f10210b4ed71fe3d15b1e8ea00ad4d8a341e8351d34402f2ddbf44db2', '0a80b080ad8d27a01eee72335b7c8c3a48b786e2901b15d6507afddd347df4ce325edf392e04fc3d', '0', '2019-07-26 23:59:41');
INSERT INTO `dm_oauth_refresh_tokens` VALUES ('e945a875e61c2626676a9f5a2a6e240488f665dc3b32c23b926acb9762e328e7a4fecab3068bfedf', 'eb1ca301424d471f4f554cea303707fb343a78cd99b2366f4d09fbeba1bfaded06f0f3ef0cb5dbc6', '0', '2019-07-18 22:38:55');
INSERT INTO `dm_oauth_refresh_tokens` VALUES ('eddb3e3cbf6f8468abee392e5a80a2b17cb929c2da9e740eb19a399396408e25096c36e1c9542e46', 'c62dfe70258c13d9c80a14badb47bc06e68fd4fdbdc72a873f02a57815593f484ed9f9e4d6598fbf', '0', '2019-07-17 14:53:51');
INSERT INTO `dm_oauth_refresh_tokens` VALUES ('f36a5287f855deaa03517c827e9568d3d9dc3866a14b85cbbaa321df5268fc2e9a32dff7247a4713', 'df6b41efd8d133b5623718a09207d15a1df86c66565e3db502d61cc9f5c0845de87fcd2b7ff503cb', '0', '2019-05-26 00:11:52');
INSERT INTO `dm_oauth_refresh_tokens` VALUES ('f71554ae2b1cd915df8911655e87d367cf8fa73267796a3bb364a0fdefdae3bdc8c9641834e47728', '88513a46577e967a4eaef35039448b0c80462c1e66ec92053edd81ccaebd0bf77cb58e41f716d2b1', '0', '2019-05-11 20:17:51');
INSERT INTO `dm_oauth_refresh_tokens` VALUES ('fbc0b3c64b0a77c5c6945485f1c9e0d26f83c41eec7e7d1fca67e4533c6b1e62da5189d254bd0002', 'f5168c1221615979c9065e8f19983339b790dc7e0ea954fbe81145c7c055403c10fb49f880409593', '0', '2019-05-29 19:16:40');
INSERT INTO `dm_oauth_refresh_tokens` VALUES ('fdb00b4c0b7c4f32765952903c281ab274a79affb4931d4526afbd42aa2a9d8d04ad9a11ca7206f5', '38a1ea6f159db75414a6aaabbad86c210ec1d473b924d015b31fedb75b0866e15150959e15d3037f', '0', '2019-05-24 20:02:30');

-- ----------------------------
-- Table structure for dm_password_resets
-- ----------------------------
DROP TABLE IF EXISTS `dm_password_resets`;
CREATE TABLE `dm_password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of dm_password_resets
-- ----------------------------

-- ----------------------------
-- Table structure for dm_pay_notify_raws
-- ----------------------------
DROP TABLE IF EXISTS `dm_pay_notify_raws`;
CREATE TABLE `dm_pay_notify_raws` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `model_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'undefined' COMMENT '订单类型:一般写表名称:users',
  `raw` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of dm_pay_notify_raws
-- ----------------------------

-- ----------------------------
-- Table structure for dm_permissions
-- ----------------------------
DROP TABLE IF EXISTS `dm_permissions`;
CREATE TABLE `dm_permissions` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `guard_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '说明',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of dm_permissions
-- ----------------------------
INSERT INTO `dm_permissions` VALUES ('1', 'manage_contents', 'web', '2019-05-03 17:30:59', '2019-05-03 17:30:59', '');
INSERT INTO `dm_permissions` VALUES ('2', 'manage_users', 'web', '2019-05-03 17:30:59', '2019-05-03 17:30:59', '');
INSERT INTO `dm_permissions` VALUES ('3', 'edit_settings', 'web', '2019-05-03 17:30:59', '2019-05-03 17:30:59', '');

-- ----------------------------
-- Table structure for dm_provinces
-- ----------------------------
DROP TABLE IF EXISTS `dm_provinces`;
CREATE TABLE `dm_provinces` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `provinceid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `province` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  KEY `provinces_provinceid_index` (`provinceid`),
  KEY `provinces_province_index` (`province`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of dm_provinces
-- ----------------------------

-- ----------------------------
-- Table structure for dm_role_has_permissions
-- ----------------------------
DROP TABLE IF EXISTS `dm_role_has_permissions`;
CREATE TABLE `dm_role_has_permissions` (
  `permission_id` int(10) unsigned NOT NULL,
  `role_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`permission_id`,`role_id`),
  KEY `role_has_permissions_role_id_foreign` (`role_id`),
  CONSTRAINT `role_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `dm_permissions` (`id`) ON DELETE CASCADE,
  CONSTRAINT `role_has_permissions_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `dm_roles` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of dm_role_has_permissions
-- ----------------------------
INSERT INTO `dm_role_has_permissions` VALUES ('1', '1');
INSERT INTO `dm_role_has_permissions` VALUES ('2', '1');
INSERT INTO `dm_role_has_permissions` VALUES ('3', '1');
INSERT INTO `dm_role_has_permissions` VALUES ('1', '2');

-- ----------------------------
-- Table structure for dm_roles
-- ----------------------------
DROP TABLE IF EXISTS `dm_roles`;
CREATE TABLE `dm_roles` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `guard_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '说明',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of dm_roles
-- ----------------------------
INSERT INTO `dm_roles` VALUES ('1', 'Founder', 'web', '2019-05-03 17:30:59', '2019-05-03 17:30:59', '');
INSERT INTO `dm_roles` VALUES ('2', 'Maintainer', 'web', '2019-05-03 17:30:59', '2019-05-03 17:30:59', '');

-- ----------------------------
-- Table structure for dm_sections
-- ----------------------------
DROP TABLE IF EXISTS `dm_sections`;
CREATE TABLE `dm_sections` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `article_id` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '所属文章id',
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '文章标题',
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT 'slug',
  `keywords` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '关键词,以英文逗号隔开',
  `descriptions` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '描述',
  `cover_image` int(11) NOT NULL DEFAULT '0' COMMENT '封面图片',
  `content` text COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '内容',
  `user_id` int(11) NOT NULL DEFAULT '0' COMMENT '作者 id',
  `view_count` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '查看数量',
  `vote_count` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '点赞数量',
  `comment_count` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '评论数量',
  `collection_count` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '收藏数量',
  `weight` smallint(6) NOT NULL DEFAULT '0' COMMENT '排序',
  `access_type` tinyint(4) unsigned NOT NULL DEFAULT '1' COMMENT '访问权限类型：0公开、1vIP，2收费',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `articles_user_id_index` (`user_id`),
  KEY `article_id_weight` (`article_id`,`weight`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='文章章节';

-- ----------------------------
-- Records of dm_sections
-- ----------------------------
INSERT INTO `dm_sections` VALUES ('2', '1', 'sdgfhdfgfhvnm', 'sdgfh', 'dfkjdsfdgf', 'sadfghjm', '9', '{\"raw\":\"dsfghdfghj,n,\",\"html\":\"<p>dsfghdfghj,n,<\\/p>\"}', '1', '0', '0', '0', '0', '1', '0', '2019-05-12 01:07:45', '2019-05-12 01:21:12');
INSERT INTO `dm_sections` VALUES ('3', '11', 'sdsfghjk', 'sdsfghjk', 'fds', 'dfsa', '11', '{\"raw\":\"szdfxghjzzxn\\u662f\\u5927\\u5bb6\\u89c2\\u770b\\u5ba2\\u6237\",\"html\":\"<p>szdfxghjzzxn\\u662f\\u5927\\u5bb6\\u89c2\\u770b\\u5ba2\\u6237<\\/p>\"}', '1', '0', '0', '0', '0', '1', '1', '2019-07-23 21:20:20', '2019-07-23 21:20:20');

-- ----------------------------
-- Table structure for dm_sms
-- ----------------------------
DROP TABLE IF EXISTS `dm_sms`;
CREATE TABLE `dm_sms` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'O',
  `code` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ip` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `sms_phone_index` (`phone`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of dm_sms
-- ----------------------------

-- ----------------------------
-- Table structure for dm_system_configs
-- ----------------------------
DROP TABLE IF EXISTS `dm_system_configs`;
CREATE TABLE `dm_system_configs` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `flag` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '配置英文标识',
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '配置标题',
  `system_config_group` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'basic' COMMENT '配置分组',
  `value` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '配置值',
  `description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '配置描述',
  `weight` int(11) NOT NULL DEFAULT '10',
  `enable` enum('T','F') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'T',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `system_configs_system_config_group_index` (`system_config_group`),
  KEY `system_configs_enable_index` (`enable`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of dm_system_configs
-- ----------------------------
INSERT INTO `dm_system_configs` VALUES ('1', 'test', '测试配置项', 'test_group', '20000', '测试配置项', '10', 'T', '2019-05-03 17:31:24', '2019-05-03 17:31:24');

-- ----------------------------
-- Table structure for dm_system_versions
-- ----------------------------
DROP TABLE IF EXISTS `dm_system_versions`;
CREATE TABLE `dm_system_versions` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `version` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '1.0.0',
  `content` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `download_url` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of dm_system_versions
-- ----------------------------

-- ----------------------------
-- Table structure for dm_tags
-- ----------------------------
DROP TABLE IF EXISTS `dm_tags`;
CREATE TABLE `dm_tags` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '名称',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of dm_tags
-- ----------------------------
INSERT INTO `dm_tags` VALUES ('1', '新作上线', '2019-05-07 00:27:14', '2019-05-30 22:20:35');
INSERT INTO `dm_tags` VALUES ('2', '今日我更新', '2019-05-07 22:34:41', '2019-05-30 22:20:19');
INSERT INTO `dm_tags` VALUES ('3', '无良推荐', '2019-05-30 22:12:14', '2019-05-30 22:12:14');
INSERT INTO `dm_tags` VALUES ('4', '每日一推', '2019-05-30 22:12:51', '2019-05-30 22:12:51');
INSERT INTO `dm_tags` VALUES ('5', '日漫经典', '2019-05-30 22:21:12', '2019-05-30 22:21:12');

-- ----------------------------
-- Table structure for dm_users
-- ----------------------------
DROP TABLE IF EXISTS `dm_users`;
CREATE TABLE `dm_users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `enable` enum('T','F') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'F' COMMENT '启用状态：F禁用，T启用',
  `is_admin` enum('T','F') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'F' COMMENT '是否可登录后台：F否，是',
  `description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '一句话描述',
  `head_image` int(11) NOT NULL DEFAULT '0' COMMENT '头像',
  `remember_token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `last_login_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '手机号',
  `weixin_openid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `mini_openid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '小程序 openid',
  `weixin_unionid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `weixin_session_key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `weixin_head_image_path` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '微信头像路径',
  `country` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `province` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `city` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  KEY `users_head_image_index` (`head_image`),
  KEY `users_phone_index` (`phone`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of dm_users
-- ----------------------------
INSERT INTO `dm_users` VALUES ('1', 'ucer', 'dev@lucms.com', '$2y$10$iXmW3VGtKL0Ng1Q2FXmj3e8y7T/ajLkX1Er.60jyAwPDaOzADW3Q2', 'T', 'T', 'Sint fugit est hic corporis vero voluptates.', '0', 'pMT7B67PSg', '2019-07-24 22:33:40', '2019-05-03 17:31:24', '2019-07-24 22:33:40', '13922330073', '', '', '', '', '', '', '', '');
INSERT INTO `dm_users` VALUES ('2', 'Regan Howe', 'eulah.lind@example.org', '$2y$10$iXmW3VGtKL0Ng1Q2FXmj3e8y7T/ajLkX1Er.60jyAwPDaOzADW3Q2', 'F', 'F', 'Ex ut aliquid a quaerat tempore delectus sed.', '0', 'WMuMW5vYDl', null, '2019-05-03 17:31:24', '2019-05-03 17:31:24', '', '', '', '', '', '', '', '', '');
INSERT INTO `dm_users` VALUES ('3', 'Nelson Wilkinson', 'nhessel@example.com', '$2y$10$iXmW3VGtKL0Ng1Q2FXmj3e8y7T/ajLkX1Er.60jyAwPDaOzADW3Q2', 'F', 'F', 'Voluptatibus est aspernatur sed dolorem ea est.', '0', 'K79ctnjgr3', null, '2019-05-03 17:31:24', '2019-05-03 17:31:24', '', '', '', '', '', '', '', '', '');
INSERT INTO `dm_users` VALUES ('4', 'Marques Koss', 'okeefe.loy@example.org', '$2y$10$iXmW3VGtKL0Ng1Q2FXmj3e8y7T/ajLkX1Er.60jyAwPDaOzADW3Q2', 'F', 'F', 'Et impedit nulla consequuntur est ipsum tenetur.', '0', 'qFSAYTr9TZ', null, '2019-05-03 17:31:24', '2019-05-03 17:31:24', '', '', '', '', '', '', '', '', '');
INSERT INTO `dm_users` VALUES ('5', 'Rowland Legros', 'chelsey.fisher@example.org', '$2y$10$iXmW3VGtKL0Ng1Q2FXmj3e8y7T/ajLkX1Er.60jyAwPDaOzADW3Q2', 'F', 'F', 'Est aliquam beatae minima quas ea quas.', '0', 'sxFMSl1rNr', null, '2019-05-03 17:31:24', '2019-05-03 17:31:24', '', '', '', '', '', '', '', '', '');
INSERT INTO `dm_users` VALUES ('6', '13922330072', '', '$2y$10$GCRDW3JgBsvR8/vLaiz4LuCi9.9SfULDH7NEUdrHZW3mzROIMgl/C', 'T', 'F', '', '0', '', '2019-07-24 21:55:50', '2019-07-14 21:05:35', '2019-07-24 21:55:50', '13922330072', '', '', '', '', '', '', '', '');

-- ----------------------------
-- Table structure for dm_vips
-- ----------------------------
DROP TABLE IF EXISTS `dm_vips`;
CREATE TABLE `dm_vips` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned NOT NULL COMMENT '用户id',
  `level` tinyint(4) NOT NULL DEFAULT '1' COMMENT 'vip等级',
  `started_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `expired_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '过期时间',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idx_user` (`user_id`),
  KEY `expired` (`started_at`,`expired_at`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of dm_vips
-- ----------------------------
INSERT INTO `dm_vips` VALUES ('13', '4', '7', '2019-05-22 00:00:00', '2019-06-30 00:00:00', '2019-05-21 23:33:24', '2019-05-22 00:06:30', null);
INSERT INTO `dm_vips` VALUES ('14', '2', '7', '2019-05-22 00:00:00', '2019-06-30 00:00:00', '2019-05-21 23:41:38', '2019-05-22 00:06:22', null);
INSERT INTO `dm_vips` VALUES ('15', '3', '7', '2019-05-21 00:00:00', '2019-06-30 00:00:00', '2019-05-21 23:49:40', '2019-05-21 23:49:40', null);
INSERT INTO `dm_vips` VALUES ('16', '1', '7', '2019-05-21 00:00:00', '2019-06-30 00:00:00', '2019-05-21 23:50:47', '2019-05-22 00:08:48', null);
INSERT INTO `dm_vips` VALUES ('18', '5', '7', '2019-05-22 00:00:00', '2019-05-30 00:00:00', '2019-05-22 00:07:21', '2019-05-22 00:09:07', null);
INSERT INTO `dm_vips` VALUES ('19', '6', '7', '2019-07-23 00:00:00', '2019-08-31 00:00:00', '2019-07-24 22:30:53', '2019-07-24 22:31:53', null);

-- ----------------------------
-- Table structure for dm_weixinpay_notifies
-- ----------------------------
DROP TABLE IF EXISTS `dm_weixinpay_notifies`;
CREATE TABLE `dm_weixinpay_notifies` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `appid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '微信开放平台审核通过的应用APPID',
  `mch_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '微信支付分配的商户号',
  `device_info` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '微信支付分配的终端设备号，',
  `result_code` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT 'SUCCESS/FAIL',
  `err_code` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '错误返回的信息描述',
  `err_code_des` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '错误返回的信息描述',
  `openid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '用户在商户appid下的唯一标识',
  `trade_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT 'APP',
  `bank_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '银行类型，采用字符串类型的银行标识',
  `total_fee` int(11) NOT NULL DEFAULT '0' COMMENT '订单总金额，单位为分',
  `transaction_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '微信支付订单号',
  `out_trade_no` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '商户系统内部订单号',
  `attach` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '商家数据包，原样返回',
  `time_end` timestamp NULL DEFAULT NULL COMMENT '支付完成时间',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of dm_weixinpay_notifies
-- ----------------------------
