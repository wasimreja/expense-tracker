import React, { useContext } from 'react'

import { TransactionState } from '../context/TransactionState'

const IncomeExpenses = () => {
  const { transactions } = useContext(TransactionState)

  const amounts = transactions.map(transaction => transaction.amount)

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2)

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2)

  return (
    <section className="card" style={{ marginBottom: 50 }}>
      <div className="card-content">
        <div className="columns">
          <div className="column is-6 has-text-centered">
            <p>INCOME</p>
            <p className="has-text-success">₹{income}</p>
          </div>
          <div className="column is-6 has-text-centered">
            <p>EXPENSE</p>
            <p className="has-text-danger">₹{expense}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IncomeExpenses