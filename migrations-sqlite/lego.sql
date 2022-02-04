DROP DATABASE IF EXISTS legoStore;

CREATE DATABASE LegoStore;

/c LegoStore;

CREATE TABLE legoDetails(
    legoName VARCHAR(30), 
    colour varchar(15),
    LegoSet BINARY, -- Yes or No
    Price DECIMAL

);

CREATE TABLE theme(
    themeID char(10),
    theme varchar(30)
);

CREATE TABLE part(
    partNumber INT(4),
    partName varchar(30),
);
