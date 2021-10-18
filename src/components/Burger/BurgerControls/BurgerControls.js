import React, { Component } from 'react';
import BurgerControl from '../BurgerControls/BurgerControl/BurgerControl';
import Style from '../../Burger/BurgerControls/BurgerControls.module.css';
import PropType from 'prop-types';

class BurgerControls extends Component {
    render() {
        let controlIngredient = [
            { lable: "Salad", type: "salad" },
            { lable: "Cheese", type: "cheese" },
            { lable: "Meat", type: "meat" },
            { lable: "Bacon", type: "bacon" }
        ]

        return (
            <div className={Style.BurgerControls}>
                {/* pay attention */}
                <p>Current Price: <strong>{this.props.price.toFixed(2)}</strong></p>
                {controlIngredient.map(ctrl => {
                    return <BurgerControl
                        key={ctrl.lable}
                        lable={ctrl.lable}
                        added={() => this.props.ingredientAdded(ctrl.type)}
                        removed={() => this.props.ingredientRemoved(ctrl.type)}
                        disabled={this.props.disabled[ctrl.type]} />
                })}
                <button
                    className={Style.OrderButton}
                    disabled={!this.props.purchasable}
                    onClick={this.props.modelOpened}>ORDER NOW</button>
            </div>
        );
    };
}

BurgerControls.PropType = {
    price: PropType.number.isRequired,
    ingredientAdded: PropType.func.isRequired,
    ingredientRemoved: PropType.func.isRequired,
    disabled: PropType.object.isRequired,
    purchasable: PropType.bool.ingredientAdded,
    modelOpened: PropType.func.isRequired
}

export default BurgerControls;