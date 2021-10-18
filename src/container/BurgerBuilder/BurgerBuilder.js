import React, { Component } from 'react';
import Aux from '../../hoc/AUXs/Auxs';
import Burger from '../../components/Burger/Burger';
import BurgerControls from '../../components/Burger/BurgerControls/BurgerControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import WithErroHandler from '../../hoc/withErrorHandler/withErrorHandler';


const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};


class BurgerBuilder extends Component {

    state = {
        // ingredients: null,
        ingredients: {
            meat: 0,
            salad: 0,
            cheese: 0,
            bacon: 0
        },
        totalPrice: 4,
        purchasable: false,
        purchasing: false,
        loading: false,
        error: false
    }

    componentDidMount() {

        // console.log('[Burger Builder]', this.props);

        // axios.get('https://burger-builder-a0d3b-default-rtdb.firebaseio.com/ingredients.json')
        //     .then(response => {
        //         this.setState({ ingredients: response.data });
        //     })
        //     .catch(error => {
        //         this.setState({ error: true });
        //         console.log('[BurgerBuilder]ComponentDidMountError', this.state.error);
        //     });
    }

    purchasingHandler = () => {
        this.setState({ purchasing: true });
    }

    purchasCancelHandler = () => {
        this.setState({ purchasing: false });
    }

    purchasContinueHandler = () => {
        // this.setState({ loading: true });
        // const order = {
        //     ingredients: this.state.ingredients,
        //     price: this.state.totalPrice,
        //     customer: {
        //         name: 'fateme ebrahimzadeh',
        //         address: {
        //             street: 'bahonar street',
        //             zipCode: '123456',
        //             country: 'Isfahan'
        //         },
        //         email: 'fateme.ebrahimzadeh20@gmail.com'
        //     },
        //     deliveryMethod: 'fastest',
        // }
        // axios.post('/orders.json', order)
        //     .then(response => {
        //         this.setState({ loading: false, purchasing: false });
        //         // console.log('[BurgerBulder]response', response);
        //     })
        //     .catch(error => {
        //         this.setState({ loading: false, purchasing: false });
        //         // console.log('[BurgerBulder]error', error);
        //     });

        this.props.history.push({
            pathname: '/checkout',
            // search: ,
        });

    }

    updatePurchaseState = (ingredients) => {
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey];
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
        this.setState({ purchasable: sum > 0 });
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
        this.updatePurchaseState(updatedIngredients);
    }

    render() {

        // console.log("[burgerbuilder]")
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        let orderSummary = null;
        let burger = this.state.error ? (<div style={{ paddingTop: '250px' }}><p>ingredients can't be loaded!</p></div>) : (<div style={{ paddingTop: '250px' }}><Spinner /></div>);

        if (this.state.ingredients) {
            burger = (
                <Aux>
                    <Burger ingredients={this.state.ingredients}></Burger>
                    <BurgerControls
                        ingredientAdded={this.addIngredientHandler}
                        ingredientRemoved={this.removeIngredientHandler}
                        disabled={disabledInfo}
                        purchasable={this.state.purchasable}
                        modelOpened={this.purchasingHandler}
                        price={this.state.totalPrice} />
                </Aux>
            );
            orderSummary = (
                <OrderSummary
                    modelClosed={this.purchasCancelHandler}
                    modelContinue={this.purchasContinueHandler}
                    price={this.state.totalPrice}
                    ingredients={this.state.ingredients} />
            );
        }

        // console.log('[BurgerBuilder]burger', burger)
        if (this.state.loading) {
            orderSummary = <Spinner />
        }

        return (
            <Aux>
                <Modal modelClosed={this.purchasCancelHandler} show={this.state.purchasing}>
                    {orderSummary}
                </Modal>
                {burger}
            </Aux >
        );
    }
}

export default WithErroHandler(BurgerBuilder, axios);