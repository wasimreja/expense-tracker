import React from 'react';

import Layout from './components/Layout'
import Balance from './components/Balance'
import IncomeExpenses from './components/IncomeExpenses'
import TransactionList from './components/TransactionList'
import AddTransaction from './components/AddTransaction'

import './App.scss';

const App = () => {
  return (
    <Layout>
      <Balance />
      <IncomeExpenses />
      <TransactionList />
      <AddTransaction />
    </Layout>
  );
}

export default App;