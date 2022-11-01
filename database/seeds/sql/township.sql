-- MySQL dump 10.13  Distrib 8.0.29, for Linux (x86_64)
--
-- Host: localhost    Database: akoneya_db_jan
-- ------------------------------------------------------
-- Server version	8.0.31-0ubuntu0.20.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `townships`
--

DROP TABLE IF EXISTS `townships`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `townships` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `zone_id` bigint unsigned NOT NULL,
  `name_mm` text COLLATE utf8mb4_unicode_ci,
  `name_zh` text COLLATE utf8mb4_unicode_ci,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `zone_id` (`zone_id`)
) ENGINE=InnoDB AUTO_INCREMENT=156 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `townships`
--

LOCK TABLES `townships` WRITE;
/*!40000 ALTER TABLE `townships` DISABLE KEYS */;
INSERT INTO `townships` VALUES (1,'Ahlone',14,NULL,NULL,NULL),(2,'Bahan',14,NULL,NULL,NULL),(3,'Dagon',14,NULL,NULL,NULL),(4,'Amarapura',8,NULL,NULL,NULL),(5,'Aungmyethazan',8,NULL,NULL,NULL),(6,'Chanmyathazan',8,NULL,NULL,NULL),(7,'Mawlamyine',9,NULL,NULL,NULL),(8,'Hpa-an',6,NULL,NULL,NULL),(9,'Sanchaung',14,NULL,NULL,NULL),(10,'Yankin',14,'ရန်ကင်း',NULL,NULL),(11,'Hlaing',14,NULL,NULL,NULL),(12,'Hlaing Thar Yar',14,'လှိုင်သာယာ','-',NULL),(13,'La Thar',14,'လသာ','不反抗',NULL),(14,'Kamayut',14,'ကမာရွတ်','通勤',NULL),(15,'Botahtaung',14,'ဗိုလ်တထောင်','博大雄',NULL),(16,'Kyauktada',14,'ကျောက်တံတား','橋忠',NULL),(17,'Laeway',15,NULL,NULL,NULL),(18,'Thingangyun',14,'မဂ်လာတောင်','明加拉昂',NULL),(19,'Mingalar Taung Nyunt',14,'မဂ်လာတောင်ညွှန့်','明加拉昂',NULL),(20,'Thaketa',14,'သာကေတ','將有',NULL),(21,'Mayangone',14,'မရမ်းကုန်း','馬揚貢內',NULL),(22,'Lanmadaw',14,'လမ်းမ တော်','兰玛多',NULL),(23,'North Dagon',14,NULL,NULL,NULL),(24,'Lewai',7,NULL,NULL,NULL),(25,'Kyaikto',9,NULL,NULL,NULL),(26,'Kyaikmaraw',9,NULL,NULL,NULL),(27,'Paung',9,NULL,NULL,NULL),(28,'Thaton',9,NULL,NULL,NULL),(29,'Myitkyina',4,NULL,NULL,NULL),(30,'Nawngmun',4,NULL,NULL,NULL),(31,'Machanbaw',4,NULL,NULL,NULL),(32,'Puta-O',4,NULL,NULL,NULL),(33,'Sumprabum',4,NULL,NULL,NULL),(34,'Chipwi',4,NULL,NULL,NULL),(35,'Waingmaw',4,NULL,NULL,NULL),(36,'Tanai',4,NULL,NULL,NULL),(37,'Mogaung',4,NULL,NULL,NULL),(38,'Mohnyin',4,NULL,NULL,NULL),(39,'Shwegu',4,NULL,NULL,NULL),(40,'Bhamo',4,NULL,NULL,NULL),(41,'Mansi',4,NULL,NULL,NULL),(42,'Momauk',4,NULL,NULL,NULL),(43,'Hpakant',4,NULL,NULL,NULL),(44,'Tsawlaw',4,NULL,NULL,NULL),(45,'Khaunglanhpu',4,NULL,NULL,NULL),(46,'Sinbo',4,NULL,NULL,NULL),(47,'Injangyang',4,NULL,NULL,NULL),(48,'Hkamti',12,NULL,NULL,NULL),(49,'Nanyun',12,NULL,NULL,NULL),(50,'Lahe',12,NULL,NULL,NULL),(51,'Homalin',12,NULL,NULL,NULL),(52,'Paungbyin',12,NULL,NULL,NULL),(53,'Tamu',12,NULL,NULL,NULL),(54,'Mawlaik',12,NULL,NULL,NULL),(55,'Kale',12,NULL,NULL,NULL),(56,'Kalewa',12,NULL,NULL,NULL),(57,'Mingin',12,NULL,NULL,NULL),(58,'Kani',12,NULL,NULL,NULL),(59,'Banmauk',12,NULL,NULL,NULL),(60,'Indaw',12,NULL,NULL,NULL),(61,'Lay Shi',12,NULL,NULL,NULL),(62,'Natmauk',7,NULL,NULL,NULL),(63,'Magway',7,NULL,NULL,NULL),(64,'AAAAA',7,NULL,NULL,NULL),(65,'Pwint Phyu',7,NULL,NULL,NULL),(66,'Salin',7,'စလင်း','複製',NULL),(67,'Yaynanchaung',7,'ရေနံချောင်း',NULL,NULL),(68,'Kanma',7,NULL,NULL,NULL),(69,'South Okkalapa',14,'South Okkalapa','South Okkalapa',NULL),(70,'North Dagon',14,'North Dagon','North Dagon',NULL),(71,'Kyimyindaing',14,'Kyimyindaing','Kyimyindaing',NULL),(72,'Tamwe',14,'Tamwe','Tamwe',NULL),(73,'Pyin Oo Lwin',8,NULL,NULL,NULL),(74,'Nyaung Oo',8,NULL,NULL,NULL),(75,'Pyi Gyi Takon',8,NULL,NULL,NULL),(76,'Mogoke',8,NULL,NULL,NULL),(77,'Sagaing',12,NULL,NULL,NULL),(78,'Budalin',12,NULL,NULL,NULL),(79,'Monywa',12,NULL,NULL,NULL),(80,'Pathein',1,NULL,NULL,NULL),(81,'Hinthada',1,NULL,NULL,NULL),(82,'Myaungmya',1,NULL,NULL,NULL),(83,'Dawei',13,NULL,NULL,NULL),(84,'Kawthoung',13,NULL,NULL,NULL),(85,'Taunggyi',11,NULL,NULL,NULL),(86,'Aungban',11,NULL,NULL,NULL),(87,'Kalaw',11,NULL,NULL,NULL),(88,'Lashio',11,NULL,NULL,NULL),(89,'Laukkaing',11,NULL,NULL,NULL),(90,'Kyaukme',11,NULL,NULL,NULL),(91,'Mrauk-U',10,NULL,NULL,NULL),(92,'Sittwe',10,NULL,NULL,NULL),(93,'Kyaukphyu',10,NULL,NULL,NULL),(94,'Putao',4,NULL,NULL,NULL),(95,'Loikaw',5,NULL,NULL,NULL),(96,'Hakha',3,NULL,NULL,NULL),(97,'Falam',5,NULL,NULL,NULL),(98,' North Dagon',14,NULL,NULL,NULL),(99,' Mayangone',14,NULL,NULL,NULL),(100,'Botataung',14,NULL,NULL,NULL),(101,'North Okkalapa',14,NULL,NULL,NULL),(102,'Pazundaung',14,NULL,NULL,NULL),(103,'South Dagon',14,NULL,NULL,NULL),(104,'Thanlyin ',14,NULL,NULL,NULL),(105,'Aungmyaythazan',8,NULL,NULL,NULL),(106,'Chanayetharzan ',8,NULL,NULL,NULL),(107,'Chanmyathazi',8,NULL,NULL,NULL),(108,'Mahar Aung Myay ',8,NULL,NULL,NULL),(109,'Myeik',13,NULL,NULL,NULL),(110,'Tachileik ',11,NULL,NULL,NULL),(111,'Buthidaung',10,NULL,NULL,NULL),(112,'Dagon Seikkan',14,NULL,NULL,NULL),(113,'Hmawbi',14,NULL,NULL,NULL),(114,'Insein',14,NULL,NULL,NULL),(115,'Pabedan',14,NULL,NULL,NULL),(116,'Shwe Pyi Tha',14,NULL,NULL,NULL),(117,'Dawbon',14,NULL,NULL,NULL),(118,'East Dagon',14,NULL,NULL,NULL),(119,'Hlegu',14,NULL,NULL,NULL),(120,'Mingalardon',14,NULL,NULL,NULL),(121,'Myaung Mya',14,NULL,NULL,NULL),(122,'Mingalar Taung',14,NULL,NULL,NULL),(123,'Thakada',14,NULL,NULL,NULL),(124,'Mattayar',12,NULL,NULL,NULL),(125,'Zeyar Thiri',15,NULL,NULL,NULL),(126,'Dakhina Thiri',15,NULL,NULL,NULL),(127,'Nay Pyi Taw',15,NULL,NULL,NULL),(128,'Ottara Thiri',15,NULL,NULL,NULL),(129,'Pyinmana',15,NULL,NULL,NULL),(130,'Meikhtilar',8,NULL,NULL,NULL),(131,'Myothit',8,NULL,NULL,NULL),(132,'Pyi Gyi Tagon',8,NULL,NULL,NULL),(133,'Pathein Gyi',8,NULL,NULL,NULL),(134,'Sint Kaing',8,NULL,NULL,NULL),(135,'Bamaw',4,NULL,NULL,NULL),(136,'Bago',2,NULL,NULL,NULL),(137,'Taungoo',2,NULL,NULL,NULL),(138,'Ma U Bin',1,NULL,NULL,NULL),(139,'Myingyan',8,NULL,NULL,NULL),(140,'Thingankyun',14,NULL,NULL,NULL),(141,'Tarmwe',14,NULL,NULL,NULL),(142,'Pyay',2,NULL,NULL,NULL),(143,'Thantlang',3,NULL,NULL,NULL),(144,'Mindat',3,NULL,NULL,NULL),(145,'Laputta',1,NULL,NULL,NULL),(146,'Bilin',9,NULL,NULL,NULL),(147,'Ye',9,NULL,NULL,NULL),(148,'Phyu',2,NULL,NULL,NULL),(149,'Daik-U',2,NULL,NULL,NULL),(150,'Tharyawady',2,NULL,NULL,NULL),(151,'Letpadan',2,NULL,NULL,NULL),(152,'Minhla',2,NULL,NULL,NULL),(153,'Kyopinkauk',2,NULL,NULL,NULL),(154,'Zigon',2,NULL,NULL,NULL),(155,'Taikkyi',14,NULL,NULL,NULL);
/*!40000 ALTER TABLE `townships` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-11-01 14:20:51
