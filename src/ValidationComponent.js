import React from 'react';

const validation = (props) => {

let ptext = "text long enough";
if (props.inputLength <= 5) {
  ptext = "text too short";
}

  return (
    <div>
    <p>{ptext}</p>
    </div>
  );
};

export default validation;
