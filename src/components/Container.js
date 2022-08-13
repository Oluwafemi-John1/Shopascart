import React from 'react'
import "../asset/Container.css"
import arrow from "../asset/images/arrow.png"
import hero from "../asset/images/Hero.png"

const Container = () => {
  return (
    <>
    <section className="container-fluid sect">
        <div className="row ms-lg-5">
            <div className="col-lg-6 col-sm-12 ms-lg-5">
                <h1 className="ms-lg-5 mt-lg-5">Get your groceries<br/>delivered same-day</h1>
                <p className="ms-lg-5 mt-lg-3 col-lg-8" id='grocery'>Order what you want from grocery stores and local market near you and get it delivered right to your door.</p>
                <div className='ms-lg-5 mt-lg-2'>
                    <input type="text" placeholder='Enter your address' className='p-2 rounded-pill col-lg-4' /> <img src= {arrow} alt="" className='arrow' />
                </div>
            </div>
            <div className="col-lg-5 col-sm-12">
                <img src={hero} alt="" className='ms-lg-4 hero' />
            </div>
        </div>
    </section>
    </>
  )
}

export default Container