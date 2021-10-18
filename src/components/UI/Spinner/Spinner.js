import React from "react";
import Style from './Spinner.module.css';

const Spinner = () => {
    return (
        <div className={Style.loader}>Loading...</div>
    );
}

export default Spinner;