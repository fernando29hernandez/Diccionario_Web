-- MySQL dump 10.13  Distrib 5.7.31, for Linux (x86_64)
--
-- Host: localhost    Database: db
-- ------------------------------------------------------
-- Server version	5.7.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Comentario`
--

DROP TABLE IF EXISTS `Comentario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Comentario` (
  `comentario_id` int(11) NOT NULL AUTO_INCREMENT,
  `contenido` varchar(255) NOT NULL,
  `fecha` datetime NOT NULL,
  `usuario_id` int(11) NOT NULL,
  `palabra_id` int(11) NOT NULL,
  PRIMARY KEY (`comentario_id`),
  KEY `usuario_id` (`usuario_id`),
  KEY `palabra_id` (`palabra_id`),
  CONSTRAINT `Comentario_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `Usuario` (`usuario_id`),
  CONSTRAINT `Comentario_ibfk_2` FOREIGN KEY (`palabra_id`) REFERENCES `Palabra` (`palabra_id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Comentario`
--

LOCK TABLES `Comentario` WRITE;
/*!40000 ALTER TABLE `Comentario` DISABLE KEYS */;
INSERT INTO `Comentario` VALUES (21,'comentario de prueba','2020-10-19 02:56:34',11,6),(22,'otro comentario','2020-10-19 02:57:00',11,6),(28,'primero ','2020-10-24 15:19:22',1,8),(29,'Excelente Aporte','2021-03-13 13:28:13',1,19),(30,'Buen contenido','2021-03-13 16:16:53',11,19),(31,'Falta practica','2021-03-13 16:42:22',11,11),(32,'Buen video,slds','2021-03-13 16:55:07',11,11);
/*!40000 ALTER TABLE `Comentario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Palabra`
--

DROP TABLE IF EXISTS `Palabra`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Palabra` (
  `palabra_id` int(11) NOT NULL AUTO_INCREMENT,
  `letra` varchar(2) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `url_video` varchar(255) NOT NULL,
  `estado` int(11) NOT NULL,
  `usuario_id` int(11) NOT NULL,
  PRIMARY KEY (`palabra_id`),
  KEY `usuario_id` (`usuario_id`),
  CONSTRAINT `Palabra_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `Usuario` (`usuario_id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Palabra`
--

LOCK TABLES `Palabra` WRITE;
/*!40000 ALTER TABLE `Palabra` DISABLE KEYS */;
INSERT INTO `Palabra` VALUES (2,'A','artista','1603163759004zoom_0.mp4',2,1),(4,'H','hola 2','1603163759004zoom_0.mp4',2,3),(6,'A','a mimir','1603163759004zoom_0.mp4',2,1),(8,'P','Prueba','1603163759004zoom_0.mp4',1,1),(9,'P','prueba no 3','1603163759004zoom_0.mp4',0,1),(10,'H','Hola','1604988745407Hola.mp4',1,11),(11,'B','Buenos Días','1604988783435buenos dias.mp4',1,11),(12,'B','Buenas Noches','1604988807343buenas noches.mp4',1,11),(13,'C','Como estas','1604988830978como estas.mp4',1,11),(14,'B','Bien','1604988845152bien.mp4',1,11),(15,'M','Mucho Gusto','1604988868321mucho gusto.mp4',1,11),(16,'E','Excelente','1604988884641excelente.mp4',1,11),(17,'P','Permiso','1604988909163permiso.mp4',1,11),(19,'C','Computadora Portatil','1604988940766computadora portatil.mp4',1,11),(20,'R','Regular','1604992296009regular.mp4',1,11),(21,'P','Prueba 5','1605707732922VID-20201109-WA0014.mp4',0,12),(22,'P','Palabra no 9','1605708743272VID-20201109-WA0019.mp4',0,12),(23,'P','Palabra nueva','1615683370791VID-20201109-WA0015.mp4',0,11),(24,'P','Palabra prueba 2','1615683526085VID-20201109-WA0023.mp4',0,11);
/*!40000 ALTER TABLE `Palabra` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Usuario`
--

DROP TABLE IF EXISTS `Usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Usuario` (
  `usuario_id` int(11) NOT NULL AUTO_INCREMENT,
  `correo` varchar(255) NOT NULL,
  `contrasena` varchar(255) NOT NULL,
  `adminstrador` tinyint(1) NOT NULL,
  PRIMARY KEY (`usuario_id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Usuario`
--

LOCK TABLES `Usuario` WRITE;
/*!40000 ALTER TABLE `Usuario` DISABLE KEYS */;
INSERT INTO `Usuario` VALUES (1,'correo1@gmail.com ','contra',0),(2,'correo2@gmail.com ','contra',0),(3,'correo3@gmail.com ','contra',0),(4,'correo4@gmail.com ','contra',0),(5,'correo5@gmail.com','1234',0),(6,'correo5@gmail.com','1234',0),(7,'correo5@gmail.com','1234',0),(8,'correo6@gmail.com','1234',0),(9,'correo9@gmail.com','1234',0),(10,'correo3@gmail.com ','contra',1),(11,'admin@gmail.com ','admin',1),(12,'correo1@gmail.com','1234',0);
/*!40000 ALTER TABLE `Usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-04-01 16:22:21
