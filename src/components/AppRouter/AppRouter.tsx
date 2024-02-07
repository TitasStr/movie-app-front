/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Dashboard from '../../pages/Dashboard';
import Login from '../../pages/Login';
import Register from '../../pages/Register';
import { DASH_ROUTE, LOG_ROUTE, REG_ROUTE, TOKEN } from '../../utils/constants';
import { useSelector, useDispatch } from 'react-redux';
import { type RootState, type AppDispatch } from '../../store';
import { logout, setAuth } from '../../features/auth/authSlice';
import { statusService } from '../../services/auth/authService';

const AppRouter = (): JSX.Element => {
  const { isAuth } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const checkAuthStatus = async (): Promise<void> => {
      try {
        const userData: string = await statusService();
        dispatch(setAuth({ isAuth: true, username: userData }));
      } catch (err) {
        dispatch(logout());
      }
    };
    if (localStorage.getItem(TOKEN) != null) {
      void checkAuthStatus();
    }
  }, [dispatch]);

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={isAuth ? <Dashboard /> : <Navigate to={LOG_ROUTE} />}
          />
          <Route
            path={DASH_ROUTE}
            element={isAuth ? <Dashboard /> : <Navigate to={LOG_ROUTE} />}
          />
          <Route
            path={LOG_ROUTE}
            element={!isAuth ? <Login /> : <Navigate to={DASH_ROUTE} />}
          />
          <Route
            path={REG_ROUTE}
            element={!isAuth ? <Register /> : <Navigate to={DASH_ROUTE} />}
          />
        </Routes>
      </Router>
    </>
  );
};

export default AppRouter;
