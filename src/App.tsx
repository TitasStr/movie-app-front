import React from 'react';
import './App.css';
import LoginForm from './components/LoginForm/LoginForm';
import Navbar from './components/Navbar/Navbar';
import Searchbar from './components/Searchbar/Searchbar';
import MovieList from './components/MovieList/MovieList';

function App(): JSX.Element {
  return (
    <>
      <Navbar />
      <Searchbar />
      <LoginForm />
      <MovieList />
    </>
  );
}

export default App;
