import React from 'react'
import styled from 'styled-components';
import ChoosePathCard from './ChoosePathCard';
import FixedCard from './FixedCard';
import Content from '../Components/Content';

function MainContent() {
    return (
        <MainContentStyled>
            <LeftContentStyled>
                <ChoosePathCard />
                <Content />
            </LeftContentStyled>
            <RightContentStyled>
                <FixedCard title={'Quizes now or Read more about climate!'} />
                
            </RightContentStyled>
        </MainContentStyled>
    )
}

const MainContentStyled = styled.main`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: 3rem 18rem;
    @media screen and (max-width:1406px){
        margin: 3rem 15rem;
    }
    @media screen and (max-width:1285px){
        margin: 3rem 10rem;
    }
    @media screen and (max-width:1000px){
        margin: 3rem 5rem;
    }
    @media screen and (max-width:750px){
        margin: 3rem 5rem;
        grid-template-columns: repeat(1, 1fr);
    }
    @media screen and (max-width:500px){
        margin: 3rem 2rem;
    }
`;
const LeftContentStyled = styled.section`  
    width: 100%;
`;
const RightContentStyled = styled.section`
    @media screen and (max-width:750px){
        grid-column-start: 1;
        grid-row-start: 1;
    }
`;

export default MainContent;
