import {Routes, Route} from 'react-router-dom';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import TaskForm from './pages/TaskForm.jsx';
import Calendar from './pages/Calendar.jsx';
function App() {

  return (
  
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} /> 
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/" element={<TaskForm />} /> 
    </Routes>
  
  );
}

export default App;
