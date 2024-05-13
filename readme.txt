app.get('/', (req, res) => {

    const locals = {
        title: 'NodeJs',
        description: 'Free NodeJS User Management System'
    }
    res.render('index', { locals });
});

//username and password
kg830574
wvQZMVGTviE7zIH5

A query in a database is a request for information or data from a database.

The try/catch statement is one of the most important error handling features in JavaScript. It allows you to define a block of code to be tested for errors while it is being executed. If an error occurs, the code in the catch block is executed. This allows you to handle the error gracefully and prevent your program from crashing.


GET and POST
GET is for fetching data, appending parameters in the URL, ideal for searches. POST, used for updates, sends data securely in the request body, perfect for forms.


Express.urlencoded() is a built-in middleware function in Express.js that parses incoming requests with URL-encoded payloads.
  //With strictQuery = false, Mongoose will not strip out unknown fields from the query filter. This can be useful if you need to query for fields that are not defined in your schema, such as when you are using a dynamic schema