import React from "react";
import Style from './SideDrawer.module.css';
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Aux from "../../../hoc/AUXs/Auxs";
import Backdrop from "../../UI/Backdrop/Backdrop";
import PropType from 'prop-types';


const sideDrawer = (props) => {

    let attachedClasses = [Style.SideDrawer, Style.Close];
    if (props.show) {
        attachedClasses = [Style.SideDrawer, Style.Open];
    }

    return (
        <Aux>
            <Backdrop show={props.show} clicked={props.closed} />
            <div className={attachedClasses.join(' ')}>
                <div className={Style.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    );
}

sideDrawer.PropType = {
    show: PropType.bool.isRequired,
    closed: PropType.func.isRequired
}

export default sideDrawer;