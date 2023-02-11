import React from 'react';

import { TransactionProvider } from './context/TransactionState'

import Layout from './components/Layout'
import Balance from './components/Balance'
import IncomeExpenses from './components/IncomeExpenses'
import TransactionList from './components/TransactionList'
import AddTransaction from './components/AddTransaction'

import './App.scss';

const App = () => {
  return (
    <Layout>
      <TransactionProvider>
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </TransactionProvider>
    </Layout>

  );
}

export default App;