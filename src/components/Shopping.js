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
                <div className='mt-4 px-lg-5 mx-lg-5 col-lg-11 justify-content-center row' id='overflow'>
                        <div className="card col-lg-3 col-md-5 col-sm-3 mx-md-3 mx-lg-3 mb-md-3 mx-sm-0 p-0 border-0">
                            <div className="card-body bg-light">
                                <h2 className="card-title mb-5 px-2 mt-2">Choose what you want</h2>
                                <p className="card-text px-3 mt-1" id="infor">Fresh groceries delivered same-day directly to you.</p>
                            </div>
                            <div className='bg-coli'>
                                <img height="200" src={woman} alt="" className="card-img-top"/>
                            </div>
                        </div>

                        <div className="card col-lg-3 col-md-5 col-sm-3 mx-md-3 mx-lg-3 mb-md-3 mx-sm-0 p-0 border-0">
                            <div className="card-body bg-light">
                                <h2 className="card-title mb-5 px-3 mt-2">Get real-time updates</h2>
                                <p className="card-text px-3 mt-1" id="infor">Fresh groceries delivered same-day directly to you.</p>
                            </div>
                            <div className='bg-colk'>
                                <img height="200" src={phone} alt="" className="card-img-top"/>
                            </div>
                        </div>

                        <div className="card col-lg-3 col-md-5 col-sm-3 mx-md-3 mx-lg-3 mb-md-3 mx-sm-0 p-0 border-0">
                            <div className="card-body bg-light">
                                <h2 className="card-title mb-5 px-1 mt-2">Same-day grocery delivery</h2>
                                <p className="card-text px-3" id="infor">Fresh groceries delivered same-day directly to you.</p>
                            </div>
                            <div className='bg-coll'>
                                <img height="200" src={car} alt="" className="card-img-top"/>
                            </div>
                        </div>
                    
                </div>
            </div>
    </section>
    </>
  )
}

export default Shopping