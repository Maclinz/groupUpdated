import React from 'react'
import styled from 'styled-components';
import MainContent from '../Components/MainContent';
import Navigation from '../Components/Navigation';

function MainPage() {
    return (
        <MainPageStyled>
            <Navigation />
            <div className="main-content">
                <MainContent />
            </div>
        </MainPageStyled>
    )
}

const MainPageStyled = styled.div`
    min-height: 100vh;
    width: 100%;
    background-color: var(--background-white-color);
`;
export default MainPage;
