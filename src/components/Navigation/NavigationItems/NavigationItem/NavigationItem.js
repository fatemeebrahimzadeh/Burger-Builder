import React from "react";
import Style from './NavigationItem.module.css';
import PropType from 'prop-types';
import { Link } from "react-router-dom";

const navigationItem = (props) => {
    return (
        <li className={Style.NavigationItem}>
            <Link
                to={props.link}
                className={props.active ? Style.active : null}
            >{props.children}</Link>
        </li>
    );
}

navigationItem.PropType = {
    link: PropType.string.isRequired,
    active: PropType.bool.isRequired,
    children: PropType.string.isRequired
}

export default navigationItem;