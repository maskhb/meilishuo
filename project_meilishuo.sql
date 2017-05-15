/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : project_meilishuo

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-05-15 11:30:49
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `goodlist`
-- ----------------------------
DROP TABLE IF EXISTS `goodlist`;
CREATE TABLE `goodlist` (
  `index` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `src` varchar(255) NOT NULL,
  `egname` varchar(255) DEFAULT NULL,
  `price` varchar(255) NOT NULL,
  `jianjie` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`index`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goodlist
-- ----------------------------
INSERT INTO `goodlist` VALUES ('1', '2017春夏新款 亲肤舒适百搭纯色V领T恤 短袖休闲上衣', '../img/goods/01.jpg', null, '40', '2017春夏新款 亲肤舒适百搭纯色V领T恤 短袖休闲上衣s84');
INSERT INTO `goodlist` VALUES ('2', '2017新款高腰显瘦牛仔背带裙牛仔吊带裙连衣裙\r\n2017新款高腰显瘦牛仔背带裙牛仔吊带裙连衣裙\r\n春季显瘦紧身弹力牛仔裤女长裤韩版铅笔裤白色高腰九分小脚裤子潮\r\n春季显瘦紧身弹力牛仔裤女长裤韩版铅笔裤白色高腰九分小脚裤子潮\r\n', '../img/goods/02.jpg', null, '61.25', null);

-- ----------------------------
-- Table structure for `userdata`
-- ----------------------------
DROP TABLE IF EXISTS `userdata`;
CREATE TABLE `userdata` (
  `indexid` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`indexid`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of userdata
-- ----------------------------
INSERT INTO `userdata` VALUES ('1', '123456@email.com', '123123', '123123');
INSERT INTO `userdata` VALUES ('2', '123@123.com', '17688856221', '21321412');
INSERT INTO `userdata` VALUES ('3', '1231234', '12312', '123123');
INSERT INTO `userdata` VALUES ('4', '123@123.com', '123455', '12312');
INSERT INTO `userdata` VALUES ('5', '12345', '12345', '12345');
INSERT INTO `userdata` VALUES ('6', '12345', '123456', '12345');
