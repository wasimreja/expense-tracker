import React from 'react'

const IncomeExpenses = () => {
  return (
    <section className="card" style={{ marginBottom: 50 }}>
      <div className="card-content">
        <div className="columns">
          <div className="column is-6 has-text-centered">
            <p>INCOME</p>
            <p className="has-text-success">$500.00</p>
          </div>
          <div className="column is-6 has-text-centered">
            <p>EXPENSE</p>
            <p className="has-text-danger">$240.00</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IncomeExpenses