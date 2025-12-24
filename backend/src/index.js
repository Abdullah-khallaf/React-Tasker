const express = require('express');
const cors = require('cors');
require('./db'); // initialize database

const app = express();


app.use(cors()); // enable CORS
app.use(express.json()); // parse JSON bodies

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

const tasksRoutes = require('./routes/tasks');
app.use('/tasks', tasksRoutes);


const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
