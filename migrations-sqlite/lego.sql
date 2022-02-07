DROP DATABASE IF EXISTS legoStore;

CREATE DATABASE LegoStore;

\c LegoStore;

CREATE TABLE displayLego(
    id CHAR(5) NOT NULL UNIQUE,
    legoName VARCHAR(20) PRIMARY KEY,
    -- colour may be a seperate table
    x char(1),
    y CHAR(1),
    img text
    -- should image be a seperate table?
);

CREATE TABLE colour( 
    colour VARCHAR(30),
    -- can have a long name like burlywood
    FOREIGN KEY (legoName) REFERENCES displayLego(legoName),
    ColCat CHAR(2)

);

    -- Red = R 
    -- Yellow = Y
    -- Blue = B
    -- Green = G
    -- Black = Bk
    -- White = W
    -- Orange = O
    -- Brown = BR


CREATE TABLE theme(
    themeID char(10),
    ThemeName varchar(30)
);

CREATE TABLE part(
    partNumber INT,
    partName varchar(30)
);
