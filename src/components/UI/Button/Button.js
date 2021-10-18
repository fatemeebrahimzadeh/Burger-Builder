import React from 'react';
import Style from './Button.module.css';
import PropType from 'prop-types';


const button = (props) => {
    return <button className={[Style.Button, Style[props.btnType]].join(' ')} onClick={props.clicked}>{props.children}</button>
}

button.PropType = {
    btnType: PropType.string.isRequired,
    clicked: PropType.func.isRequired,
    children: PropType.string.isRequired
}

export default button;