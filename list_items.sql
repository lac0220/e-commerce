-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost: 3307
-- Generation Time: Dec 18, 2022 at 10:45 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `e-commerce`
--

-- --------------------------------------------------------

--
-- Table structure for table `list_items`
--

CREATE TABLE `list_items` (
  `id` int(100) NOT NULL,
  `sku` varchar(20) NOT NULL,
  `name` varchar(50) NOT NULL,
  `price` decimal(20,2) NOT NULL,
  `size` int(10) NOT NULL,
  `height` int(10) NOT NULL,
  `width` int(10) NOT NULL,
  `length` int(10) NOT NULL,
  `weight` decimal(20,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `list_items`
--

INSERT INTO `list_items` (`id`, `sku`, `name`, `price`, `size`, `height`, `width`, `length`, `weight`) VALUES
(2371, 'LACI-34-VBGF', 'CD', '13.00', 2, 0, 0, 0, '0.00'),
(2372, 'DFR-3234-FGGVVD', 'Book', '24.00', 0, 0, 0, 0, '2.00'),
(2401, 'DFD-4532-AWDD', 'Pinocchio', '29.99', 700, 0, 0, 0, '0.00'),
(2416, 'iozc-4634-dsaw', 'Chair', '15.49', 0, 50, 87, 79, '0.00'),
(2418, 'etr-346-tjkk', 'Lion-King', '22.99', 0, 0, 0, 0, '1.20'),
(2424, '3345-gztr-689', 'Table', '49.99', 0, 70, 60, 120, '0.00'),
(2465, 'DFR-3234-FGGVVD4', 'hfghfgh', '45.00', 35345, 0, 0, 0, '0.00'),
(2715, '345354345345', 'fghgfh', '45.00', 0, 0, 0, 0, '56.00'),
(2716, '67876768', 'ghfghf', '56.00', 54645654, 0, 0, 0, '45.00'),
(2717, '45435', 'dfgdfgf', '34534.00', 2, 0, 0, 0, '0.00'),
(2718, '565675', 'hjghjh', '121212121212.00', 1212121212, 0, 0, 0, '0.00'),
(2723, 'HKH-657-LKO', 'Prince ', '19.99', 1200, 0, 0, 0, '0.00'),
(2724, '346-BfDa-35678674', 'The Shack', '38.50', 0, 0, 0, 0, '1.82'),
(2779, '67876768ö', 'hfg', '56.00', 567, 0, 0, 0, '0.00'),
(2788, '676757', 'gh', '67.00', 57, 0, 0, 0, '0.00'),
(2790, 'DFR-3234-FGGVVD7', 'gffgh', '5646.00', 465, 0, 0, 0, '0.00'),
(2795, 'DFR-3234-FGGV', 'gffgh', '5646.00', 465, 0, 0, 0, '0.00'),
(2810, 'DFR-3234-FGG', 'gffgh', '5646.00', 465, 0, 0, 0, '0.00'),
(2821, '65646', 'fgh', '5.00', 456, 0, 0, 0, '0.00'),
(2872, '5654658879', 'hjjghj', '45645.00', 57567, 0, 0, 0, '0.00'),
(2873, '56546588799', 'hjjghj', '45645.00', 57567, 0, 0, 0, '0.00'),
(2874, '565465887999', 'hjjghj', '45645.00', 57567, 0, 0, 0, '0.00'),
(2875, 'DFR-3234-FGGVVD798', 'tzrz', '456.00', 456, 0, 0, 0, '0.00'),
(2876, 'DFR-3234-FGGVVD7989', 'gdg', '4556.00', 0, 0, 0, 0, '564.00'),
(2879, '6876868', 'bubuka', '12.00', 0, 0, 0, 0, '45.00');

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
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2882;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
