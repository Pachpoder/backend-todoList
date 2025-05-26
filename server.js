const express = require('express');
const app = express();
const PORT = 3000;

const API_KEY = '12345-mi-apikey';
app.use(express.json());

app.use((req, res, next) => {
  const authHeader = req.headers['authorization'];
  if (authHeader === API_KEY) {
    next();
  } else {
    res.status(401).json({ error: 'Unauthorized: Invalid API Key' });
  }
});

let tasks = [];
let goals = [];

// GET /getTasks
app.get('/getTasks', (req, res) => {
  res.status(200).json(tasks);
});

// GET /getGoals
app.get('/getGoals', (req, res) => {
  res.status(200).json(goals);
});

// POST /addTask
app.post('/addTask', (req, res) => {
  const newTask = req.body;
  if (!newTask || !newTask.id || !newTask.name || !newTask.description || !newTask.dueDate) {
    return res.status(400).json({ error: 'Parámetros inválidos para agregar tarea' });
  }
  tasks.push(newTask);
  res.status(200).json({ message: 'Tarea agregada', task: newTask });
});

// POST /addGoal
app.post('/addGoal', (req, res) => {
  const newGoal = req.body;
  if (!newGoal || !newGoal.id || !newGoal.name || !newGoal.description || !newGoal.dueDate) {
    return res.status(400).json({ error: 'Parámetros inválidos para agregar meta' });
  }
  goals.push(newGoal);
  res.status(200).json({ message: 'Meta agregada', goal: newGoal });
});

// DELETE /removeTask
app.delete('/removeTask', (req, res) => {
  const { id } = req.body;
  if (!id) {
    return res.status(400).json({ error: 'ID no proporcionado para eliminar tarea' });
  }
  tasks = tasks.filter(task => task.id !== id);
  res.status(200).json({ message: 'Tarea eliminada', id });
});

// DELETE /removeGoal
app.delete('/removeGoal', (req, res) => {
  const { id } = req.body;
  if (!id) {
    return res.status(400).json({ error: 'ID no proporcionado para eliminar meta' });
  }
  goals = goals.filter(goal => goal.id !== id);
  res.status(200).json({ message: 'Meta eliminada', id });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
