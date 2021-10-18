import React from "react";
import Logo from "../../Logo/Logo";
import Style from './ToolBar.module.css';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import NavigationItems from "../NavigationItems/NavigationItems";
import PropType from 'prop-types';


const ToolBar = (props) => {
    return (
        <header className={Style.Toolbar}>
            <DrawerToggle clicked={props.drawerToggleClicked} />
            <div className={Style.Logo}>
                <Logo />
            </div>
            <nav className={Style.DesktopOnly}>
                <NavigationItems />
            </nav>
        </header>
    );
}

ToolBar.PropType = {
    drawerToggleClicked: PropType.func.isRequired,
}


export default ToolBar;