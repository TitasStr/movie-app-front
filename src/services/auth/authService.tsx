import {
  AUTH_API_URL,
  LOG_ROUTE,
  REG_ROUTE,
  TOKEN,
} from '../../utils/constants';
import { type User } from '../../utils/interfaces';

export async function loginService(user: User): Promise<void> {
  const { username, password } = user;
  const response = await fetch(`${AUTH_API_URL}${LOG_ROUTE}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    if (errorData.message != null) throw errorData.message;
    else throw errorData;
  }
  const token = await response.text();
  localStorage.setItem(TOKEN, token);
}

export async function registerService(user: User): Promise<void> {
  const { username, password } = user;

  const response = await fetch(`${AUTH_API_URL}${REG_ROUTE}`, {
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
  const token = localStorage.getItem(TOKEN);
  if (token == null) {
    throw new Error('No token found');
  }

  const response = await fetch(`${AUTH_API_URL}/status`, {
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
