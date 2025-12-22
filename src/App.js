import React from 'react';
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/auth/login';
import Registration from './components/auth/registration';
import Dashboard from './pages/dashboard';
import AddTodo from './components/todo/addtodo';
import TodoList from './components/todo/todolist';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Registration />} />
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/addtodo' element={<AddTodo/>}/>
        <Route path='/todolist' element={<TodoList/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
