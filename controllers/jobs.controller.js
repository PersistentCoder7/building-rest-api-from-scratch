const jobs = require('../config/jobs');
module.exports = {
    create(req,res) {
           
    jobs.push({
        "id":req.body.id,
        "title":req.body.title,
        "description": req.body.description,
        "duration": req.body.duration
    });
    
    res.json(jobs).end();

    },
    findAll(req,res) {
        res.setHeader('content-type', 'text/json');
        res.json(jobs).end();        
    }
}