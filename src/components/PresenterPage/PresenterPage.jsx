import React from 'react';
import './PresenterPage.css';

export function PresenterPage() {
  return (
    <section className='section presenter__section'>
      <div className="container presenter__container">
        <div className="presenter__top">
          <div className='presenter__top-box presenter__top-box--left'>
            <p className="presenter__descr-top">
              Счет:
            </p>
            <div className="presenter__score-counter">

              <span className="presenter__digit text-danger">10</span>
              <span className="presenter__separator">/</span>
              <span className="presenter__digit text-success">40</span>
            </div>
          </div>
          <div className='presenter__top-box presenter__top-box--right'>
          <p className="presenter__descr-top">
              Таймер:
            </p>
            <span className="presenter__digit">600</span>
          </div>
        </div>
        <div className="presenter__middle row">
          {/* Пагинация по вопросам ??? */}
          <p className="presenter__text col-4">
            Вопрос:
          </p>
          <p className="presenter__text col-8">
            Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Это диких запятой буквоград алфавит родного?
          </p>
          <p className="presenter__text col-4">
            Ответ:
          </p>
          <p className="presenter__text col-8 text-secondary">
            Mujer uno dolor, más de poder mismo?
          </p>

        </div>
        <div className="presenter__footer">
          <button className='presenter__button btn btn-primary'>
            Запустить таймер
          </button>
          <div className="presenter__footer-wrapper">
            <button className='presenter__button btn btn-danger'>
              Победа красных
            </button>
            <button className='presenter__button btn btn-success'>
              Победа зелёных
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
