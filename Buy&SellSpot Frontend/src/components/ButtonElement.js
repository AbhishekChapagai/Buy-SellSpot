import styled from 'styled-components'
import { Link } from 'react-scroll'

export const Button = styled(Link)`
border-radius: 50px;
background: ${({ primary }) => (primary ? '#f1c935' : '#fff')};
white-space: nowrap;
padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
// color:${({ dark }) => (dark ? '#f1c935' : '#fff')};
color: #222222;
font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
outline: none;
border: none;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
transition: all 0.2s ease-in-out;
font-family: 'Montserrat', sans-serif;
font-weight: bold;

&:hover {
transition: all 0.2s ease-in-out;
background: ${({ primary }) => (primary ? '#f9f9f9' : '#f1c935')};
transform: scale(1.05);
color: #f1c935; 
}
`

