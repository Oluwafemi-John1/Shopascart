import React from 'react'
import apple from "../asset/images/download_on_app_store_image.svg"
import google from "../asset/images/get_it_on_google_image.svg"
import "../asset/Social.css"

const Social = () => {
  return (
    <>
    <div className="container-fluid Social">
        <h3 align="center">Shop on the go</h3>
        <p align="center" className='mt-1 fs-5' style={{color:"#808181"}}>Get the best Shopascart experience all in one app.</p>
        <div className="d-flex justify-content-center">
            <a href="" className=''><img className='socimg' src={apple} alt="" /></a>
            <a href="" className='ms-3'><img className='socimg' src={google} alt="" /></a>
        </div>

    </div>
    </>
  )
}

export default Social