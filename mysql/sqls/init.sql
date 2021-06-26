drop database if exists myapp;

create database myapp;
use myapp;

CREATE TABLE contents (
    id INTEGER AUTO_INCREMENT, 
    value TEXT, 
    PRIMARY KEY (id)
);