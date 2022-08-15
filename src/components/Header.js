import React from 'react'
import '../asset/Header.css'
import copy from '../asset/images/copy.png'
import close from "../asset/images/close.png"


const Header = () => {
  return (
    <>
    <header className='text-light text-center sticky-top show alert alert-light'>
        <p className=''>First order, ₦0 delivery fee. Use promo code <span id='order' className='rounded-pill p-2'><img src={copy}/>FIRSTORDER</span> <span><img src= {close} alt="" className='close 'data-bs-dismiss="alert" aria-label='close' /></span></p>
    </header>
    </>
  )
  
}


export default Header;