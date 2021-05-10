import React from 'react'
import styled from 'styled-components';

function ChoosePathCard() {
    return (
        <PathCardStyled>
            <div className="inner-content">
                <h2 className="black-p-heading">
                    Are you <span>Eager</span> to learn?
                </h2>
                <p className="paragraph">
                    Learn about climate from 0. <br/>
                    Advanced learners take a short test.
                </p>
            </div>
        </PathCardStyled>
    )
}

const PathCardStyled = styled.div`
    border-radius: 2rem;
    border: 2px solid #e5e5e5;
    height: 20rem;
    width: 100%;
    .inner-content{
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;
        p{
            text-align: center;
            line-height: 1.7rem;
        }
    }
`;

export default ChoosePathCard;
