import React from 'react';
import './MyButton.css'

export function MyButton({children, ...props}) {
  return (
    <button className='MyButton' {...props}>
      {children}
    </button>
  );
}
