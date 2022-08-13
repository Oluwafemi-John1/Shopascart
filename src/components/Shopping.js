import React from 'react'
import "../asset/Shopping.css"
import woman from "../asset/images/woman.png"
import phone from "../asset/images/Real-time updates.gif"
import car from "../asset/images/car.png"

const Shopping = () => {
  return (
    <>
    <section className="container-fluid shopping">
        <div className="row p-lg-5 mx-lg-5 stories">
                <h3 align="center">Grocery shopping done right</h3>
                <div className='row mt-4 px-lg-5 mx-lg-5 col-lg-11 justify-content-center'>
                    <div className="card col-lg-3 col-md-5 col-sm-4 mx-md-3 mx-lg-2 mb-md-3 mx-sm-0 p-0 border-0">
                        <div className="card-body bg-light">
                            <h2 className="card-title mb-5 px-3">Choose what you want</h2>
                            <p className="card-text px-3 mt-1" id="infor">Fresh groceries delivered same-day directly to you.</p>
                        </div>
                        <img height="180" src={woman} alt="" className="card-img-top bg-coll"/>
                    </div>

                    <div className="card col-lg-3 col-md-5 col-sm-4 mx-md-3 mx-lg-2 mb-md-3 mx-sm-0 p-0 border-0">
                        <div className="card-body bg-light">
                            <h2 className="card-title mb-5 px-3">Get real-time updates</h2>
                            <p className="card-text px-3 mt-1" id="infor">Fresh groceries delivered same-day directly to you.</p>
                        </div>
                        <img height="180" src={phone} alt="" className="card-img-top"/>
                    </div>

                    <div className="card col-lg-3 col-md-5 col-sm-4 mx-md-3 mx-lg-2 mb-md-3 mx-sm-0 p-0 border-0">
                        <div className="card-body bg-light">
                            <h2 className="card-title mb-5 px-2">Same-day grocery delivery</h2>
                            <p className="card-text px-3" id="infor">Fresh groceries delivered same-day directly to you.</p>
                        </div>
                        <img height="180" src={car} alt="" className="card-img-top bg-coll"/>
                    </div>
                </div>
            </div>
    </section>
    </>
  )
}

export default Shopping