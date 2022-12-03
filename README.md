# Book-Store-using-MySQL

Book-Store-using-MySQL

Database is connected to local server with localhost/5000;

Databse name is Book
Which contains 3 tables - Book, User and Order

BOOK schema  -
CREATE TABLE IF NOT EXISTS `mydb`.`Book` (
  `id` INT NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  `author` VARCHAR(255) NOT NULL,
  `description` VARCHAR(255) NULL,
  `price` INT NOT NULL,
  `available` BOOLEAN NOT NULL,
  `image` VARCHAR(1000) NOT NULL,  //URL of Image
  PRIMARY KEY (`id`))


User Schema 
CREATE TABLE IF NOT EXISTS `mydb`.`User` (
  `name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(1000) NOT NULL,   //encrypted form
  `id` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
  
 Order Schema
 CREATE TABLE IF NOT EXISTS `mydb`.`Order` (
  `name` VARCHAR(255) NOT NULL,
  `book name` VARCHAR(255) NOT NULL,
  `password` VARCHAR(1000) NOT NULL,
  `number` INT NOT NULL,
  PRIMARY KEY (`number`))






