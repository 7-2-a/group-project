import React from 'react';
import Navbar from '../components/Navbar';
import QuizList from '../components/QuizList';
import './Home.css';

const Home = () => (
  <div>
    <Navbar title="Quiz-U" />
    <h3 className="MakeQuiz"><a href="/MakeQuiz">Make a Quiz</a></h3>

    <QuizList />
  </div>
)


export default Home;
