const mongoose = require('mongoose');
var Task = require('./../models/models');

module.exports = {
    tasks: (req, res)=>{
        Task.find({}, (err, data)=>{
            if(err){console.log(err)}
            else{
                res.json(data)
            }
        });
    },
    get: (req, res)=>{
        Task.findOne({_id: req.params.id}, (err, data)=>{
            if(err){
                res.json(err)
            }
            else{
                res.json(data);
            }
        });
    },
    put: (req, res)=>{
        Task.findOne({_id: req.params.id}, (err, data)=>{
            if(err){console.log(err)}
            else{

                Task.update(data, {title: req.body.title, description: req.body.description}, (err, data)=>{
                    if(err){res.json(err)}
                    else{
                        res.json(data)
                    }
                });     
            }
        });
    },
    post: (req, res)=>{
        Task.create({title: req.body.title, description: req.body.description}, (err, data)=>{
            if(err){console.log(err)}
            else{
                res.json(data)
            } 
        });
    },
    delete: (req, res)=>{
        Task.findOne({_id: req.params.id}, (err, data)=>{
            if(err){console.log(err)}
            else{
                Task.remove(data, (err)=>{
                    res.redirect('/tasks')
                });
            }
        });
    } 
};