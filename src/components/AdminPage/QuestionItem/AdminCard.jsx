import React from 'react';
import './AdminCard.css';

export function AdminCard({questionBody, questionAnswer}) {
  return (
    <div className="card admin__card mb-2">
              <div className="card-body admin__card-body">
                <div className="card-body__wrapper ">
                  <p className="card-body__question">
                    {questionBody}
                  </p>
                  <p className="card-body__answer text-secondary">
                    {questionAnswer}
                  </p>
                </div>
                <div className="card-body__wrapper card-body__wrapper--buttons">
                  <button className='btn btn-danger'>
                    Удалить
                  </button>
                  <button className='btn btn-success'>
                    Изменить
                  </button>
                </div>
              </div>
            </div>
  );
}
