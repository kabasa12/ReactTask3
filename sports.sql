-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 26, 2020 at 07:49 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sports`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`) VALUES
(1, 'FootBall'),
(2, 'BasketBall');

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `id` int(10) UNSIGNED NOT NULL,
  `text` varchar(200) NOT NULL,
  `game_id` int(10) UNSIGNED NOT NULL,
  `creation_date` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`id`, `text`, `game_id`, `creation_date`) VALUES
(4, 'היה משחק על הפנים חבל שבאתי', 1, '2020-02-27 08:34:28'),
(8, 'this was a very bad game', 4, '2020-05-26 19:25:58'),
(9, 'I\'ll never go to see any more games', 4, '2020-07-21 20:00:54');

-- --------------------------------------------------------

--
-- Table structure for table `gamesres`
--

CREATE TABLE `gamesres` (
  `id` int(10) UNSIGNED NOT NULL,
  `teamA_id` int(10) UNSIGNED NOT NULL,
  `teamB_id` int(10) UNSIGNED NOT NULL,
  `resualtA` int(10) UNSIGNED NOT NULL,
  `resualtB` int(10) UNSIGNED NOT NULL,
  `game_date` datetime NOT NULL DEFAULT current_timestamp(),
  `category_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `gamesres`
--

INSERT INTO `gamesres` (`id`, `teamA_id`, `teamB_id`, `resualtA`, `resualtB`, `game_date`, `category_id`) VALUES
(1, 1, 2, 3, 1, '2020-02-25 18:14:33', 1),
(2, 3, 4, 2, 2, '2020-02-25 18:14:33', 1),
(3, 5, 6, 0, 5, '2020-02-25 18:14:33', 1),
(4, 10, 9, 82, 61, '2020-02-25 18:14:33', 2),
(5, 10, 8, 88, 91, '2020-02-25 18:14:33', 2),
(6, 7, 8, 80, 81, '2020-02-25 18:14:33', 2);

-- --------------------------------------------------------

--
-- Table structure for table `teams`
--

CREATE TABLE `teams` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(150) NOT NULL,
  `category_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `teams`
--

INSERT INTO `teams` (`id`, `name`, `category_id`) VALUES
(1, 'FC Barcelona', 1),
(2, 'Real-Madrid', 1),
(3, 'Chelsea', 1),
(4, 'Man United', 1),
(5, 'Maccabi Tel-Aviv', 1),
(6, 'Maccabi Haifa', 1),
(7, 'FC Barcelona', 2),
(8, 'Real-Madrid', 2),
(9, 'Cska Moscow', 2),
(10, 'Maccabi Tel-Aviv', 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `gamesres`
--
ALTER TABLE `gamesres`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `teams`
--
ALTER TABLE `teams`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `gamesres`
--
ALTER TABLE `gamesres`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `teams`
--
ALTER TABLE `teams`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
