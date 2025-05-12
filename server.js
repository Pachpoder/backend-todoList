const express = require('express');
const app = express();
const PORT = 3000;

//API key fija para esta actividad
const API_KEY = '12345-mi-apikey';

//Middlewares
app.use(express.json());

app.use((req, res, next) => {
  const authHeader = req.headers['authorization'];
  if (authHeader === API_KEY) {
    next();
  } else {
    res.status(401).json({ message: 'Unauthorized: Invalid API Key' });
  }
});

//Arreglos en memoria
let tasks = [];
let goals = [];

//ENDPOINTS
app.get('/getTasks', (req, res) => {
  res.json(tasks);
});

app.get('/getGoals', (req, res) => {
  res.json(goals);
});

app.post('/addTask', (req, res) => {
  const newTask = req.body;
  tasks.push(newTask);
  res.status(201).json({ message: 'Task added', task: newTask });
});

app.post('/addGoal', (req, res) => {
  const newGoal = req.body;
  goals.push(newGoal);
  res.status(201).json({ message: 'Goal added', goal: newGoal });
});

app.delete('/removeTask', (req, res) => {
  const { id } = req.body;
  tasks = tasks.filter(task => task.id !== id);
  res.json({ message: 'Task removed', id });
});

app.delete('/removeGoal', (req, res) => {
  const { id } = req.body;
  goals = goals.filter(goal => goal.id !== id);
  res.json({ message: 'Goal removed', id });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
