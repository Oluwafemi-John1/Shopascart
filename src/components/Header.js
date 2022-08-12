import React from 'react'
import '../asset/Header.css'
import copy from '../asset/images/copy.png'

const Header = () => {
  return (
    <>
    <header className='text-light text-center'><p>First order, ₦0 delivery fee. Use promo code <span id='order' className='rounded-pill p-2'><img src={copy}/>FIRSTORDER</span></p></header>
    </>
  )
}

export default Header;