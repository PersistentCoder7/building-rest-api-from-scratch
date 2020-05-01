//Import the express application
const express = require('express');
const bodyParser = require('body-parser');
//Create the express application object
const app = express();
const routes = require('./routes/index');

//Import mongoose module
const mongoose = require('mongoose');
//load the application configuration
const config = require('./config/config.json');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//setup a custom middleware
app.use((req,res,next)=>{
 console.log('The custom middleware was fired');
 next();
});

//Create a mapping for the jobs endpoint
//Create a post route to add the data to the jobs array (Mapped via routers)
app.use('/api', routes);

//Map the default route to return a default string
app.get('/', (req,res)=>{
    res.send('Hello World');
});

//Connect to mongodb
mongoose.connect(config.MONGO_URI, ()=>{console.log('Connected to mongodb....')});
//Show message stating that the user is connected to mongodb.

//Listen on port 3000
app.listen(3000,()=> {
    console.log('Application is listening on port 3000');
})

