# LegoWorkStation

## About the project

This is a shop which allows you to buy various different type of bricks and parts. You can add products to cart and checkout using local storage. I had used auth0 for authentication and this will act as admin access for its users when trying to add products to the page.

## How does the project run?

Presuming you have downloaded the npm packages via "npm i". The project runs on ```npm start```. Then switch over to your browser and type in localhost:8080 to access the page.
Testing which is going to be a part of my future works runs on ```npm run test.only``` and the output is on the command-line. However the current test does not pass due to the switch in state(i had switched my data from an array of objects to a database).
This had lead me to develop code that was more maintainable and allows me to gain more capabilities in storing data. It also does not limit me to the storage capacity of my computer.

## Images

The images we're extracted from rebrickable(link will be provided down below) and has been stored on client side as a folder called "img".

Rebrickable | Rebrickable - Build with LEGO. Rebrickable.com. Retrieved 29 April 2022, from https://rebrickable.com/.

## Built using

* JavaScript
* NodeJS
* ExpressJS
* Jest
* SQLite
* JSON

## Explanation on design

I had decided to store each brick as a single items as the user can physically see each brick before purchase and know whether they have the right amount. I had ordered the data so individual bricks are first and the sets are last however the filters can handle what is visible to the user. I had used SQLite to handle stock management as JSON data structures are not a very good method for storing data for maintainability. I had chosen for the user to hear a "coin-drop" sound so it feels like the user has brought something as well as giving a confirmation page.
I had also created a view details page which shows the details of a specific brick to the user. This allows the user to see if they would like to buy the brick.

## The process

First i had started off with an array of object that was stored in my client. I had then come to the realisation that i must store it in server side code as the user should not be able to have access to these files. I had then transitioned the code over to db-memory.mjs. Once i had been able to display all my items on the array of objects i had decided to switch to the database in order to make my data items maintainable.
