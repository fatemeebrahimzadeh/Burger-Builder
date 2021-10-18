import React, { Component } from 'react';
import Aux from '../AUXs/Auxs';
import Style from '../Layout/Layout.module.css';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import ToolBar from '../../components/Navigation/ToolBar/ToolBar';

class Layout extends Component {

    state = {
        showSideDrawer: false,
    }

    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false });
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer }
        })
    }

    render() {
        return (
            <Aux>
                <ToolBar drawerToggleClicked={this.sideDrawerToggleHandler} />
                <SideDrawer
                    show={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler}
                />
                <main className={Style.Content}>{this.props.children}</main>
            </Aux>
        );
    };
}

export default Layout;