import React from 'react';
import './style.scss'
import { FaFacebookF, FaTwitter, FaVimeoV, FaYoutube } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'

const FooterC = () => {

    return (
        <div className='footer-wrapper'>
            <div className='container'>
                <div className="row">
                    <div className="col-md-4 mb-3">
                        <h3>PHONE SUPPORT</h3>
                        <p>24/7 Call us now.</p>
                        <a href="tel:+998930085504">+998 93 008 55 04</a>
                    </div>
                    <div className="col-md-4 mb-3">
                        <h3>CONNECT WITH US</h3>
                        <p>We are socialized. Follow us</p>
                        <a href="#" className='sotial-link'>
                            <FaFacebookF />
                        </a>
                        <a href="#" className='sotial-link'><FaTwitter /></a>
                        <a href="#" className='sotial-link'><AiFillInstagram /></a>
                        <a href="#" className='sotial-link'> <FaVimeoV /></a>
                        <a href="#" className='sotial-link'><FaYoutube /></a>
                    </div>
                    <div className="col-md-4 mb-3">
                        <h3>CONNECT WITH US</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, odio.</p>
                        <div className='input-warpper'>
                            <HiOutlineArrowNarrowRight className='input-icon' />
                            <input type="text" placeholder='Enter email' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FooterC;