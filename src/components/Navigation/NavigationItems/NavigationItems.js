import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import Style from './NavigationItems.module.css';

const navigationItems = () => {
    return (
        <ul className={Style.NavigationItems}>
            {/* you can add a active propperty to components below */}
            <NavigationItem link='/'>Burger Builder</NavigationItem>
            <NavigationItem link='/checkout'>Checkout</NavigationItem>
        </ul>
    )
}

export default navigationItems;