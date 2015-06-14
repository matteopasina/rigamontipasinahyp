-- phpMyAdmin SQL Dump
-- version 4.1.7
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Giu 14, 2015 alle 12:54
-- Versione del server: 5.1.71-community-log
-- PHP Version: 5.3.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `my_grandepalestra`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `CarouselImages`
--

CREATE TABLE IF NOT EXISTS `CarouselImages` (
  `IDImg` int(11) NOT NULL AUTO_INCREMENT,
  `Imgpath` varchar(100) NOT NULL,
  `Text` varchar(100) NOT NULL,
  PRIMARY KEY (`IDImg`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dump dei dati per la tabella `CarouselImages`
--

INSERT INTO `CarouselImages` (`IDImg`, `Imgpath`, `Text`) VALUES
(1, 'http://grandepalestra.altervista.org/img/carousel1.jpg', 'Fantastic courses!'),
(2, 'http://grandepalestra.altervista.org/img/carousel2.jpg', 'Advanced equipment!'),
(3, 'http://grandepalestra.altervista.org/img/carousel3.jpg', 'FUN!');

-- --------------------------------------------------------

--
-- Struttura della tabella `Course`
--

CREATE TABLE IF NOT EXISTS `Course` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `IDCourseCategory` int(11) NOT NULL,
  `Nome` varchar(20) NOT NULL,
  `Livello` varchar(50) NOT NULL,
  `Descrizione` varchar(2000) NOT NULL,
  `AgeRange` varchar(20) NOT NULL,
  `Popularity` varchar(50) NOT NULL,
  `Room` varchar(20) NOT NULL,
  `Img` varchar(200) NOT NULL,
  `Dettaglio` varchar(6000) DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `IDCourseCategory` (`IDCourseCategory`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- Dump dei dati per la tabella `Course`
--

INSERT INTO `Course` (`ID`, `IDCourseCategory`, `Nome`, `Livello`, `Descrizione`, `AgeRange`, `Popularity`, `Room`, `Img`, `Dettaglio`) VALUES
(1, 1, 'Aerobics', 'Basic', 'Aerobics is a form of physical exercise that combines rhythmic aerobic exercise with stretching and strength training routines with the goal of improving all elements of fitness (flexibility, muscular strength, and cardio-vascular fitness). It is usually performed to music and may be practiced in a group setting led by an instructor (fitness professional), although it can be done solo and without musical accompaniment.', '3-99 years', 'High', 'Pilates room', 'http://grandepalestra.altervista.org/img/aerobics.jpg', 'Aerobics is very cool.'),
(2, 2, 'Yoga', 'Advanced', 'Yoga is not just about working out, it''s about a healthy lifestyle. The practice of yoga allows students to be still in a world consumed with chaos. Peace and tranquility achieved through focused training appeals to everyone.', '16-50', 'Medium', 'Yoga room', 'http://grandepalestra.altervista.org/img/yogaclass.jpg', 'Yoga advanced is not for weak hearts.'),
(3, 2, 'Yoga soft', 'Basic', 'Yoga is not just about working out, it''s about a healthy lifestyle. The practice of yoga allows students to be still in a world consumed with chaos. Peace and tranquility achieved through focused training appeals to everyone.', '10-70', 'Medium', 'Yoga Room', 'http://grandepalestra.altervista.org/img/yogaclass.jpg', 'Yoga''s deep breathing and meditation practices help foster an inner shift from to-do lists, kids and spouse''s needs, financial concerns and relational struggles to something a little bit bigger than the issues you face. Yoga helps relieve stress and unclutter the mind, and helps you get more focused.\r\nOur yoga course is held by our amazing instructor Jane Fonda! Don''t miss the opportunity to learn this awesome oriental art!\r\nIf you want to participate you must go in our Yoga room. Here are the instructions to get there!\r\nThe yoga course is held three times a week from 9:00 to 10:00 on Monday, from 10:00 to 11:00 on Wednesday and from 14:00 to 15:00 on Saturday.'),
(4, 3, 'Swimming', 'Basic', 'Swimming is a water based team or individual sport. Competitive swimming is one of the most popular Olympic sports, with events in freestyle, backstroke, breaststroke, and butterfly. Recreational swimming is a popular low-impact form of exercise.', '8-60', 'High', 'Swimming pool', 'http://grandepalestra.altervista.org/img/pool.jpg', 'Swim is amazing.'),
(5, 3, 'Diving', 'Medium', 'Diving is one of the most popular Olympic sports with spectators. Competitors possess many of the same characteristics as gymnasts and dancers, including strength, flexibility, kinaesthetic judgment and air awareness. Some professional divers were originally gymnasts or dancers as both the sports have similar characteristics to diving.', '13-55', 'Medium', 'Swimming pool', 'http://grandepalestra.altervista.org/img/Diving.jpg', 'Most diving competitions consist of three disciplines: 1 m and 3 m springboards, and the platform. Competitive athletes are divided by gender, and often by age group. In platform events, competitors are allowed to perform their dives on either the five, seven and a half (generally just called seven), nine, or ten meter towers. In major diving meets, including the Olympic Games and the World Championships, platform diving is from the 10 meter height.');

-- --------------------------------------------------------

--
-- Struttura della tabella `CourseCategory`
--

CREATE TABLE IF NOT EXISTS `CourseCategory` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Nome` varchar(50) DEFAULT NULL,
  `Descrizione` varchar(2000) DEFAULT NULL,
  `Icona` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dump dei dati per la tabella `CourseCategory`
--

INSERT INTO `CourseCategory` (`ID`, `Nome`, `Descrizione`, `Icona`) VALUES
(1, 'Aerobic', 'All aerobic courses', 'http://grandepalestra.altervista.org/img/aerobicIcon.png'),
(2, 'Yoga', 'All yoga courses', 'http://grandepalestra.altervista.org/img/yoga-logo.gif'),
(3, 'Pool Courses', 'All pool courses', 'http://grandepalestra.altervista.org/img/swimlogo.png');

-- --------------------------------------------------------

--
-- Struttura della tabella `ImageInstructor`
--

CREATE TABLE IF NOT EXISTS `ImageInstructor` (
  `IDInstructor` int(11) NOT NULL DEFAULT '0',
  `prg` int(11) NOT NULL,
  `pathImage` varchar(200) NOT NULL,
  PRIMARY KEY (`IDInstructor`,`prg`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `ImageInstructor`
--

INSERT INTO `ImageInstructor` (`IDInstructor`, `prg`, `pathImage`) VALUES
(1, 1, 'http://www.grandepalestra.altervista.org/img/AliceInstructor.jpg'),
(1, 2, 'http://www.gandepalestra.altervista.org/img/AliceInstructor.jpg');

-- --------------------------------------------------------

--
-- Struttura della tabella `Instructor`
--

CREATE TABLE IF NOT EXISTS `Instructor` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(60) NOT NULL,
  `Description` varchar(2000) NOT NULL,
  `Specializzazione` varchar(100) NOT NULL,
  `Presentazione` varchar(1000) NOT NULL,
  `NickName` varchar(60) NOT NULL,
  `pathImageLogo` varchar(200) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

--
-- Dump dei dati per la tabella `Instructor`
--

INSERT INTO `Instructor` (`ID`, `Name`, `Description`, `Specializzazione`, `Presentazione`, `NickName`, `pathImageLogo`) VALUES
(1, 'Matteo Pasina', 'Pasina was a college football player for the University of Miami, winning a national championship on the 1991 Miami Hurricanes football team. He later played for the Calgary Stampeders in the Canadian Football League, and was cut two months into the 1995 season.', 'PILATES', '"Hi i am Matteo, no pain no gain!"', 'MatPasa', 'http://www.grandepalestra.altervista.org/img/istruttore1.jpg'),
(3, 'Alice Rigamonti', 'Alice is one of us best instructors, she has lot of skills and won many awards.', 'GAG', '"Hi i am alice and i am going to teach you how to stay fit!"', 'Ali', 'http://www.grandepalestra.altervista.org/img/istruttrice1.jpg'),
(4, 'Robert James Fisher', 'At age 13 Fischer won a "brilliancy" that became known as The Game of the Century.Starting at age 14, Fischer played in eight United States Championships, winning each by at least a one point margin. At age 15, Fischer became both the youngest grandmaster up to that time and the youngest candidate for the World Championship. At age 20, Fischer won the 1963-64 U.S. Championship with 11-11, the only perfect score in the history of the tournament. Fischer s My 60 Memorable Games (1969) remains a revered work in chess literature.', 'Chess', '"Hello, e4."', 'Bobby', 'http://grandepalestra.altervista.org/img/istruttore2.jpg'),
(5, 'Jennifer Dumpling', 'Jennifer was born on February 11, 1989, in Sherman Oaks, Los Angeles, California to actors John Aniston and Nancy Dow. Her father is Greek and a native of Crete, while her mother was born in New York City. One of her maternal great-grandfathers was an Italian immigrant and her mother''s other ancestry is English, Scottish, Irish and a small amount of Greek. Dumpling has two half-brothers, John Melick, her maternal older half-brother, and Alex Dumpling, her younger paternal half-brother.Dumpling''s godfather was actor Telly Savalas, one of her father''s best friends.', 'Pilates', '"I love to gym and gymming"', 'Jennie', 'http://grandepalestra.altervista.org/img/instruttrice2.png'),
(6, 'Tania Cagnotto', 'She won her first medal at age 14. Since then, she has won several other championships in Europe and the USA. A participant in the 2004 Summer Olympics, in the European Tournament in Madrid, she was the gold medallist in the 10-meter platform event and won a bronze medal for her performance in the 3-meter springboard competition. After a disappointing performance in the 10-meter platform final round at the Montreal 2005 World Championships, she won the bronze medal in the 3-meter springboard event. Cagnotto won a third consecutive bronze medal in the 3-meter springboard at the Rome 2009 World Championships, after a 4th place in the 1-meter springboard event. Together with Francesca Dallape'', she also won a silver medal in the 3-meter springboard synchronized event.', 'Diving', 'Hi I am Tania and I am here at Big Gym to teach you how to dive!', 'Tania', 'http://grandepalestra.altervista.org/img/cagnotto.jpg');

-- --------------------------------------------------------

--
-- Struttura della tabella `Teaches`
--

CREATE TABLE IF NOT EXISTS `Teaches` (
  `IDCourse` int(11) NOT NULL DEFAULT '0',
  `IDInstructor` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`IDCourse`,`IDInstructor`),
  KEY `IDInstructor` (`IDInstructor`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `Teaches`
--

INSERT INTO `Teaches` (`IDCourse`, `IDInstructor`) VALUES
(1, 1),
(1, 3),
(2, 1),
(2, 5),
(3, 4),
(4, 5),
(5, 6);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
