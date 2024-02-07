import React from 'react';
import './App.css';
import LoginForm from './components/LoginForm/LoginForm';
import Navbar from './components/Navbar/Navbar';
import Searchbar from './components/Searchbar/Searchbar';
import MovieCard from './components/MovieCard/MovieCard';

function App(): JSX.Element {
  return (
    <>
      <Navbar />
      <Searchbar />
      <LoginForm />
      <MovieCard />
    </>
  );
}

export default App;
