-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- 생성 시간: 19-10-28 19:07
-- 서버 버전: 5.7.26
-- PHP 버전: 7.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 데이터베이스: `tourreview`
--

-- --------------------------------------------------------

--
-- 테이블 구조 `admin`
--

DROP TABLE IF EXISTS `admin`;
CREATE TABLE IF NOT EXISTS `admin` (
  `adminId` varchar(20) NOT NULL DEFAULT '',
  `adminname` varchar(20) DEFAULT NULL,
  `adminpassword` varchar(20) NOT NULL,
  PRIMARY KEY (`adminId`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- 테이블의 덤프 데이터 `admin`
--

INSERT INTO `admin` (`adminId`, `adminname`, `adminpassword`) VALUES
('johnyun930', 'johnyun', 'yoowogur');

-- --------------------------------------------------------

--
-- 테이블 구조 `comment`
--

DROP TABLE IF EXISTS `comment`;
CREATE TABLE IF NOT EXISTS `comment` (
  `commentId` int(11) NOT NULL AUTO_INCREMENT,
  `userId` varchar(20) NOT NULL,
  `createdDate` varchar(20) NOT NULL,
  `comment` varchar(200) NOT NULL,
  `reviewId` int(11) NOT NULL,
  PRIMARY KEY (`commentId`),
  KEY `userId` (`userId`),
  KEY `reviewId` (`reviewId`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- 테이블의 덤프 데이터 `comment`
--

INSERT INTO `comment` (`commentId`, `userId`, `createdDate`, `comment`, `reviewId`) VALUES
(1, '', '', '', 0);

-- --------------------------------------------------------

--
-- 테이블 구조 `location`
--

DROP TABLE IF EXISTS `location`;
CREATE TABLE IF NOT EXISTS `location` (
  `locationId` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `country` varchar(20) NOT NULL,
  `description` varchar(200) NOT NULL,
  PRIMARY KEY (`locationId`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- 테이블의 덤프 데이터 `location`
--

INSERT INTO `location` (`locationId`, `name`, `country`, `description`) VALUES
(1, 'Vancouver', 'Canada', 'This is so beautiful');

-- --------------------------------------------------------

--
-- 테이블 구조 `review`
--

DROP TABLE IF EXISTS `review`;
CREATE TABLE IF NOT EXISTS `review` (
  `reviewId` int(11) NOT NULL AUTO_INCREMENT,
  `createdDate` varchar(20) DEFAULT NULL,
  `reviewDescription` varchar(200) NOT NULL,
  `rating` int(5) NOT NULL,
  `userId` varchar(20) NOT NULL,
  `locationId` int(11) NOT NULL,
  PRIMARY KEY (`reviewId`),
  KEY `userId` (`userId`),
  KEY `locationId` (`locationId`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- 테이블의 덤프 데이터 `review`
--

INSERT INTO `review` (`reviewId`, `createdDate`, `reviewDescription`, `rating`, `userId`, `locationId`) VALUES
(1, '8/12/2019', 'afdassa', 4, 'Chris123', 1);

-- --------------------------------------------------------

--
-- 테이블 구조 `siteuser`
--

DROP TABLE IF EXISTS `siteuser`;
CREATE TABLE IF NOT EXISTS `siteuser` (
  `userId` varchar(20) NOT NULL,
  `username` varchar(20) DEFAULT NULL,
  `password` varchar(20) NOT NULL,
  `photo` varchar(20) NOT NULL,
  `profile` varchar(20) NOT NULL,
  PRIMARY KEY (`userId`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- 테이블의 덤프 데이터 `siteuser`
--

INSERT INTO `siteuser` (`userId`, `username`, `password`, `photo`, `profile`) VALUES
('chris123', 'Chris', 'q12345', 'b1', 'p1'),
('David123', 'David', '12345', 'd2', 'p2'),
('john123', 'john', 'j12345', 'd3', 'p3');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
