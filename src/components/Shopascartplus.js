import React from 'react'
import "../asset/Shopascartplus.css"

const Shopascartplus = () => {
  return (
    <>
    <div className="container-fluid" id='cartplus'>
        <div className="row mx-auto my-1">
            <p className='text-center'>SHOPASCART+</p>
            <h3 className="text-center">The best way to save money on grocery shopping</h3>
            <p className="text-center">Choose a plan that fits your shopping needs and get started.</p>
            <div className="border border-danger w-25 mx-auto p-3 rounded-3" id='plus'>
                <h6 className="text-center fw-bold">Shopascart Plus</h6>
                <p className="text-center">Unlimited delivery on orders over ₦5000</p>
                <h3 className='text-center mb-4'>₦3000/month or ₦25000/year</h3>
                <a href="" className="text-decoration-none">
                    <div className="mx-auto border rounded-pill p-2 text-center bg-light fw-bold my-3">Get Shopascart Plus</div>
                </a>
            </div>
            <p className="text-center mt-3">Deliveries under ₦5000 with or without a Shopascart+ membership will incur a ₦1800 fee <br /> and applicable taxes and service fees per order.</p>
        </div>
    </div>
    </>
  )
}

export default Shopascartplus