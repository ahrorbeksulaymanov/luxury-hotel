import React from 'react';
import { Link } from 'react-router-dom';
import thirdImg from '../../assets/images/stay.webp'
import './style.scss'

const StayAndEnjoy = () => {

    return (
        <div className='stay section container'>
            <div className="row">
                <div className="col-md-5 text-center mt-5">
                    <h4>STAY WITH OUR LUXURY ROOMS</h4>
                    <h1>Stay and Enjoy</h1>
                    <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus illo similique natus, a recusandae? Dolorum, unde a quibusdam est? Corporis deleniti obcaecati quibusdam inventore fuga eveniet! Qui delectus tempore amet!</p>
                    <Link to='/about'>
                        <button className='btn-book'>MORE ANOUT US</button>
                    </Link>
                </div>
                <div className="col-md-7 p-0 mt-0 text-center">
                    <img src={thirdImg} alt="" />
                </div>
            </div>
        </div>
    )
}
export default StayAndEnjoy;