CREATE DATABASE IF NOT EXISTS `vault`;

CREATE TABLE IF NOT EXISTS `vault`.`files` (
  `id` VARCHAR(36) NOT NULL,
  `content` LONGTEXT NOT NULL,
  `name` LONGTEXT NOT NULL,
  `size` INT NOT NULL,
  `content_type` LONGTEXT NOT NULL,
  PRIMARY KEY (`id`));