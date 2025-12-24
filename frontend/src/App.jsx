import {Routes, Route} from 'react-router-dom';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import TaskForm from './pages/TaskForm.jsx';

function App() {

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} /> 
      <Route path="/" element={<TaskForm />} /> 
    </Routes>
  );
}

export default App;
