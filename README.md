# Express.js_API
For my first RESTful API I used Node/Express, the nodemon package to save time on restarting the server,
Postman to test my endpoints, Handlebars as the templating engine and some basic html and css.


## The MVC pattern

The MVC design pattern is a popular choice among developers using Express for structuring their applications. In simplified terms:

The Controller processes the user's request and then manipulates the model accordingly.
For example: interacting with the Model to perform operations on the data, and sending the appropriate response.

The Model is a representation of how the Express application sees the data.
It involves defining data models and handling interactions with the database.

The View is how the data from the model is being presented back to the user. This is where React might step-in and take control.

A simple diagram of the model:


![Alt text](Images/mvc-framework.png)

MVC is meant to simplify our code and make it easier to read, update and improve, although Express is 
not opinionated and doesn't enforce the MVC structure.

## Testing with Postman

It's worth noting that there's always a slight difference between the request time
that shows on our log inside the terminal and the log inside Postman. The reason is that 
it simply takes more time for the response to make it back all the way to Postman.

![Alt text](<Images/Screenshot from 2024-01-09 20-14-44.png>)

In the shot above I was testing whether the endpoint was serving the static image content.

## REST design and principles

![Alt text](<Images/Screenshot from 2024-01-11 16-42-44.png>)
