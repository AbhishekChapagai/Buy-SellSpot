import React, { useState } from 'react'
// import Video from '../../videos/video1.mp4';
import Video from '../../images/car11.jpg';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight, ImageBg } from './HeroElements'
import { Button } from '../ButtonElement';

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
    return (
        <HeroContainer>
            <HeroBg>
                <ImageBg
                    // autoPlay loop muted 
                    src={Video}
                    type='image/jpg' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Buying and selling vehicles now made easy.</HeroH1>
                <HeroP>Find your ideal vehicle here on buy&sellspot <i class="fas fa-feather-alt"></i>.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover} primary='true'>
                        GET STARTED {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
