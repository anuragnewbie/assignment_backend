require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { getAllTasks, addTask, updateTask, deleteTask } = require('./controllers/index');

const app = express();

// defining the middlewares
app.use(express.json());
// middleware to allow the server to allow all CORS requests
app.use(cors());

// route to get all the existing tasks
app.get('/', getAllTasks);

// route to add a new task
app.post('/add-task', addTask);

// route to update a particular task
app.put('/update-task/:taskId', updateTask);

// route to delete a particular task
app.delete('/delete-task/:taskId', deleteTask);

// created a node server which is listening for the incoming requests at the port 3000
app.listen(process.env.PORT, () => {
    console.log(`Server is listening at port ${process.env.PORT}`);
});
