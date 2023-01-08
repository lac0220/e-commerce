-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jan 08, 2023 at 11:47 AM
-- Server version: 10.5.16-MariaDB
-- PHP Version: 7.3.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `id20031721_ecommerce`
--
CREATE DATABASE IF NOT EXISTS `id20031721_ecommerce` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;
USE `id20031721_ecommerce`;

-- --------------------------------------------------------

--
-- Table structure for table `list_items`
--

CREATE TABLE `list_items` (
  `id` int(100) NOT NULL,
  `sku` varchar(20) NOT NULL,
  `name` varchar(20) NOT NULL,
  `price` varchar(10) NOT NULL,
  `size` varchar(10) NOT NULL,
  `height` varchar(10) NOT NULL,
  `width` varchar(10) NOT NULL,
  `length` varchar(10) NOT NULL,
  `weight` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `list_items`
--

INSERT INTO `list_items` (`id`, `sku`, `name`, `price`, `size`, `height`, `width`, `length`, `weight`) VALUES
(2371, 'LACI-34-VBGF', 'CD', '13.00', '2', '0', '0', '0', '0.00'),
(2372, 'DFR-3234-FGGVVD', 'Book', '24.00', '0', '0', '0', '0', '2.00'),
(2401, 'DFD-4532-AWDD', 'Pinocchio', '29.99', '700', '0', '0', '0', '0.00'),
(2416, 'iozc-4634-dsaw', 'Chair', '15.49', '0', '50', '87', '79', '0.00'),
(2418, 'etr-346-tjkk', 'Lion-King', '22.99', '0', '0', '0', '0', '1.20'),
(2424, '3345-gztr-689', 'Table', '49.99', '0', '70', '60', '120', '0.00'),
(2723, 'HKH-657-LKO', 'Prince ', '19.99', '1200', '0', '0', '0', '0.00'),
(2724, '346-BfDa-35678674', 'The Shack', '38.50', '0', '0', '0', '0', '1.82'),
--
-- Indexes for dumped tables
--

--
-- Indexes for table `list_items`
--
ALTER TABLE `list_items`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `sku` (`sku`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `list_items`
--
ALTER TABLE `list_items`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2939;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
