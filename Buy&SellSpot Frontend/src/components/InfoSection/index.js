import React from 'react'
// import { Button } from '../ButtonElement'
import img from '../../images/car.svg'
import { ImgWrap, Img, InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ButtonLink1 } from './InfoElements'

const InfoSection = ({ lightBg, lightHeading, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, alt, primary, dark, dark2 }) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine lightHeading={lightHeading}>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <BtnWrap>
                                    <ButtonLink1 to="/browsevehicle"
                                    >{buttonLabel}</ButtonLink1>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>

            </InfoContainer>
        </>
    )
}

export default InfoSection
