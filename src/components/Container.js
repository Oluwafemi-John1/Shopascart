import React from 'react'
import "../asset/Container.css"

function Container() {
  return (
    <>
    <section className="container-fluid">
        <div className="row border">
            <div className="col-lg-6 col-sm-12 border border-success">
                <h1 className="border">Get your groceries delivered same-day</h1>
                <p className="border">Order what you want from grocery stores and local market near you and get it delivered right to your door.</p>
                <input type="text" placeholder='Enter your address' />
            </div>
            <div className="col-lg-6 col-sm-12 border border-warning"></div>
        </div>
    </section>
    </>
  )
}

export default Container