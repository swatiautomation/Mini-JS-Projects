const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
app.use(cors());
app.use(express.json());

// ==========================
// MySQL Connection
// ==========================
const db = mysql.createConnection({
  host: 'localhost', // if docker use host.docker.internal
  user: 'root',
  password: 'password',
  database: 'todo_app',
  port: 3333, // 👈 THIS IS THE FIX
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
  } else {
    console.log('Connected to MySQL');
  }
});

// ==========================
// GET All Todos
// ==========================
app.get('/todos', (req, res) => {
  db.query('SELECT * FROM todos', (err, results) => {
    if (err) {
      return res.status(500).json(err);
    }
    res.json(results);
  });
});

// ==========================
// ADD Todo
// ==========================
app.post('/todos', (req, res) => {
  const { text } = req.body;

  db.query('INSERT INTO todos (text) VALUES (?)', [text], (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.status(201).json({
      id: result.insertId,
      text,
    });
  });
});

// ==========================
// DELETE Todo
// ==========================
app.delete('/todos/:id', (req, res) => {
  const id = req.params.id;

  db.query('DELETE FROM todos WHERE id = ?', [id], (err) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.json({ message: 'Deleted successfully' });
  });
});

// ==========================
// UPDATE Todo
// ==========================
app.put('/todos/:id', (req, res) => {
  const id = req.params.id;
  const { text } = req.body;

  db.query('UPDATE todos SET text = ? WHERE id = ?', [text, id], (err) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.json({ id, text });
  });
});

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
