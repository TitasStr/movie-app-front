export interface User {
  username: string;
  password: string;
}

export interface Movie {
  id: number;
  title: string;
  image_url: string;
}

export interface AuthState {
  isAuth: boolean;
  username: string;
}

export interface SetAuthPayload {
  isAuth: boolean;
  username: string;
}
