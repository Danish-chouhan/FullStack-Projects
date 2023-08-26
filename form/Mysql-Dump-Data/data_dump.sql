-- MySQL dump 10.13  Distrib 8.0.34, for Linux (x86_64)
--
-- Host: localhost    Database: FormData
-- ------------------------------------------------------
-- Server version	8.0.34-0ubuntu0.22.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Data`
--

DROP TABLE IF EXISTS `Data`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Data` (
  `id` int NOT NULL AUTO_INCREMENT,
  `FullName` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `Password` varchar(200) NOT NULL,
  `We_get_data_on` datetime DEFAULT CURRENT_TIMESTAMP,
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Data`
--

LOCK TABLES `Data` WRITE;
/*!40000 ALTER TABLE `Data` DISABLE KEYS */;
INSERT INTO `Data` VALUES (1,'','','$2b$05$kNOOCEaDeXH7OZDSgLnJle1frRzGmNgzWFzaXkzzzVTFBz9XqilzG','2023-08-25 02:32:34'),(2,'','','$2b$05$.qnHd4thJDe0tEPZbvRsMOEgyXvsm9Jp7ExO982vpPluO1TpDq5EO','2023-08-25 02:49:29'),(3,'Danish chouhan','danishchouhan41@gmail.com','$2b$05$8/CqKOf5ahoR78komfngD.xww3/MSElVAP7E0zMbD3sKlbGOKufsm','2023-08-25 02:58:01'),(4,'','','$2b$05$B7VHImYgjSRMctSDdO3omOjN5qTvadoirSOk2SzlSyhzon/7fKHi2','2023-08-25 03:14:17'),(5,'','','$2b$05$A8xoqp8MqgapDgtARgjNlOfsOFuAXeU2q8idDyT3Nd2DfwTNyzJka','2023-08-25 03:14:33'),(6,'Danish chouhan','danishchouhan41@gmail.com','$2b$05$en5/I12GZiAXTxhk3aMlO.6Rw0UpiY3aV4o4P8pvWSzgpBl7KnPd2','2023-08-25 03:22:37'),(7,'','','$2b$05$Wudc4249CT0CetdHX5SfI.YWlIl0eK9E/18kjkVvq041c8DxhMqym','2023-08-25 09:45:01'),(8,'shanawaj@gmai.com','danishchouhan41@gmail.com','$2b$05$/cG9ShEE8x4DVCvfybTC9OYFSMov26qPTl3ope/tmdpT/gzPEN.h2','2023-08-25 12:19:00'),(9,'','','$2b$05$kvm87xYjnjNLDjz2Vb/RaevOlQtMFW7V3hgduatdz5oGmeCOwH.XS','2023-08-25 18:51:34'),(10,'','','$2b$05$oDQFq2zqH5GjOXPGXqZj9.LXric2ABUjNVPTRZjAxX2E5LMAGGyZi','2023-08-25 18:53:29'),(11,'','','$2b$05$3rlLx.OK.IJK4gN600MpAu3lOWRpn9HPFsgUcYuYy0M2ZrT1q6iQW','2023-08-25 19:05:00'),(12,'','','$2b$05$NFgzpQwXwnRL0vIkmOVQPOnFnUjG/IeUo5wfUJumV70o0tWZWtRcG','2023-08-26 01:46:06'),(13,'','','$2b$05$Y85iZ.JJSxxDuBFZV4wKjOTaIgV.zU6F.24eBtFJtnbRQ82SFOyPe','2023-08-26 02:02:41'),(14,'','','$2b$05$oarsIWkm8gjTP3MkMcPzXu3vdtRy1U99lRypYh5C.aSEH16lWgje.','2023-08-26 02:03:56'),(15,'','','$2b$05$oNjtD3cPP14Ho5stTFnDB.ybHuZ6wZStybz67kLNq8kMZ330aLGyW','2023-08-26 02:12:43'),(16,'','','$2b$05$ft.jLeHGODBs/agQSnHA7umJmZjuAvcw3GoC4UdkX46CdXmkBY46S','2023-08-26 02:14:47'),(17,'Danish chouhan','','$2b$05$dGQaXp/V3mfEaLdBVX7EoO0V2foRkZN4gPXMHhGovkSA0.eOa/b9q','2023-08-26 02:22:21'),(18,'nnsns','','$2b$05$5JnVh8h/p01mO97Ri6HSMu7VPa92PrZn7zO67MK0qk152tb0T9Tvq','2023-08-26 02:23:22'),(19,'','','$2b$05$ijSANGcDuRUeKAoAkLoUwe.TcUvyud884GiMDCQxutFgjcVjpvbHO','2023-08-26 10:12:09'),(20,'','','$2b$05$YjfHSrak4H/Nu5rMO.rW0.vArHNCdbcVbHW.KQQ2Q25HtnKkJIZrK','2023-08-26 10:21:33');
/*!40000 ALTER TABLE `Data` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-08-26 10:32:05
