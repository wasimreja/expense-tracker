import React from 'react'

const TransactionList = () => {
  return (
    <section style={{ marginBottom: 50 }}>
      <h4 className="is-size-5 has-text-weight-bold">History</h4>
      <hr style={{ marginTop: 0 }} />
      <div className="list list-hoverable">
        <span className="list-item">
          Cash
          <span>-$400</span>
          <button className="delete is-pulled-right" />
        </span>
      </div>
    </section>
  )
}

export default TransactionList