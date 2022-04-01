DROP DATABASE IF EXISTS legoStore;

CREATE DATABASE LegoStore;

\c LegoStore;

CREATE TABLE Legos (ProductID SERIAL PRIMARY KEY, ProductName VARCHAR(30), 
Colour VARCHAR(30), ProductPrice INT, ProductImage VARCHAR(30), Quantity INT, typeOfLego VARCHAR(30));

INSERT INTO Legos(ProductID, ProductName, Colour, ProductPrice, ProductImage, Quantity, typeOfLego) 
VALUES (1, 'RedBrick', 'Red', 10, 'redbrick.jpg', 10, 'Brick'),(2, 'Yellow', 20, 'yellowbrick.jpg', 11);
