//const jobs = require('../config/jobs');

//Import the job model from the mongo directory
const JobModel = require('../models/job.model');

module.exports = {
    create(req,res) {
        
    let title=req.body.title;
    let description= req.body.description;
    let duration= req.body.duration;
    
    let job=({
        //"id":req.body.id,
        title,
        description,
        duration
    });
    
    //make sure title is provided by the user
    //if title is missing then send badRequest error with 400 status
    if (!title){
        return res.status(400).send({err:'title is required property'});
    }

    //create a new instance of Job model
    //pass the job object in constructor function
    const newJob = new JobModel(job);
    //Save the job
    newJob.save(err => {
        if (err) {
            return res.status(500).send({'err': 'Mongodb is unable to persist'});
        }
    });

    //when job is saved successfully then send the new job
    //to the server with 200 status code.
    return res.status(200).json(newJob);
    },
    findAll(req,res) {
        res.setHeader('content-type', 'text/json');
        //call the find method of Job Model
        JobModel.find({}, (err,jobs)=>{
            if (err) {
                return res.send(404).send(err);
            }
            return res.status(200).json(jobs).end();
        });
        //if error occurred send error with 404 status code
        //return all the jobs to the server with 200 status.
        //res.status(200).json(jobs).end();        
    },
    findOne(req,res){
        //get the id from the req params
        let id = req.params.id;
        if (!id){
            return res.status(400).send({err: 'id is required'});
        }
        //find the job by id
        JobModel.findById(id, (err, job)=> {
            if (err) {
                return res.status(404).send({err: 'Document was not found'});
            }
            return res.status(200).json(job).end();
        });
        //if err comes then send 404
        //send the job as response
    },
    update(req,res){
        //get id from req params
        let id = req.params.id;

        //get title from the req body
        //get the description from the req body
        //get the duration from the request body
        let title=req.body.title;
        let description= req.body.description;
        let duration= req.body.duration;
        
        //create jobAttributes object
        let job= {};
        title, description, duration
        //if user wants to update the title
        if (title){
            job.title=title;
        }
        //then add duration to JobAttributes
        if (duration) {     
            job.duration=duration;
        }
        //if description is changed then add the description
        if (description){
            job.description= description;
        }
       
        //call the update method to edit the job  
        //pass three arguments: id, jobAttributes, callback
        JobModel.update({_id:id}, job,(err,job)=>{
            //if error comes send the 500 status with error
            if (err){
                return res.status(500).send({err});
            }

            //if everything is good send the msg the job is updated successfully
            return res.status(200).json({});
        })
       



    }
} 