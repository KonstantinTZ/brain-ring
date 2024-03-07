import React from 'react';
import './ScoreboardPage.css';

export function ScoreboardPage() {
  return (
    <section className='section scoreboard__section'>
      <div className="container scoreboard__container">
        <div className="scoreboard__top">
          <h2 className="scoreboard__digit scoreboard__digit--red text-danger">10</h2>
          <h2 className="scoreboard__digit scoreboard__digit-green text-success">40</h2>
        </div>
        <div className="scoreboard__bottom">
          <p className="scoreboard__text">
            Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Это диких запятой буквоград алфавит родного?
          </p>
        </div>
      </div>
    </section>
  );
}
