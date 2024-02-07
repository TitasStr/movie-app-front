import { API_URL } from '../../constants';
import { type User } from '../../interfaces';

export async function loginService(user: User): Promise<void> {
  const { username, password } = user;
  const response = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });

  if (!response.ok) {
    console.log(response);
    const errorData = await response.json();
    if (errorData.message != null) throw errorData.message;
    else throw errorData;
  }
  const token = await response.text();
  localStorage.setItem('token', token);
}

export async function registerService(user: User): Promise<void> {
  const { username, password } = user;
  const response = await fetch(`${API_URL}/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw errorData.message;
  }
}

export async function statusService(): Promise<string> {
  const token = localStorage.getItem('token');
  if (token == null) {
    throw new Error('No token found');
  }

  const response = await fetch(`${API_URL}/auth/status`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const userData = await response.text();
  return userData;
}
