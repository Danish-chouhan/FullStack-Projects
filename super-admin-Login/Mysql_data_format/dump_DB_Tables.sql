-- MySQL dump 10.13  Distrib 8.0.34, for Linux (x86_64)
--
-- Host: localhost    Database: SuperAdminLogin
-- ------------------------------------------------------
-- Server version	8.0.34-0ubuntu0.22.04.1

-- Table structure for table `Login`
--

CREATE TABLE `Login` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Email` varchar(255) NOT NULL,
  `Password` varchar(255) NOT NULL,
  UNIQUE KEY `id` (`id`),
  UNIQUE KEY `Email` (`Email`),
  UNIQUE KEY `Password` (`Password`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--

--
--
-- Table structure for table `SignUp`
--


CREATE TABLE `SignUp` (
  `id` int NOT NULL AUTO_INCREMENT,
  `FullName` varchar(255) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `Number` varchar(255) NOT NULL,
  `Password` varchar(255) NOT NULL,
  UNIQUE KEY `id` (`id`),
  UNIQUE KEY `Email` (`Email`),
  UNIQUE KEY `Password` (`Password`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


