CREATE DATABASE  IF NOT EXISTS `travelPost`;
USE `travelPost`;
--
--
DROP TABLE IF EXISTS `blog`;
CREATE TABLE `blog` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `picture` varchar(255) DEFAULT NULL, 
  `date` DATE DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `points` int(11) DEFAULT NULL,

  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

INSERT INTO `blog` VALUES 
(1,'name', 'picture', date, 'description',0)