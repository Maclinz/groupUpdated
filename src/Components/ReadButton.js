import React from 'react'
import styled from 'styled-components';

function ReadButton({link}) {
    return (
        <ReadButtonStyled href={link}>Read More &nbsp; &rarr;</ReadButtonStyled>
    )
}

const ReadButtonStyled = styled.a`
    
    display: inline-block;
    display: flex;
    flex-direction: row-reverse;
    font-family: inherit;
    font-size: inherit;
    transition: all .4s ease-in-out;
    font-weight: 600;
    letter-spacing: 1px;
    color: var(--blue-color);
    &:hover{
        color: var(--green-color);
    }
`;


export default ReadButton;
