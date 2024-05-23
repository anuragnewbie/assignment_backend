const axios = require('axios');

// function to get all tasks from the json file
const getAllTasks = (req, res) => {
    try {
        let { tasks } = require("../data/tasks.json");

        res.status(200).send(tasks || []);
    } catch (error) {
        console.log(error);
    }
}

// function to add a new task to the json file
const addTask = (req, res) => {
    try {
        let { tasks } = require("../data/tasks.json");
        const newTaskObject = req.body;

        tasks.push(newTaskObject);

        res.status(201).send("Task has been successfully added");
    } catch (error) {
        console.log(error);
    }
}

// function to update a task
const updateTask = (req, res) => {
    try {
        let { tasks } = require("../data/tasks.json");
        let { taskId } = req.params;
        const newTaskObject = req.body;

        for(let task of tasks) {
            if(task.id === taskId) {
                task.name = newTaskObject.name;
                task.description = newTaskObject.description;
                task.status = newTaskObject.status;
            }
        }

        res.status(201).send("Task has been successfully updated");
    } catch (error) {
        console.log(error);
    }
}

// function to delete a task
const deleteTask = (req, res) => {
    try {
        const { taskId } = req.params;
        let { tasks } = require("../data/tasks.json");

        tasks = tasks.filter((task) => task.id !== taskId);
        res.status(200).send(tasks);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getAllTasks,
    addTask,
    updateTask,
    deleteTask
}