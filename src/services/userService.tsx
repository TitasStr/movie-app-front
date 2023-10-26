import { API_URL, TOKEN, USER_NAME } from '../utils/constants'

export const loginUser = async (email: string, password: string) => {
  const body = { email, password };
  try {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });

    const parseRes = await response.json();

    if (parseRes.token) {
      localStorage.setItem(TOKEN, parseRes.token);
      if (parseRes.user_name) {
        localStorage.setItem(USER_NAME, parseRes.user_name);
      }
      return { success: true, message: "Login successful" };
    } else {
      return { success: false, message: parseRes };
    }
  } catch (err: any) {
    console.error(err.message);
    return { success: false, message: "Login failed" };
  }
};

export const registerUser = async (email: string, password: string, name: string) => {
  const body = { email, password, name };
  try {
    const response = await fetch(`${API_URL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    const parseRes = await response.json();

    if (parseRes.token) {
      localStorage.setItem(TOKEN, parseRes.token);

      if (parseRes.user_name) {
        localStorage.setItem(USER_NAME, parseRes.user_name);
      }

      return { success: true, message: 'Registration successful' };
    } else {
      return { success: false, message: parseRes };
    }
  } catch (err: any) {
    console.error(err.message);
    return { success: false, message: 'Registration failed' };
  }
};

export const checkAuth = async (setIsAuthenticated: (isAuthenticated: boolean) => void) => {
  try {
    const response = await fetch(`${API_URL}/auth/is-verify`, {
      method: "GET",
      headers: { token: localStorage.token }
    });

    const parseRes = await response.json();
    parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
  } catch (err: any) {
    console.error(err.message);
  }
}