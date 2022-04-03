DROP DATABASE IF EXISTS legoStore;

CREATE DATABASE LegoStore;

\c LegoStore;

CREATE TABLE Legos (ProductID SERIAL PRIMARY KEY, ProductName VARCHAR(30), 
Colour VARCHAR(30), ProductPrice INT, ProductImage VARCHAR(30), Quantity INT, typeOfLego VARCHAR(30));

INSERT INTO Legos(ProductID, ProductName, Colour, ProductPrice, ProductImage, Quantity, typeOfLego) 
VALUES (brk1, "red 2 by 4 brick", "red", 0.30, "red2by4.jpg", 40, "brick"),
(brk2, "blue 2 by 4 brick", "blue", 0.40, "blue2by4.jpg", 30, "brick"),
(brk3, "green 2 by 4 brick", "green", 0.20, "green2by4.jpg", 300, "brick"),
(brk4, "yellow 2 by 4 brick", "yellow", 0.50, "yellow2by4.jpg", 10, "brick"),
(brk5, "Green 4 by 4 brick", "green", 0.60, "green4by4.jpg", 20, "brick");