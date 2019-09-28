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
  `artist` VARCHAR(100) NULL,
  `venue` VARCHAR(100) NULL,
  `city` VARCHAR(45) NULL,
  `state` VARCHAR(45) NULL,
  `genre` VARCHAR(45) NULL,
  `date` VARCHAR(100) NULL,
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
INSERT INTO `concert` (`id`, `artist`, `venue`, `city`, `state`, `genre`, `date`) VALUES (1, 'Phish', 'E-Center', 'Camden', 'NJ', 'Rock', '07/03/2000');
INSERT INTO `concert` (`id`, `artist`, `venue`, `city`, `state`, `genre`, `date`) VALUES (2, 'Umphrey\'s McGee', 'Egyptian Room', 'Indianapolis', 'IN', 'Progressive Rock', '10/31/2003');
INSERT INTO `concert` (`id`, `artist`, `venue`, `city`, `state`, `genre`, `date`) VALUES (3, 'Metallica', 'Deer Creek', 'Noblesville', 'IN', 'Heavy Metal', '07/02/1994');
INSERT INTO `concert` (`id`, `artist`, `venue`, `city`, `state`, `genre`, `date`) VALUES (4, 'Bob Dylan', 'Market Square Arena', 'Indianapolis', 'IN', 'Folk', '10/26/1998');
INSERT INTO `concert` (`id`, `artist`, `venue`, `city`, `state`, `genre`, `date`) VALUES (5, 'Tool', 'Deer Creek', 'Noblesville', 'IN', 'Heavy Metal', '09/08/2001');
INSERT INTO `concert` (`id`, `artist`, `venue`, `city`, `state`, `genre`, `date`) VALUES (6, 'Phish', 'Watkins Glen International', 'Watkins Glen', 'NY', 'Rock', '07/01/2011');
INSERT INTO `concert` (`id`, `artist`, `venue`, `city`, `state`, `genre`, `date`) VALUES (7, 'Phish', 'Oklahoma City Zoo', 'Oklahoma City', 'OK', 'Rock', '08/29/2012');
INSERT INTO `concert` (`id`, `artist`, `venue`, `city`, `state`, `genre`, `date`) VALUES (8, 'Particle', 'The Vagabond', 'Miami', 'FL', 'Electronic', '12/30/2009');
INSERT INTO `concert` (`id`, `artist`, `venue`, `city`, `state`, `genre`, `date`) VALUES (9, 'Phish', 'Alpine Valley', 'East Troy', 'WI', 'Rock', '08/14/2010');
INSERT INTO `concert` (`id`, `artist`, `venue`, `city`, `state`, `genre`, `date`) VALUES (10, 'Umphrey\'s McGee', 'Stubb\'s BBQ', 'Austin', 'TX', 'Progressive Rock', '04/20/2012');
INSERT INTO `concert` (`id`, `artist`, `venue`, `city`, `state`, `genre`, `date`) VALUES (11, 'Eric Clapton', 'Toyota Center', 'Houston', 'TX', 'Blues', '03/16/2013');
INSERT INTO `concert` (`id`, `artist`, `venue`, `city`, `state`, `genre`, `date`) VALUES (12, 'Keller Williams', 'Blossom Music Center', 'Cuyahoga Falls', 'OH', 'Rock', '07/17/2005');
INSERT INTO `concert` (`id`, `artist`, `venue`, `city`, `state`, `genre`, `date`) VALUES (13, 'James Brown', 'Bonnaroo', 'Manchester', 'TN', 'Funk', '06/15/2003');
INSERT INTO `concert` (`id`, `artist`, `venue`, `city`, `state`, `genre`, `date`) VALUES (14, 'Phish', 'Rosemont Horizon Center', 'Rosemont', 'IL', 'Rock', '09/22/2000');
INSERT INTO `concert` (`id`, `artist`, `venue`, `city`, `state`, `genre`, `date`) VALUES (15, 'Moe', 'Red Rocks', 'Morrison', 'CO', 'Rock', '06/22/2018');
INSERT INTO `concert` (`id`, `artist`, `venue`, `city`, `state`, `genre`, `date`) VALUES (16, 'Umphrey\'s McGee', 'Red Rocks', 'Morrison', 'CO', 'Progressive Rock', '06/21/2019');
INSERT INTO `concert` (`id`, `artist`, `venue`, `city`, `state`, `genre`, `date`) VALUES (17, 'Umphrey\'s McGee', 'Red Rocks', 'Morrison', 'CO', 'Progressive Rock', '06/22/2019');
INSERT INTO `concert` (`id`, `artist`, `venue`, `city`, `state`, `genre`, `date`) VALUES (18, 'Umphrey\'s McGee', 'Red Rocks', 'Morrison', 'CO', 'Progressive Rock', '06/23/2019');
INSERT INTO `concert` (`id`, `artist`, `venue`, `city`, `state`, `genre`, `date`) VALUES (19, 'SoundGarden', 'Lollapalooza', 'Noblesville', 'IN', 'Alternative', '07/02/1996');
INSERT INTO `concert` (`id`, `artist`, `venue`, `city`, `state`, `genre`, `date`) VALUES (20, 'Weezer', 'Deer Creek', 'Noblesville', 'IN', 'Alternative', '08/12/1995');

COMMIT;

