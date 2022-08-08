import React, {useState} from 'react'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import InfoSectionTwo from '../components/InfoSectionTwo'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import {homeObjOne} from '../components/InfoSection/Data';
import {homeObjTwo} from '../components/InfoSection/Data';
import {homeObjThree} from '../components/InfoSection/Data';
import Services from '../components/Services'
import InfoSectionThree from '../components/InfoSectionThree'
import Footer from '../components/Footer'

const Home = () => {
const[isOpen, setIsOpen] = useState(false)

const toggle = () => {
    setIsOpen(!isOpen)
}


    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection/>
            <InfoSection {...homeObjOne}/>
            <InfoSectionTwo {...homeObjTwo}/>
            <Services/>
            <InfoSectionThree {...homeObjThree}/>
            <Footer/>
        </>
    )
}

export default Home;
