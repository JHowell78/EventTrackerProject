DROP SCHEMA IF EXISTS `concertdb2` ;
CREATE SCHEMA IF NOT EXISTS `concertdb2` DEFAULT CHARACTER SET utf8 ;

use concertdb2;
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


START TRANSACTION;
USE `concertdb2`;
INSERT INTO `concert` (`id`, `artist`, `venue`, `city`, `state`, `genre`, `date`) VALUES (1, 'Phish', 'E-Center', 'Camden', 'NJ', 'Jam Band', '07/03/2000');
INSERT INTO `concert` (`id`, `artist`, `venue`, `city`, `state`, `genre`, `date`) VALUES (2, 'Umphrey\'s McGee', 'Egyptian Room', 'Indianapolis', 'IN', 'Progressive Rock', '10/31/2003');
INSERT INTO `concert` (`id`, `artist`, `venue`, `city`, `state`, `genre`, `date`) VALUES (3, 'Metallica', 'Deer Creek', 'Noblesville', 'IN', 'Heavy Metal', '07/02/1994');
INSERT INTO `concert` (`id`, `artist`, `venue`, `city`, `state`, `genre`, `date`) VALUES (4, 'Bob Dylan', 'Market Square Arena', 'Indianapolis', 'IN', 'Folk', '10/26/1998');
INSERT INTO `concert` (`id`, `artist`, `venue`, `city`, `state`, `genre`, `date`) VALUES (5, 'Tool', 'Deer Creek', 'Noblesville', 'IN', 'Heavy Metal', '09/08/2001');
INSERT INTO `concert` (`id`, `artist`, `venue`, `city`, `state`, `genre`, `date`) VALUES (6, 'Phish', 'Watkins Glen International', 'Watkins Glen', 'NY', 'Jam Band', '07/01/2011');
INSERT INTO `concert` (`id`, `artist`, `venue`, `city`, `state`, `genre`, `date`) VALUES (7, 'Phish', 'Oklahoma City Zoo', 'Oklahoma City', 'OK', 'Jam Band', '08/29/2012');
INSERT INTO `concert` (`id`, `artist`, `venue`, `city`, `state`, `genre`, `date`) VALUES (8, 'Particle', 'The Vagabond', 'Miami', 'FL', 'Electronic', '12/30/2009');
INSERT INTO `concert` (`id`, `artist`, `venue`, `city`, `state`, `genre`, `date`) VALUES (9, 'Phish', 'Alpine Valley', 'East Troy', 'WI', 'Jam Band', '08/14/2010');
INSERT INTO `concert` (`id`, `artist`, `venue`, `city`, `state`, `genre`, `date`) VALUES (10, 'Umphrey\'s McGee', 'Stubb\'s BBQ', 'Austin', 'TX', 'Progressive Rock', '04/20/2012');
INSERT INTO `concert` (`id`, `artist`, `venue`, `city`, `state`, `genre`, `date`) VALUES (11, 'Eric Clapton', 'Toyota Center', 'Houston', 'TX', 'Blues', '03/16/2013');
INSERT INTO `concert` (`id`, `artist`, `venue`, `city`, `state`, `genre`, `date`) VALUES (12, 'Keller Williams', 'Blossom Music Center', 'Cuyahoga Falls', 'OH', 'Rock', '07/17/2005');
INSERT INTO `concert` (`id`, `artist`, `venue`, `city`, `state`, `genre`, `date`) VALUES (13, 'James Brown', 'Bonnaroo', 'Manchester', 'TN', 'Funk', '06/15/2003');
INSERT INTO `concert` (`id`, `artist`, `venue`, `city`, `state`, `genre`, `date`) VALUES (14, 'Phish', 'Rosemont Horizon Center', 'Rosemont', 'IL', 'Jam Band', '09/22/2000');
INSERT INTO `concert` (`id`, `artist`, `venue`, `city`, `state`, `genre`, `date`) VALUES (15, 'Moe', 'Red Rocks', 'Morrison', 'CO', 'Rock', '06/01/2019');
INSERT INTO `concert` (`id`, `artist`, `venue`, `city`, `state`, `genre`, `date`) VALUES (16, 'Umphrey\'s McGee', 'Red Rocks', 'Morrison', 'CO', 'Progressive Rock', '06/21/2019');
INSERT INTO `concert` (`id`, `artist`, `venue`, `city`, `state`, `genre`, `date`) VALUES (17, 'Umphrey\'s McGee', 'Red Rocks', 'Morrison', 'CO', 'Progressive Rock', '06/22/2019');
INSERT INTO `concert` (`id`, `artist`, `venue`, `city`, `state`, `genre`, `date`) VALUES (18, 'Umphrey\'s McGee', 'Red Rocks', 'Morrison', 'CO', 'Progressive Rock', '06/23/2019');
INSERT INTO `concert` (`id`, `artist`, `venue`, `city`, `state`, `genre`, `date`) VALUES (19, 'SoundGarden', 'Lollapalooza', 'Noblesville', 'IN', 'Alternative', '07/02/1996');
INSERT INTO `concert` (`id`, `artist`, `venue`, `city`, `state`, `genre`, `date`) VALUES (20, 'Weezer', 'Deer Creek', 'Noblesville', 'IN', 'Alternative', '08/12/1995');
INSERT INTO `concert` (`id`, `artist`, `venue`, `city`, `state`, `genre`, `date`) VALUES (21, 'Allman Brothers', 'Beacon Theater', 'New York', 'NY', 'Rock', '03/0/2014');
INSERT INTO `concert` (`id`, `artist`, `venue`, `city`, `state`, `genre`, `date`) VALUES (22, 'Alt-J', 'Bayou Place', 'Houston', 'TX', 'Alternative', '09/26/2013');
INSERT INTO `concert` (`id`, `artist`, `venue`, `city`, `state`, `genre`, `date`) VALUES (23, 'Galactic', 'Warehouse Live', 'Houston', 'TX', 'Rock', '10/29/2011');
INSERT INTO `concert` (`id`, `artist`, `venue`, `city`, `state`, `genre`, `date`) VALUES (24, 'Candlebox', 'Warehouse Live', 'Houston', 'TX', 'Alternative', '10/07/2011');
INSERT INTO `concert` (`id`, `artist`, `venue`, `city`, `state`, `genre`, `date`) VALUES (25, 'George Clinton', 'Arena Theater', 'Houston', 'TX', 'Funk', '04/08/2011');
INSERT INTO `concert` (`id`, `artist`, `venue`, `city`, `state`, `genre`, `date`) VALUES (26, 'Blues Traveler', 'Austin City Limits', 'Austin', 'TX', 'Rock', '10/08/2010');
INSERT INTO `concert` (`id`, `artist`, `venue`, `city`, `state`, `genre`, `date`) VALUES (27, 'Bush', 'Deer Creek', 'Noblesville', 'IN', 'Alternative', '08/12/1995');
INSERT INTO `concert` (`id`, `artist`, `venue`, `city`, `state`, `genre`, `date`) VALUES (28, 'Phish', 'Dicks\'s Sporting Goods Park', 'Commerce City', 'CO', 'Jam Band', '08/30/2109');
INSERT INTO `concert` (`id`, `artist`, `venue`, `city`, `state`, `genre`, `date`) VALUES (29, 'Phish', 'Dicks\'s Sporting Goods Park', 'Commerce City', 'CO', 'Jam Band', '08/31/2109');
INSERT INTO `concert` (`id`, `artist`, `venue`, `city`, `state`, `genre`, `date`) VALUES (30, 'Phish', 'Dicks\'s Sporting Goods Park', 'Commerce City', 'CO', 'Jam Band', '09/01/2109');
INSERT INTO `concert` (`id`, `artist`, `venue`, `city`, `state`, `genre`, `date`) VALUES (31, 'Trey Anastasio Band', 'Mission Ballroom', 'Denver', 'CO', 'Rock', '08/09/2019');
INSERT INTO `concert` (`id`, `artist`, `venue`, `city`, `state`, `genre`, `date`) VALUES (32, 'Trey Anastasio Band', 'Mission Ballroom', 'Denver', 'CO', 'Rock', '08/10/2019');
INSERT INTO `concert` (`id`, `artist`, `venue`, `city`, `state`, `genre`, `date`) VALUES (33, 'Phish', 'Dicks\'s Sporting Goods Park', 'Commerce City', 'CO', 'Jam Band', '08/31/2108');
INSERT INTO `concert` (`id`, `artist`, `venue`, `city`, `state`, `genre`, `date`) VALUES (34, 'Umphrey\'s McGee', 'The Fillmore Denver', 'Denver', 'CO', 'Progressive Rock', '12/30/2017');
INSERT INTO `concert` (`id`, `artist`, `venue`, `city`, `state`, `genre`, `date`) VALUES (35, 'Umphrey\'s McGee', 'The Fillmore Denver', 'Denver', 'CO', 'Progressive Rock', '12/31/2017');
INSERT INTO `concert` (`id`, `artist`, `venue`, `city`, `state`, `genre`, `date`) VALUES (36, 'Umphrey\'s McGee', 'Riverside Theater', 'Milwaukee', 'WI', 'Progressive Rock', '10/31/2013');
INSERT INTO `concert` (`id`, `artist`, `venue`, `city`, `state`, `genre`, `date`) VALUES (37, 'Umphrey\'s McGee', 'Riverside Theater', 'Milwaukee', 'WI', 'Progressive Rock', '11/01/2013');
INSERT INTO `concert` (`id`, `artist`, `venue`, `city`, `state`, `genre`, `date`) VALUES (38, 'Umphrey\'s McGee', 'Riverside Theater', 'Milwaukee', 'WI', 'Progressive Rock', '11/02/2013');
INSERT INTO `concert` (`id`, `artist`, `venue`, `city`, `state`, `genre`, `date`) VALUES (39, 'Tedeschi Trucks Band', 'House of Blues', 'Houston', 'TX', 'Rock', '07/12/2013');
INSERT INTO `concert` (`id`, `artist`, `venue`, `city`, `state`, `genre`, `date`) VALUES (40, 'Dave Matthews Band', 'Deer Creek', 'Noblesville', 'IN', 'Rock', '06/13/2005');

COMMIT;
