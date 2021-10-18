import React, { Component } from 'react';
import Style from '../Burger/Burger.module.css';
import BurgerIngredient from '../Burger/BurgerIngredient/BurgerIngredient';
import PropType from 'prop-types';
import { withRouter } from 'react-router-dom';

class Burger extends Component {
    render() {

        // console.log('[Burger]', this.props);

        let transformingredients = Object.keys(this.props.ingredients).map(key => {
            let sample = [];
            for (let i = 0; i < this.props.ingredients[key]; i++) {
                sample.push(<BurgerIngredient type={key} key={key + i} />);
            };
            return sample;
        })
            .reduce((arr, el) => {
                return arr.concat(el)
            }, []);
        // let transformingredients = Object.keys(this.props.ingredients)
        //     .map(eachingredientsKey => {
        //         return [...Array(this.props.ingredients[eachingredientsKey])].map((_, i) => {
        //             return <BurgerIngredient type={eachingredientsKey} key={eachingredientsKey + i} />
        //         })
        //     })
        //     .reduce((arr, el) => {
        //         return arr.concat(el)
        //     }, []);
        if (transformingredients.length === 0) {
            transformingredients = <p>Please start adding ingredients!</p>;
        }
        return (
            <div className={Style.Burger}>
                <BurgerIngredient type="bread-top" />
                {transformingredients}
                <BurgerIngredient type="bread-bottom" />
            </div>
        );
    }
}

Burger.PropType = {
    ingredients: PropType.object.isRequired,
}

export default withRouter(Burger);