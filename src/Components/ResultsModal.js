import React from 'react'
import styled from 'styled-components';
import {useGlobalContext} from '../context';
import ButtonButton from './ButtonButton';
import Navigation from '../Components/Navigation';

function ResultsModal() {
    const {isModalOpen, closeModal, correct, questions} = useGlobalContext();
    return (
        <ResultsModalStyled className={`end-modal ${isModalOpen ? 'modal-container isOpen': 'modal-container'}`}>
            <Navigation />
            <div className="modal-content">
                <div className="modal-data">
                    <h2>Well Done, You have completed your questions!</h2>
                    <p>You have answered <span> {((correct / questions.length) *100).toFixed(0)}</span> % correct. </p>
                    
                    <div className="play-btn" onClick={closeModal}>
                        <ButtonButton title={'Play Again'} />
                    </div>
                </div>
            </div>
        </ResultsModalStyled>
    )
}

const ResultsModalStyled = styled.section`
    height: 100vh;
    width: 100%;
    background-color: slateblue;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    background-color: var(--background-white-color);
    .modal-content{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        h2{
            color: var(--para-text-grey-color-3);
            font-size: 2.5rem;
        }
        p{
            padding: 2rem 0;
            font-size: 2rem;
            color: var(--para-text-grey-color);
        }
    }
`;

export default ResultsModal;
