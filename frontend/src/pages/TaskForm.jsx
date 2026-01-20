import { useEffect, useState } from 'react';
import { getTasks, createTask } from '../api';

function taskForm() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');

  useEffect(() => {
    loadTasks();
  }, []);

  async function loadTasks() {
    const data = await getTasks();
    setTasks(data);
  }

  async function handleAddTask() {
    if (!title) return;

    await createTask(title);
    setTitle('');
    loadTasks();
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Tasker</h1>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="New task"
      />

      <button onClick={handleAddTask}>Add</button>

      <ul>
        {tasks.map((t) => (
          <li key={t.id}>
            {t.title} {t.completed ? '✅' : ''}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default taskForm;