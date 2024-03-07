import React from 'react';
import './AdminPage.css';
import { AdminCard } from './QuestionItem/AdminCard';

export function AdminPage() {
  return (
    <section className='section admin__section admin'>
      <div className="container admin__container ">
        <div className="row admin__row">
          <div className="admin__panel col-5">
            <h3 className="question-form__title">
              Поиск вопроса
            </h3>
            <div className="admin__panel-question-filter mb-5 ">
              <div className="form-floating  admin__input-wrapper">
                <input
                  type="text"
                  className="form-control admin__input-field"
                  id="questionFilter"
                  placeholder="name@example.com"
                />
                <label className='admin__input-label' htmlFor="questionFilter">поиск вопроса ...</label>
              </div>
            </div>

            <form className="admin__panel-question-form question-form mb-3 ">
              <h3 className="question-form__title">
                Создать новый вопрос
              </h3>
              <div className="form-floating  question-form__wrapper mb-3">
                <input
                  type="text"
                  className="form-control question-form__field"
                  id="questionBody"
                  placeholder="Вопрос"
                />
                <label className='question-form__label' htmlFor="questionBody">Введите вопрос ?</label>
              </div>

              <div className="form-floating  question-form__wrapper mb-3">
                <input
                  type="text"
                  className="form-control question-form__field"
                  id="questionAnswer"
                  placeholder="Вопрос"
                />
                <label className='question-form__label' htmlFor="questionAnswer">Введите ответ</label>
              </div>

              <button type='submit' className='question-form__button btn btn-primary'>
                Создать вопрос
              </button>
            </form>


          </div>
          <div className="admin__list col-7">
            <AdminCard
              questionBody={"Сколько голов у змея горыныча ?"}
              questionAnswer={"Три"}
            />
            <AdminCard
              questionBody={"Как зовут капитана Врунгеля ?"}
              questionAnswer={"Христофор"}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
