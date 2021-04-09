CREATE DATABASE  IF NOT EXISTS `travelPost`;
USE `travelPost`;
--
--
DROP TABLE IF EXISTS `comment`;
CREATE TABLE `comment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `comment` varchar(255) DEFAULT NULL,
  `user` varchar(255) DEFAULT NULL, 
  `date` datetime DEFAULT null,
  `points` int(11) DEFAULT NULL,


  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

INSERT INTO `comment` VALUES 
(1,'comment', 'name', date,0)