-- CREATE DATABASE legoStore;

-- Up

CREATE TABLE Legos (ProductID SERIAL PRIMARY KEY, ProductName VARCHAR(30), 
Colour VARCHAR(30), ProductPrice INT, ProductImage VARCHAR(30), Quantity INT, typeOfLego VARCHAR(30));

INSERT INTO Legos(ProductID, ProductName, Colour, ProductPrice, ProductImage, Quantity, typeOfLego)
VALUES (001, 'Red 2 by 4', 'red', 0.3, 'img/red2by4.jpg', 40, 'brick'),
(002, 'Blue 2 by 4', 'blue', 0.4, 'img/blue2by4.jpg', 20, 'brick'),
(003, 'Yellow 2 by 4', 'yellow', 0.2, 'img/yellow2by4.jpg', 20, 'brick'),
(004, 'Green 2 by 4', 'green', 0.2, 'img/green2by4.jpg', 300, 'brick'),
(005, 'Black 2 by 4', 'black', 0.2, 'img/black2by4.jpg', 91, 'brick'),
(006, 'Green 2 by 4', 'green', 0.1, 'img/green2by4c.jpg', 51, 'brick'),
(007, 'Red 2 by 1', 'red', 0.05, 'img/red2by1.jpg', 29, 'brick'),
(008, 'Mixed Crate', 'All', 4000, 'img/legoCrate.jpeg', 10, 'set'),
(009, 'Bonsai!', 'All', 1500,'img/bonsai.png', 4, 'set'),
(010, 'Lego master set', 'All', 10, 'img/house.png', 2000, 'set');

-- Down

DROP TABLE Legos;

-- DROP DATABASE IF EXISTS legoStore;
