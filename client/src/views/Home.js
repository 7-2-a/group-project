import React from 'react';
import Navbar from '../components/Navbar';
import QuizList from '../components/QuizList';
import './Home.css';

const Home = () => (
  <div>
    <Navbar title="Quiz-U" />

    <QuizList />
  </div>
)


export default Home;
