import React from 'react';
import './Chars.css';

const chars = (props) => {
  return (
    <div className='style' onClick={props.clicked}>
<p>{props.character}</p>
</div>
)
}

export default chars;
