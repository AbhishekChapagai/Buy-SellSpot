import React from 'react'
// import { Button } from '../ButtonElement'
import imgTwo from '../../images/addVehicle2.svg'
import { ImgWrap, Img, InfoBg, ImageInfo, InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ButtonLink2 } from '../InfoSection/InfoElements'

const InfoSectionTwo = ({ lightBg, id, imgStart, lightHeading, topLine, lightText, headline, darkText, description, buttonLabel, alt, primary, dark, dark2 }) => {
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
                                    <ButtonLink2 to="/addvehicle"
                                    // smooth={true}
                                    // duration={500}
                                    // spy={true}
                                    // exact="true"
                                    // offset={-80}
                                    // primary={primary ? 1 : 0}
                                    // dark={dark ? 1: 0}
                                    // dark2={dark2 ? 1 : 0}
                                    // 
                                    >{buttonLabel}</ButtonLink2>
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

export default InfoSectionTwo
