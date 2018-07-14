const  express = require('express');
const router = express.Router();
var StudentModel = require('../models/studentmodel');

router.get('/', (request, response, next) => {
    StudentModel.find((error, data) =>{
        if(error)
            console.log("Error"+error);
            
    response.statusCode = 200;
    response.send(data);    });
    
});

router.get('/getByName/:name', (request, response, next) => {
    StudentModel.findOne({name : request.params.name}, (err, data)=>{
        if(err) {
            response.send(err);
        }
        response.statusCode = 200;
        response.send(data);
    });    
});

router.post('/', (request, response, next) => {
    var data = new StudentModel();
    data.name = request.body.name;
    data.age = request.body.age;

    data.save((err) => {
        if(err)
            console.log("Error while saving record");
        else{
            response.statusCode = 201;
            response.send('Student record created successfully.');
        }
    });
});

router.put('/updateByName/:name', (request, response, next) => {
    StudentModel.findOneAndUpdate({name : request.params.name}, { age: request.body.age}, (err, data)=>{
        if(err) {
            response.send(err);
        }
        response.statusCode = 201;
        response.send('Student record updated successfully.');
    });
});

router.delete('/deleteById/:name', (request, response, next) => {

    StudentModel.remove({name : request.params.name}, (err, data)=>{
        if(err) {
            response.send(err);
        }
        response.statusCode = 200;
        response.send(data);
    });    
});

module.exports = router;