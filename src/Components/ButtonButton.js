import React from 'react'
import styled from 'styled-components';

function ButtonButton({title}) {
    return (
        <StyledButtonButton>
            {title}
        </StyledButtonButton>
    )
}

const StyledButtonButton = styled.button`
    color: white;
    text-transform: uppercase;
    background-color: #60E100;
    padding: .6rem 4rem;
    border-radius: .7rem;
    display: inline-block;
    position: relative;
    z-index: 4;
    font-family: inherit;
    box-shadow: 0 8px 0px #51BF22;
    font-weight: 600;
    letter-spacing: 1px;
    align-self: center;
    margin-top: 1rem;
    cursor: pointer;
    transition: all .1s ease-in-out;
    outline: none;
    border: none;
    font-size: inherit;
    &:hover{
        background-color: #51BF22;
        box-shadow: 0 8px 0px #60E100;
        transform: translateY(-2px);
    }
    &:active{
        transform: translateY(2px);
    }
`;

export default ButtonButton;
