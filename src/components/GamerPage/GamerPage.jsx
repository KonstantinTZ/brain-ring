import React from 'react';
import './GamerPage.css';
import { MyButton } from '../../UI/MyButton';

export function GamerPage() {
  return (
    <section className='section section__gamer-page gamer-page'>

        <div className="container gamer-page__container d-flex flex-column align-items-center">
          <h2 className='gamer-page__title'>Gamer name</h2>
          <p className='gamer-page__descr'>Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Свою рукописи пор составитель. Курсивных единственное продолжил рыбными ему но раз меня маленькая семь злых.</p>
          <MyButton className='MyButton gamer-page__btn'>
            Остановить
          </MyButton>
        </div>
     
    </section>
  );
}
