import React from "react";
import { Router, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../../pages/Dashboard";
import Login from "../../pages/Login";
import Register from "../../pages/Register";

const AppRouter = (): JSX.Element =>{
    const isAuth = false;
    
    return (
        <>
          <Router>
            <Routes>
              <Route
                path='/dashboard'
                element={isAuth ? <Dashboard /> : <Navigate to='/login' />}
              />
              <Route
                path='/login'
                element={!isAuth ? <Login /> : <Navigate to='/dashboard' />}
              />
              <Route
                path='/register'
                element={!isAuth ? <Register /> : <Navigate to='/dashboard' />}
              />
            </Routes>
          </Router>
        </>
      );
}

export default AppRouter;