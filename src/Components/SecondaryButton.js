import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';


function SecondaryButton({text,link}) {
    return (
        <PrimaryButtonStyled to={link} >
            {text}
        </PrimaryButtonStyled>
    )
}

const PrimaryButtonStyled = styled(Link)`
    color: white;
    text-transform: uppercase;
    background-color: var(--blue-color);
    padding: .6rem 4rem;
    border-radius: .7rem;
    display: inline-block;
    position: relative;
    z-index: 4;
    font-family: inherit;
    box-shadow: 0 8px 0px var(--blue-color-light);
    font-weight: 600;
    letter-spacing: 1px;
    align-self: center;
    margin-top: 1rem;
    cursor: pointer;
    transition: all .3s ease-in-out;
    &:hover{
        background-color: #26C0FF;
        box-shadow: 0 8px 0px #1cb0f6;
        transform: translateY(-2px);
    }
    &:active{
        transform: translateY(3px);
    }
`;

export default SecondaryButton