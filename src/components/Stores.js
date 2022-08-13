import React from 'react'
import shoprite from "../asset/images/shoprite_store.png"
import addide from "../asset/images/addide_store.png"
import delis from "../asset/images/delis_store.png"
import supermart from "../asset/images/supermart_store.png"
import "../asset/Stores.css"

const Stores = () => {
  return (
    <>
    <section className="container-fluid store me-lg-5">
        <div className="row p-lg-5 mx-lg-5 stories">
            <h3 align="center">Favorite stores in <span><a href='' style={{color: "#D92D20", textDecoration: "none"}}>Lagos</a></span></h3>
            <div className='row mt-4 px-lg-5 scroll'>
                <div className="card col-lg col-md-5 mx-md-3 mx-lg-3 mb-md-3 mx-sm-0 p-0 border-0 cardy">
                    <img height="175" src={shoprite} alt="" className="card-img-top"/>
                    <div className="card-body">
                        <h5 className="card-title mb-4">Shoprite</h5>
                        <p className="card-text" id="start">Delivery&nbsp;&bull;&nbsp;Pickup</p>
                    </div>
                </div>

                <div className="card col-lg col-md-5 col-sm-4 mx-md-3 mx-lg-3 mb-md-3 mx-sm-0 p-0 border-0 cardy">
                    <img height="175" src={addide} alt="" className="card-img-top bg-light"/>
                    <div className="card-body">
                        <h5 className="card-title mb-4">Shoprite</h5>
                        <p className="card-text" id="start">Delivery&nbsp;&bull;&nbsp;Pickup</p>
                    </div>
                </div>

                <div className="card col-lg col-md-5 col-sm-4 mx-md-3 mx-lg-3 mb-md-3 mx-sm-0 p-0 border-0 cardy">
                    <img height="175" src={delis} alt="" className="card-img-top bg-light"/>
                    <div className="card-body">
                        <h5 className="card-title mb-4">Shoprite</h5>
                        <p className="card-text" id="start">Delivery</p>
                    </div>
                </div>

                <div className="card col-lg col-md-5 col-sm-4 mx-md-3 mx-lg-3 mb-md-3 mx-sm-0 p-0 border-0 cardy">
                    <img height="175" src={supermart} alt="" className="card-img-top"/>
                    <div className="card-body">
                        <h5 className="card-title mb-4">Shoprite</h5>
                        <p className="card-text" id="start">Delivery&nbsp;&bull;&nbsp;Pickup</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Stores