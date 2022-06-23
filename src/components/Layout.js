import React from 'react'

import Header from './Header'

const Layout = ({ children }) => {
  return (
    <section className="hero">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-6">
              <Header />
              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Layout