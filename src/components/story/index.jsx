import React from 'react';
import thirdImg from '../../assets/images/stay.webp'
import './style.scss'

const Story = () => {

    return (
        <div className='stay section container'>
            <div className="row">
                <div className="col-md-5">
                    <h4>STAY WITH OUR LUXURY ROOMS</h4>
                    <h1>Our Story</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus illo similique natus, a recusandae? Dolorum, unde a quibusdam est? Corporis deleniti obcaecati quibusdam inventore fuga eveniet! Qui delectus tempore amet!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus illo similique natus, a recusandae? Dolorum, unde a quibusdam est? Corporis deleniti obcaecati quibusdam inventore fuga eveniet! Qui delectus tempore amet!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus illo similique natus, a recusandae? Dolorum, unde a quibusdam est? Corporis deleniti obcaecati quibusdam inventore fuga eveniet! Qui delectus tempore amet!</p>
                </div>
                <div className="col-md-7 p-0 text-center">
                    <img src={thirdImg} alt="" className='mt-5' />
                </div>
            </div>
        </div>
    )
}
export default Story;