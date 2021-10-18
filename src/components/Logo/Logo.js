import React from "react";
import Style from './Logo.module.css';
import BurgerLogo from '../../assets/image/burger-logo.png';

const Logo = () => {
    return (
        <div className={Style.Logo}>
            <img src={BurgerLogo} alt='MYBurger'></img>
        </div>
    );
}

export default Logo;