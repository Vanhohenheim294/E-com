import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Navbar() {
  return (
    <NavContainer>
        <span className='Logo'>LOGO</span>
        <ul className='navDiv'>
            <li> <Link to="/"> Home </Link> </li>
            <li>Panier</li>
            <li>Compte</li>
        </ul>
    </NavContainer>
  )
;}

export default Navbar;

const NavContainer = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: black;
    padding: 0 50px;
    z-index: 1;

    .Logo{
        width: fit-content;
        padding: 10px 15px;
        text-transform: uppercase;
        background: green;
    }

    .navDiv{
        flex: 0.4;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: pink;
        
        li{
            list-style: none;
            text-transform: capitalize;
        }
    }
`;