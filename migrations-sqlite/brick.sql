DROP DATABASE IF EXISTS legoStore;

CREATE DATABASE legoStore;

/c legoStore;

CREATE TABLE Legos (ProductID SERIAL PRIMARY KEY, ProductName VARCHAR(30), 
Colour VARCHAR(30), ProductPrice INT, ProductImage VARCHAR(30), Quantity INT, typeOfLego VARCHAR(30));

INSERT INTO Legos(ProductID, ProductName, Colour, ProductPrice, ProductImage, Quantity, typeOfLego) 
VALUES (1, 'Red 2 by 4 brick', 'red', 0.30, 'red2by4.jpg', 40, 'brick'),
(2, 'Blue 2 by 4 brick', 'blue', 0.40, 'blue2by4.jpg', 30, 'brick'),
(3, 'Green 2 by 4 brick', 'green', 0.20, 'green2by4.jpg', 300, 'brick'),
(4, 'Yellow 2 by 4 brick', 'yellow', 0.50, 'yellow2by4.jpg', 10, 'brick'),
(5, 'Green 4 by 4 brick', 'green', 0.60, 'green4by4.jpg', 20, 'brick'),
();



