import React from 'react'
import styled from 'styled-components';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';

function FixedCard({title}) {
    return (
        <FixedCardStyled>
            <div className="inner-content">
                <h2 >
                    {title}
                </h2>
                <div className="buttons">
                    <PrimaryButton text={'Quizes Now'} link={'/quizes/setup'} />
                    <SecondaryButton text={'Read More!'} link={'https://www.jpl.nasa.gov/edu/teach/activity/whats-causing-sea-level-rise-land-ice-vs-sea-ice/'} />
                </div>
            </div>
        </FixedCardStyled>
    )
}

const FixedCardStyled = styled.div`
    border-radius: 2rem;
    border: 2px solid var(--border-grey-color);
    width: 80%;
    margin-left: 20%;
    margin-bottom: 2rem;
    @media screen and (max-width:750px){
        margin-left: 0;
        width: 100%;
    }
    @media screen and (max-width:500px){
        margin-left: 0;
        width: 100%;
    }
    h2{
        margin: 0;
        line-height: 2rem;
        color: var(--para-heading-black-color);
        font-size: 22px;
    }
    .inner-content{
        display: flex;
        justify-content: center;
        flex-direction: column;
        .buttons{
            width: 100%;
            padding: 1rem 0;
            a{
                width: 100%;
                text-align: center;
                &:not(:first-child){
                    margin-bottom: 1rem;
                    
                }
            }
        }
    }
`;


export default FixedCard;
