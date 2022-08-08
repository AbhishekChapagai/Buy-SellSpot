import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
    background: #222222;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    top: 0;
    z-index: 10;
    // border-bottom: 1px solid #f1c935;

    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`;

export const NavLogo = styled(Link)`
color: #f1c935;
justify-self: flex-start;
letter-spacing: 5px;
cursor: pointer;
font-size: 1.5rem;
display: flex;
align-items: center;
margin-left: -5px;
font-weight: bold;
text-decoration: none;
font-family: 'Cedarville Cursive', cursive;


`;

export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 830px){
    display: block;
    position: absolute;
    top: 10;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #f1c935;
}
`
export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;
margin-left: -10px;


@media screen and (max-width: 815px){
    display: none;
}

`

export const NavItem = styled.li`
height: 80px;

`

export const NavLinks = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;

    &:hover{
        color: #f1c935;
        transform: scale(1.1);
        transition: all 0.2s ease-in-out;


    }
 

`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 815px){
        display: none;
    }

`

export const NavBtnLink = styled(Link)`
background-color: #f1c935;
color: #222222;
font-weight: bold;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 40%;
cursor: pointer;
border-radius: 5px;
font-family: 'Montserrat', sans-serif;
border-right: 1px solid #222222;
border-left: 1px solid #222222;

&:hover{
    color: #fff;
    transform: scale(1.1);
    transition: all 0.2s ease-in-out;


}
`
export const NavBtnLinkLogout = styled(Link)`
background-color: steelblue;
color: #222222;
// font-weight: bold;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 40%;
cursor: pointer;
border-radius: 5px;
font-family: 'Montserrat', sans-serif;
border-right: 1px solid #222222;
border-left: 1px solid #222222;

&:hover{
    color: #fff;
    transform: scale(1.1);
    transition: all 0.2s ease-in-out;


}
`