-- /c LegoStore;

CREATE TABLE orderLego(orderID SERIAL PRIMARY KEY, legoId INT, orderDate DATE, orderStatus VARCHAR(30), orderTotal INT);

INSERT INTO orderLego(orderID, legoId, orderDate, orderStatus, orderTotal)VALUES
(1, 1, '2020-01-01', 'pending', 0.40),
(2, 2, '2020-01-02', 'pending', 0.20),
(3, 4, '2020-01-03', 'pending', 0.50),
(4, 3, '2020-01-04', 'pending', 0.60);

