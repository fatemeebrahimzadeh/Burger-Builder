import React from "react";
import Style from './DrawerToggle.module.css';
import PropType from 'prop-types';

const drawerToggle = (props) => {
    return (
        <div className={Style.DrawerToggle} onClick={props.clicked}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
}

drawerToggle.Prototype = {
    clicked: PropType.func.isRequired,
}

export default drawerToggle;