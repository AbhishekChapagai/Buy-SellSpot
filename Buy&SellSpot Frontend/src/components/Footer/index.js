import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialIconsLink, SocialLogo, SocialMediaWrap, SocialMedia, SocialIcons, WebsiteRights } from './FooterElements'

const Footer = () => {
    return (
        <div>
            <FooterContainer>
                <FooterWrap>
                    
                    <SocialMedia>
                        <SocialMediaWrap>
                            <SocialLogo to='/'>
                                buy&sellspot<i class="fas fa-feather-alt"></i>
                            </SocialLogo>
                            <WebsiteRights>buy&sellspot <i class="fas fa-feather-alt"></i> ©{new Date().getFullYear()}
                            All rights reserved.</WebsiteRights>
                            <SocialIcons>
                                <SocialIconsLink href="//www.facebook.com" target="_blank" aria-label="Facebook">
                                    <FaFacebook />
                                </SocialIconsLink>
                                <SocialIconsLink href="//www.instagram.com" target="_blank" aria-label="Instagram">
                                    <FaInstagram />
                                </SocialIconsLink>
                                <SocialIconsLink href="//www.youtube.com" target="_blank" aria-label="Youtube">
                                    <FaYoutube />
                                </SocialIconsLink>
                                <SocialIconsLink href="//www.twitter.com" target="_blank" aria-label="Twitter">
                                    <FaTwitter />
                                </SocialIconsLink>
                                <SocialIconsLink href="//www.linkedin.com" target="_blank" aria-label="Linkedin">
                                    <FaLinkedin />
                                </SocialIconsLink>
                            </SocialIcons>
                        </SocialMediaWrap>
                    </SocialMedia>
                </FooterWrap>
            </FooterContainer>
        </div>
    )
}

export default Footer
