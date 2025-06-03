const cors = require('cors');
const db = require('./db');
const express = require('express');
const app = express();
const PORT = 3000;

const API_KEY = '12345-mi-apikey';

// Habilitamos CORS (debe ir antes de cualquier middleware de autenticación)
app.use(cors());

// Middleware para parsear JSON
app.use(express.json());

// Middleware para validar API Key
app.use((req, res, next) => {
  const authHeader = req.headers['authorization'];
  if (authHeader === API_KEY) {
    next();
  } else {
    res.status(401).json({ error: 'Unauthorized: Invalid API Key' });
  }
});

// GET /getTasks
app.get('/getTasks', (req, res) => {
  db.query('SELECT * FROM tasks', (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Error al obtener las tareas' });
    }
    res.status(200).json(results);
  });
});

// GET /getGoals
app.get('/getGoals', (req, res) => {
  db.query('SELECT * FROM goals', (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Error al obtener las metas' });
    }
    res.status(200).json(results);
  });
});

// POST /addTask
app.post('/addTask', (req, res) => {
  const { id, name, description, dueDate } = req.body;

  if (!id || !name || !description || !dueDate) {
    return res.status(400).json({ error: 'Parámetros inválidos para agregar tarea' });
  }

  const query = 'INSERT INTO tasks (id, name, description, dueDate) VALUES (?, ?, ?, ?)';
  db.query(query, [id, name, description, dueDate], (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Error al agregar tarea', details: err });
    }
    res.status(200).json({ message: 'Tarea agregada exitosamente' });
  });
});

// POST /addGoal
app.post('/addGoal', (req, res) => {
  const { name, description, dueDate } = req.body;

  if (!name || !description || !dueDate) {
    return res.status(400).json({ error: 'Parámetros inválidos para agregar meta' });
  }

  const query = 'INSERT INTO goals (name, description, dueDate) VALUES (?, ?, ?)';
  db.query(query, [name, description, dueDate], (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Error al agregar meta', details: err });
    }
    res.status(200).json({ message: 'Meta agregada exitosamente', insertedId: result.insertId });
  });
});

// DELETE /removeTask
app.delete('/removeTask', (req, res) => {
  const { id } = req.body;

  if (!id) {
    return res.status(400).json({ error: 'ID no proporcionado para eliminar tarea' });
  }

  const query = 'DELETE FROM tasks WHERE id = ?';
  db.query(query, [id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Error al eliminar tarea', details: err });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Tarea no encontrada' });
    }

    res.status(200).json({ message: 'Tarea eliminada exitosamente', id });
  });
});

// DELETE /removeGoal
app.delete('/removeGoal', (req, res) => {
  const { id } = req.body;

  if (!id) {
    return res.status(400).json({ error: 'ID no proporcionado para eliminar meta' });
  }

  const query = 'DELETE FROM goals WHERE id = ?';
  db.query(query, [id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Error al eliminar meta', details: err });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Meta no encontrada' });
    }

    res.status(200).json({ message: 'Meta eliminada exitosamente', id });
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
