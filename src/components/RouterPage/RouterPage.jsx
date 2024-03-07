import React from 'react';
import './RouterPage.css';
import { NavLink } from 'react-router-dom';

export function RouterPage() {
  return (
    <section className='section section__router-page router-page'>
      <div className="container router-page__container  ">

        <div className="router-page__center">
          <h1 className='router-page__title'>Игра Brain-ring</h1>
          <NavLink to="/admin" className="router-page__button-top btn btn-primary">
            Панель администратора
          </NavLink>
          <NavLink to="/presenter"  className="router-page__button-top btn btn-primary">
            Панель ведущего
          </NavLink>
          <NavLink to="/scoreboard" className="router-page__button-top btn btn-primary">
            Табло
          </NavLink>
        </div>
        <div className="router-page__box">

          <div className="router-page__box-team-wrapper">
            <h2 className='router-page__subtitle router-page__subtitle--red'>Команда Красных</h2>
            <NavLink to="/gamer" className="router-page__button-top btn btn-danger">
              Игрок 1
            </NavLink>
            <NavLink to="/gamer" className="router-page__button-top btn btn-danger">
              Игрок 2
            </NavLink>
            <NavLink to="/gamer" className="router-page__button-top btn btn-danger">
              Игрок 3
            </NavLink>
            <NavLink to="/gamer" className="router-page__button-top btn btn-danger">
              Игрок 4
            </NavLink>
          </div>
          <div className="router-page__box-team-wrapper">
            <h2 className='router-page__subtitle router-page__subtitle--green'>Команда Зелёных</h2>
            <NavLink to="/gamer" className="router-page__button-top btn btn-success">
              Игрок 1
            </NavLink>
            <NavLink to="/gamer" className="router-page__button-top btn btn-success">
              Игрок 2
            </NavLink>
            <NavLink to="/gamer" className="router-page__button-top btn btn-success">
              Игрок 3
            </NavLink>
            <NavLink to="/gamer" className="router-page__button-top btn btn-success">
              Игрок 4
            </NavLink>

          </div>
        </div>
      </div>
    </section>
  );
}
