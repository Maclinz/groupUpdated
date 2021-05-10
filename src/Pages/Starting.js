import React from 'react';
import styled from 'styled-components';
import stars from '../img/star.svg';
import logo from '../img/logo3.svg';
import PrimaryButton from '../Components/PrimaryButton';
import {Route} from 'react-router-dom';

function Starting() {
    return (
        <StartingStyled>
            <CenterItemsStyled>
                <div className="logo">
                    <img src={logo} alt=""/>
                </div>
                <div className="right-content">
                    <h1>
                        Learn about how you can help to change
                        the World for <span>free</span>.
                    </h1>
                    <Route to="/home" exact>
                        <PrimaryButton text={'get started'} link={'/home'} />
                    </Route>
                </div>
            </CenterItemsStyled>
        </StartingStyled>
    )
}

const StartingStyled = styled.div`
    min-height: 100vh;
    background-image: url(${stars});
    width: 100%;
    background-color: var(--background-color);
`;

const CenterItemsStyled = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    width: 70%;
    .logo{
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        &::after{
            position: absolute;
            content: "";
            width: 125%;
            height: 125%;
            border-radius: 50%;
            background-color: #5FE102;
            z-index: -1;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            animation: scaler2 3s linear infinite;
            transform-origin: center;
            @keyframes scaler2{
                0%{
                    opacity: 0;
                    transform: translate(-50%, -50%);
                    transform-origin: center;
                    left: 50%;
                    top: 50%;
                    position: absolute;
                }
                50%{
                    opacity: 1;
                    transform: translate(-50%, -50%);
                    transform-origin: center;
                    left: 50%;
                    top: 50%;
                    position: absolute;
                    width: 100%;
                    height: 100%;
                }
                100%{
                    opacity: 0;
                    transform: translate(-50%, -50%);
                    transform-origin: center;
                    left: 50%;
                    top: 50%;
                    position: absolute;
                }
            }
        }
        &::before{
            position: absolute;
            content: "";
            width: 115%;
            height: 115%;
            border-radius: 50%;
            background-color: #1EB0F6;
            z-index: -1;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            animation: scaler 1s linear infinite;
            transform-origin: center;
            @keyframes scaler{
                0%{
                    opacity: 0;
                    transform: translate(-50%, -50%);
                    transform-origin: center;
                    left: 50%;
                    top: 50%;
                    position: absolute;
                }
                50%{
                    opacity: 1;
                    transform: translate(-50%, -50%);
                    transform-origin: center;
                    left: 50%;
                    top: 50%;
                    position: absolute;
                    width: 100%;
                    height: 100%;
                }
                70%{
                    background-color: red;
                }
                75%{
                    background-color: #1EB0F6;
                }
                100%{
                    opacity: 0;
                    transform: translate(-50%, -50%);
                    transform-origin: center;
                    left: 50%;
                    top: 50%;
                    position: absolute;
                }
            }
        }
        img{
            width: 20rem;
            animation: rotate 1s linear infinite;
            @keyframes rotate{
                0%{
                    transform: rotate(0deg);
                }
                50%{
                    transform: rotate(40deg);
                }
                100%{
                    transform: rotate(0deg);
                }
            }
        }
    }
    .right-content{
        margin-left: 4rem;
        display: flex;
        flex-direction: column;
        h1{
            font-size: 2.5rem;
            span{
                color: #60E100;
            }
        }
    }
`;
export default Starting;
