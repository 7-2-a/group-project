import React from 'react';
import Navbar from '../components/Navbar';
//import QuizList from '../components/QuizList';
import QuizDisplay from '../components/QuizDisplay';



import './Home.css';



const Home = () => (

  <div>
    <Navbar title="Quiz-U" />
    <h3 className="MakeQuiz"><a href="/MakeQuiz">  </a> </h3>

    <QuizDisplay />
  </div>

)


export default Home;
