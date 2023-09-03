-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 03, 2023 at 02:31 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `project-manajemen`
--

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

CREATE TABLE `employee` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `alamat` varchar(255) NOT NULL,
  `nm_photo` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `employee`
--

INSERT INTO `employee` (`id`, `name`, `alamat`, `nm_photo`, `createdAt`, `updatedAt`) VALUES
(5, 'matiusdn', 'kotaskj', NULL, '2023-09-03 03:57:32', '2023-09-03 03:58:22'),
(7, 'sdc', 'kota', NULL, '2023-09-03 04:24:59', '2023-09-03 04:29:16'),
(8, 'matiusdnsx', 'kotaad', NULL, '2023-09-03 04:31:00', NULL),
(9, 'matiusdnaax', 'kotaad', NULL, '2023-09-03 04:32:33', NULL),
(10, 'czc', 'kotaad', NULL, '2023-09-03 04:34:24', NULL),
(16, 'icikiwir', 'kmeikar', 'undefined', '2023-09-03 06:37:30', NULL),
(17, 'icikiwirs', 'kmeikar', 'undefined', '2023-09-03 06:39:16', NULL),
(18, 'icikiwirsc', 'kmeikar', 'image_1693698118877.png', '2023-09-03 06:41:58', NULL),
(19, 'icikas', 'kmeikar', 'image_1693698213919.png', '2023-09-03 06:43:34', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` enum('ADMIN','USER') NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `password`, `role`, `createdAt`, `updatedAt`) VALUES
(10, 'admin4', 'admin4', 'USER', '2023-09-02 21:40:30', '2023-09-03 04:26:31'),
(11, 'dimasd', 'dimasd', 'USER', '2023-09-02 21:41:58', '2023-09-03 04:22:19'),
(14, 'dimas2', 'dimas2', 'ADMIN', '2023-09-03 04:22:02', NULL),
(15, 'admins', 'as', 'ADMIN', '2023-09-03 04:23:33', NULL),
(16, 'tius', 'asdasdasdasd', 'ADMIN', '2023-09-03 04:26:04', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `employee`
--
ALTER TABLE `employee`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
