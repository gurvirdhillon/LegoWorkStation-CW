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

## Assumptions

If the user is logged in they are considered an "admin" user and will have access to the admin controls.


