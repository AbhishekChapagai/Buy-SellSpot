import React from 'react'
// import { Button } from '../ButtonElement'
import imgTwo from '../../images/about.svg'
// import {Link} from 'react-router-dom'
import { ImgWrap, Img, InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ButtonLink3 } from '../InfoSection/InfoElements'

const InfoSectionThree = ({ lightHeading, lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, alt, primary, dark, dark2 }) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper >
                                <TopLine lightHeading={lightHeading}>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <BtnWrap>
                                    <ButtonLink3 to="/about">
                                        {/* // smooth={true}
                            // duration={500}
                            // spy={true}
                            // exact="true"
                            // offset={-80}
                            // primary={primary ? 1 : 0}
                            // dark={dark ? 1: 0}
                            // dark2={dark2 ? 1 : 0}
                            //  */}
                                        {buttonLabel}</ButtonLink3>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={imgTwo} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>

            </InfoContainer>
        </>
    )
}

export default InfoSectionThree
