import React from "react";
import Style from './Backdrop.module.css';
import PropType from 'prop-types';


const backdrop = (props) => {
    return props.show ? <div onClick={props.clicked} className={Style.Backdrop}></div> : null
}

backdrop.PropType = {
    show: PropType.bool.isRequired,
    clicked: PropType.func.isRequired
}

backdrop.PropType = {
    show: PropType.bool.isRequired,
    clicked: PropType.func.isRequired
}

export default backdrop;