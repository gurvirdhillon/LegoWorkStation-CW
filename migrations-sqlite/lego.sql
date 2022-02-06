DROP DATABASE IF EXISTS legoStore;

CREATE DATABASE LegoStore;

\c LegoStore;

CREATE TABLE displayLego(
    id CHAR(5),
    legoName VARCHAR(20),
    colour VARCHAR(10),
    x char(1),
    y CHAR(1),
    img text
);


CREATE TABLE theme(
    themeID char(10),
    ThemeName varchar(30)
);

CREATE TABLE part(
    partNumber INT,
    partName varchar(30)
);
