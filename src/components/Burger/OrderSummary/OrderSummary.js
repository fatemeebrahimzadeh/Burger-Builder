import React from "react";
import Aux from "../../../hoc/AUXs/Auxs";
import Button from '../../UI/Button/Button';
import PropType from 'prop-types';

const orderSummary = (props) => {
    let ingredientsSummary = Object.keys(props.ingredients)
        .map(key => {
            return (
                <li key={key}>
                    <span style={{ textTransform: 'capitalize' }}>{key}</span>:{props.ingredients[key]}
                </li>);
        });
    return (
        <Aux>
            <h3>Order Menu</h3>
            <p>the delicious burger with the fallowing ingredients:</p>
            <ul>{ingredientsSummary}</ul>
            <p><strong>Total Prise: {props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button clicked={props.modelClosed} btnType='Success'>CANCEL</Button>
            <Button clicked={props.modelContinue} btnType='Danger'>CONTINUE</Button>
        </Aux>
    );
}

orderSummary.PropType = {
    price: PropType.number.isRequired,
    modelClosed: PropType.func.isRequired,
    modelOpened: PropType.func.isRequired
}

export default orderSummary;