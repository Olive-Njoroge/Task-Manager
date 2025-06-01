const Task = require('./task');
const express = require('express');
const router = express.Router();

//Create a new task
router.post('/tasks', async(req,res) => {
    try{
        const task = new Task(req.body);
        await task.save();
        res.status(201).send(task);
    }catch(error){
        res.status(400).send(error);
    }
});

module.exports = router;