import React, { useState, useContext } from 'react'

import { TransactionState } from '../context/TransactionState'

const AddTransaction = () => {
  const { addTransaction } = useContext(TransactionState)

  const [text, setText] = useState("")
  const [amount, setAmount] = useState(0)

  function onSubmit(e) {
    e.preventDefault()

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }
    addTransaction(newTransaction)
    setText("")
    setAmount(0)    
  }

  return (
    <section style={{ marginBottom: 50 }}>
      <h4 className="is-size-5 has-text-weight-bold">Add new transaction</h4>
      <hr style={{ marginTop: 0 }} />
      <form onSubmit={onSubmit}>
        <div className="field">
          <label htmlFor="text" className="label">Text</label>
          <div className="control">
            <input
              type="text"
              className="input"
              id="text"
              placeholder="Enter text..."
              value={text}
              onChange={e => setText(e.target.value)}
            />
          </div>
        </div>
        <div className="control">
          <label htmlFor="amount" className="label">Amount</label>
          <div className="field">
            <input
              type="number"
              className="input"
              id="amount"
              placeholder="Enter Amount..."
              value={amount}
              onChange={e => setAmount(e.target.value)}
            />
          </div>
          <p className="help">negative - expense, positive - income</p>
        </div>
        <br />
        <button className="button is-dark is-fullwidth">Add Transaction</button>
      </form>
    </section>
  )
}

export default AddTransaction
