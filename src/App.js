import React, { useState } from 'react';
import ScoreHeader from './components/header/ScoreHeader';
import Game from './components/body/Game';
import RulesBtn from './components/footer/RulesBtn';
import Modal from './components/modal/Modal';

import './App.css';

function App() {
  const [modalToggle, setModalToggle] = useState(false);
  const [score, setScore] = useState(localStorage.getItem("score") || 0);

  const toggleModal = () => {
    setModalToggle(!modalToggle);
  }

  const updateScore = (result) => {
    if(result === 'win'){
      const newScore = parseInt(score) + 1;
      setScore(newScore);
      localStorage.setItem("score", newScore);
    }
    if(result === 'lose'){
      const newScore = parseInt(score) - 1;
      setScore(newScore);
      localStorage.setItem("score", newScore);
    }
  }

  return (
    <div className="App">
        <ScoreHeader score={score}/>
        <Game updateScore={updateScore}/>
        <RulesBtn toggleModal={toggleModal}/>
        <Modal toggleModal={toggleModal} show={modalToggle}/>
        
    </div>
  );
}

export default App;
