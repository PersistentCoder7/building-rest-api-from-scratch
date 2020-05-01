# NodeJs: Building REST APIs from scratch

Sourced from Udemy: [NodeJS: Building REST APIs from scratch](https://udemy.com/course/draft/1344260/learn/lecture/8120908#overview)

## Install the following

* NodeJS
* MongoDB
* RoboMongo
* Postman

## Setup Express Server

1. `npm init --yes`
2. `npm i express@4.16.1 --save`
3. `touch app.js` creates app.js
4. Add the following code to app.js

    ```javascript
    //Import the express application
    const express = require('express');
    //Create the express application object
    const app = express();
    //Map the default route to return a default string
    app.get('/', (req,res)=>{
        res.send('Hello World');
    })
    //Listen on port 3000
    app.listen(3000,()=> {
        console.log('Application is listening on port 3000');
    })
    ```

    5. Add a 'jobs' endpoint to return an array

    ```javascript
    //Import the express application
    const express = require('express');
    //Create the express application object
    const app = express();
    //Map the default route to return a default string
    app.get('/', (req,res)=>{
        res.send('Hello World');
    });

    //Jobs array
    let jobs = [
    {"id": 1, "title":"beatae est blanditiis"
    , "description": "Quos ut animi voluptatibus veniam.", "duration": 3},
    {"id": 1, "title":"ab cum rem"
    , "description": "Iusto cupiditate nemo voluptas dolorem deserunt suscipit commodi qui.", "duration": 4},
    {"id": 1, "title":"in aut sed"
    , "description": "Officia molestiae et qui.", "duration": 6}
    ]
    //Create a mapping for the jobs endpoint
    app.get('/jobs', (req, res) => {
        res.setHeader('content-type', 'text/json');
        res.json(jobs).end();
    });
    //Listen on port 3000
    app.listen(3000,()=> {
        console.log('Application is listening on port 3000');
    })
    ```

5. Install the body-parser and configure it as the custom middle ware.

    ```javascript
    //Import the express application
    const express = require('express');
    const bodyParser = require('body-parser');
    //Create the express application object
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    //Map the default route to return a default string
    app.get('/', (req,res)=>{
        res.send('Hello World');
    });

    //Jobs array
    let jobs = [
    {"id": 1, "title":"beatae est blanditiis"
    , "description": "Quos ut animi voluptatibus veniam.", "duration": 3},
    {"id": 1, "title":"ab cum rem"
    , "description": "Iusto cupiditate nemo voluptas dolorem deserunt suscipit commodi qui.", "duration": 4},
    {"id": 1, "title":"in aut sed"
    , "description": "Officia molestiae et qui.", "duration": 6}
    ]
    //Create a mapping for the jobs endpoint
    app.get('/jobs', (req, res) => {
        res.setHeader('content-type', 'text/json');
        res.json(jobs).end();
    });

    //Create a post route to add the data to the jobs array
    app.post('/jobs', (req, res) => {
    console.log(req.body);


        jobs.push({
            "id":req.body.id,
            "title":req.body.title,
            "description": req.body.description,
            "duration": req.body.duration
        });

        res.json(jobs).end();
    });
    //Listen on port 3000
    app.listen(3000,()=> {
        console.log('Application is listening on port 3000');
    })
    ```

6. Perform code refactorings:

    * Create a `config` directory and move the `jobs` array.
    * Create a controller directory and move the `get` and `post` methods under that directory.
    * use `module.exports` method to export the jobs array and the controller methods.

7. Perform additional refactorings:

    * Create the `routes` directory and then create the `index.js` under it.
    * Create the `job.routes.js` under it and map the router actions to the `jobs.controller.js` actions.

    * Configure `app.js` router mapping by configuring the middleware to connect with the routes defined earlier.  

6. Added the functionality to add, update and delete jobs based on the routes configured. Uses the MongoDB to persist the jobs data. Also included a simple configuration file.

7. Used nodemon from rapid application development.
