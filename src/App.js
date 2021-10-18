import React from 'react';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './container/BurgerBuilder/BurgerBuilder';
import checkout from './container/Checkout/Checkout';
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/checkout" component={checkout} />
          <Route path='/' exact component={BurgerBuilder} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
