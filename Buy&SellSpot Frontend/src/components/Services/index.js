import React from 'react'
import Icon1 from '../../images/price.svg'
import Icon2 from '../../images/car.svg'
import Icon3 from '../../images/signup.svg'
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements'
const Services = () => {
    return (
        <ServicesContainer id="Services">
            <ServicesH1>OUR SERVICES <i class="fas fa-feather-alt"></i></ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} alt='hello' />
                    <ServicesH2>DESIRED PRICING</ServicesH2>
                    <ServicesP>We here allow you to sell your vehicles at your desired price.
                    </ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>NEW AND USED CARS</ServicesH2>
                    <ServicesP>You can browse through tons of vehicle added for sale. </ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>BECOME A MEMBER</ServicesH2>
                    <ServicesP>Become a member  and take full premium facility.</ServicesP>
                </ServicesCard>

            </ServicesWrapper>

        </ServicesContainer>
    )
}

export default Services
