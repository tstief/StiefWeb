import React from 'react';
import { Route, Switch } from 'react-router';
import Layout from './components/Layout';
import Home from './containers/Home';
import Counter from './containers/Counter';
import FetchData from './containers/FetchData';
import Books from './containers/Books';

export default () => (
  <Layout>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/counter" component={Counter} />
      <Route path="/books" component={Books} />
      <Route path="/fetch-data/:startDateIndex?" component={FetchData} />
    </Switch>
  </Layout>
);
