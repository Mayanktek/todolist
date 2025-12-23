import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import AddTodo from "./pages/AddTodo";
import TodoList from "./pages/TodoList";

const isAuth = () => !!localStorage.getItem("token");

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route
          path="/dashboard"
          element={isAuth() ? <Dashboard /> : <Navigate to="/" />}
        />
        <Route
          path="/addtodo"
          element={isAuth() ? <AddTodo /> : <Navigate to="/" />}
        />
        <Route
          path="/todolist"
          element={isAuth() ? <TodoList /> : <Navigate to="/" />}
        />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}
