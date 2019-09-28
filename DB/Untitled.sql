-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema concertdb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `concertdb` ;

-- -----------------------------------------------------
-- Schema concertdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `concertdb` DEFAULT CHARACTER SET utf8 ;
USE `concertdb` ;

-- -----------------------------------------------------
-- Table `concert`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `concert` ;

CREATE TABLE IF NOT EXISTS `concert` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `artist` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS concert@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'concert'@'localhost' IDENTIFIED BY 'concert';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'concert'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `concert`
-- -----------------------------------------------------
START TRANSACTION;
USE `concertdb`;
INSERT INTO `concert` (`id`, `artist`) VALUES (1, 'Phish');

COMMIT;

