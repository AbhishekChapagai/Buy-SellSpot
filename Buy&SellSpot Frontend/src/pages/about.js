import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const about = () => {

    return (
        <div>
            <Navbar></Navbar>
            <div className="aboutMain">
                <h1>ABOUT US</h1>
                <div className="aboutus">
                    <div className="aboutImage">

                    </div>
                    <div className="about">
                        <p>Buy&SellSpot Pvt. Ltd.</p>
                        <p>  116 Diyali Marg, Lazimpat, Kathmandu Nepal</p>
                        <p>  Tel: 4428849, 4006660</p>
                        <p>  Mob: 9842722414</p>
                        <p>  E: info@buyandsellspot.com</p>
                      <p>  Web: www.buyandsellspot.com</p>
                      <p>  30 years of experience in Automobile Industry.</p>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default about
