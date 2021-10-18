import React, { Component } from "react";
import Style from './Modal.module.css';
import Aux from "../../../hoc/AUXs/Auxs";
import Backdrop from "../Backdrop/Backdrop";
import PropType from 'prop-types';

class modal extends Component {

    shouldComponentUpdate(nextProps) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children
    }

    render() {
        return (
            <Aux>
                <Backdrop clicked={this.props.modelClosed} show={this.props.show} />
                <div
                    className={Style.Modal}
                    style={{
                        // transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        display: this.props.show ? 'block' : 'none',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    {this.props.children}
                </div>
            </Aux>
        );
    }
}

modal.PropType = {
    modelClosed: PropType.func.isRequired,
    show: PropType.bool.isRequired,
}

export default modal;