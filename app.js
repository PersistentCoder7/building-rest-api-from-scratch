//Import the express application
const express = require('express');
const bodyParser = require('body-parser');
//Create the express application object
const app = express();
const routes = require('./routes/index');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//setup a custom middleware
app.use((req,res,next)=>{
 console.log('The custom middleware was fired');
 next();
});

app.use('/api', routes);

//Map the default route to return a default string
app.get('/', (req,res)=>{
    res.send('Hello World');
});

//Create a mapping for the jobs endpoint


//Create a post route to add the data to the jobs array


//Listen on port 3000
app.listen(3000,()=> {
    console.log('Application is listening on port 3000');
})

