import React from 'react';
import './Chars.css';

const char = (props) => {

return(
<div className='style' onClick={props.clicked}>
{props.chars}
</div>
)
}

export default char;
