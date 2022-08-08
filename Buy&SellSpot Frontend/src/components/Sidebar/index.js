import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute} from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='/browsevehicle' onClick={toggle}>Browse Vehicles</SidebarLink>
                    <SidebarLink to='/addvehicle' onClick={toggle}>Add Vehicle</SidebarLink>
                    <SidebarLink to='/about' onClick={toggle}>About</SidebarLink>
                    <SidebarLink to='/signup' onClick={toggle}>Sign Up</SidebarLink>
                </SidebarMenu>

                <SideBtnWrap>
                    <SidebarRoute to= '/signin'>SIGN IN</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
