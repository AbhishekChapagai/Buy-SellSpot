import { render } from '@testing-library/react';
import React from 'react';
import { FaBars } from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink, NavBtnLinkLogout } from './NavbarElements';
import { ToastContainer, toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();


function Navbar({ toggle }) {

    const logout = () => {
        localStorage.clear();

        toast.info('Logout Successful', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            transition: Flip,
        });
    };

    const token = localStorage.getItem('token');
    console.log(token);

    return !token ? (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">
                        Buy&SellSpot <i class="fas fa-feather-alt"></i>
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='/browsevehicle'>Browse Vehicles</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/addvehicle'>Add Vehicle</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/about'>About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/signup'>Sign Up</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to='/signin'>SIGN IN &nbsp;<i class="fas fa-sign-in-alt"></i></NavBtnLink>
                    </NavBtn>

                </NavbarContainer>
            </Nav>
        </>
    )
        : (
            <>
                <Nav>
                    <NavbarContainer>
                        <NavLogo to="/">
                            buy&sellspot <i class="fas fa-feather-alt"></i>
                        </NavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks to='/browsevehicle'>Browse Vehicles</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='/addvehicle'>Add Vehicle</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='/about'>About</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='/myvehicle'>My Vehicle</NavLinks>
                            </NavItem>


                        </NavMenu>
                        <NavBtn>
                            <NavBtnLink to='/profile'><i class="fas fa-user"></i></NavBtnLink>
                            <NavBtnLinkLogout to='/signin' onClick={logout}>logout&nbsp;<i class="fas fa-sign-out-alt"></i></NavBtnLinkLogout>
                        </NavBtn>

                    </NavbarContainer>
                </Nav>
            </>
        );

}

export default Navbar;

