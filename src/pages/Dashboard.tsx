import React from 'react';
import MovieList from '../components/MovieList/MovieList';
import Navbar from '../components/Navbar/Navbar';
import Searchbar from '../components/Searchbar/Searchbar';

const Dashboard = (): JSX.Element => {
  return (
    <>
      <Navbar />
      <Searchbar />
      <MovieList />
    </>
  );
};

export default Dashboard;
