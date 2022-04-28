#

## About the Project

What has been made? The project is a simple web application that allows you to buy bricks. It can be filtered via colour and allows you to login as an administator. It uses a database however can easily be switched over to the db-memory which holds an array of objects. You can also view details of the product.

## Future works


## Running the project

The page works with a server hosted on port 8080. Just use your terminal and type:

```console
cd legoWorkStation
```

```console
npm start
```

Then on your search engine type:

```console
localhost:8080
```

## Testing the project

I have used testing to allow for better maintainability.

```console
npm run test.only
```

## Built using

* HTML and CSS
* JavaScript
* NodeJS
* ExpressJS
* Jest
* SQLite
* JSON

## Assumptions

If the user is logged in they are considered an "admin" user and will have access to the admin controls which will allow them to add their own bricks.

## Explanation on the project

I decided to use a database called SQLite which leads to more maintainable code as i initially started off with an array of objects. However, an array of objects can not handle stock management very well. Therefore i had chosen to switch. I had stored my products in a lego database which holds the properties of the old arrays.

I had set up jest testing and this will be apart of my future works to add unit tests in.

I have been able to use local storage in order to store the users bricks. It has been stored in an array of objects in the local storage set-up. I also set up a counter so it shows how many items are in the basket.

## Paradigm
