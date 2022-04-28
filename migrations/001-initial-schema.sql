-- CREATE DATABASE legoStore;

-- Up

CREATE TABLE Legos (ProductId VARCHAR(7), ProductName VARCHAR(30), 
Colour VARCHAR(30), ProductPrice INT, ProductImage VARCHAR(30), Quantity INT, typeOfLego VARCHAR(30), count INT(1));

INSERT INTO Legos(ProductId, ProductName, Colour, ProductPrice, ProductImage, Quantity, typeOfLego, count)
VALUES ('brk1', 'Red 2 by 4', 'red', 0.3, './img/red2by4.jpg', 40, 'brick', 0),
('brk2', 'Blue 2 by 4', 'blue', 0.4, './img/blue2by4.jpg', 20, 'brick', 0),
('brk3', 'Yellow 2 by 4', 'yellow', 0.2, './img/yellow2by4.jpg', 20, 'brick', 0),
('brk4', 'Green 2 by 4', 'green', 0.2, './img/green2by4.jpg', 300, 'brick', 0),
('brk5', 'Black 2 by 4', 'black', 0.2, './img/black2by4.jpg', 91, 'brick', 0),
('brk6', 'Green 2 by 4', 'green', 0.1, './img/green2by4c.jpg', 51, 'brick', 0),
('brk7', 'Red 2 by 1', 'red', 0.05, './img/red2by1.jpg', 29, 'brick', 0),
('brk8', 'Mixed Crate', 'All', 4000, './img/legoCrate.jpeg', 10, 'set', 0),
('brk9', 'Bonsai!', 'All', 1500,'./img/bonsai.png', 4, 'set', 0),
('brk10', 'Lego master set', 'All', 0, './img/house.png', 20, 'set', 0),
('brk11', 'The education bundle', 'All', 40,'./img/educationBundle.jpg', 20, 'set', 0);

-- Down

DROP TABLE Legos;

-- DROP DATABASE IF EXISTS legoStore;
