
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { checkAuth } from "./services/userService";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login/Login";  
import Register from "./pages/register/Register";


function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    checkAuth(setIsAuthenticated);
  }, []);

  const setAuth = (boolean: boolean) => {
    setIsAuthenticated(boolean)
  }

  return (
    <>
      <Router>
        <Routes>
          <Route
            path='/login'
            element={!isAuthenticated ? <Login setAuth={setAuth} /> : <Navigate to="/" />}
          />
          <Route
            path='/register'
            element={!isAuthenticated ? <Register setAuth={setAuth} /> : <Navigate to="/login" />}
          />
          <Route
            path='/'
            element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
          />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
