import React from 'react';

const validation = (props) => {

  let text = 'Text long enough';

  if (props.textLength <= 5){
    text = 'text too short';
  }

  return (
    <p>{text}</p>
  );
};

export default validation;
