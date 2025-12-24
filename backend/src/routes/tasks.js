const express = require('express');
const db = require('../db');

const router = express.Router();

router.get('/', (req, res) => {
  const tasks = db.prepare('SELECT * FROM tasks').all();
  res.json(tasks);
});

router.post('/', (req, res) => {
  const { title, user_id } = req.body;

  const stmt = db.prepare(
    'INSERT INTO tasks (title, user_id) VALUES (?, ?)'
  );
  const result = stmt.run(title, user_id);

  res.json({ id: result.lastInsertRowid });
});

module.exports = router;
