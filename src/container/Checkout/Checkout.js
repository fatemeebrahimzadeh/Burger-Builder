import React, { Component } from 'react';
import CheckoutSummary from '../../components/Orders/CheckoutSummary'

class Checkout extends Component {
    state = {
        ingredients: {
            salad: 1,
            meat: 1,
            cheese: 1,
            bacon: 1
        }
    }

    checkoutCancelled = () => {
        this.props.history.goBack();
    }

    checkoutContinued = () => {
        this.props.history.replace("/checkout/contact-data");
    }

    render() {
        return (
            <div>
                <CheckoutSummary
                    ingredients={this.state.ingredients}
                    checkoutContinued={this.checkoutContinued}
                    checkoutCancelled={this.checkoutCancelled} />
            </div>
        );
    }
}

export default Checkout;