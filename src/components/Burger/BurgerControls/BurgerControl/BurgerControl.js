import React, { Component } from 'react';
import styles from '../BurgerControl/BurgerControl.module.css';
import PropType from 'prop-types';

class BurgerControl extends Component {
    render() {
        return (
            <div className={styles.BuildControl}>
                <div className={styles.Lable}>{this.props.lable}</div>
                <button
                    className={styles.Less}
                    onClick={this.props.removed}
                    disabled={this.props.disabled}>Less</button>
                <button
                    className={styles.More}
                    onClick={this.props.added}>More</button>
            </div>
        );
    };
}

BurgerControl.PropType = {
    lable: PropType.string.isRequired,
    removed: PropType.func.isRequired,
    disabled: PropType.bool.isRequired,
    added: PropType.func.isRequired
}

export default BurgerControl;