import React from 'react';
import styled from 'styled-components';
import {useGlobalContext} from '../context';

function SetupForm() {
    const {quiz, handleChange, handleSubmit, error} = useGlobalContext();
    return (
        <SetupFormStyled >
            <div className="form-container">
                <form className="setup-form" id="my-form">
                    <h2>Quiz Setup</h2>
                    <div className="form-control">
                        <label htmlFor="amount">Number of Questions</label>
                        <input 
                            type="number" 
                            name="amount" 
                            id="amount" 
                            value={quiz.amount} 
                            onChange={handleChange} 
                            min={1} 
                            max={50} 
                        />
                    </div>
                    {/*Select Category */}
                    <div className="form-control">
                        <label htmlFor="category">Category</label>
                        <select name="category" id="category" 
                            value={quiz.category} 
                            onChange={handleChange} 
                        >
                            <option value="weather">Weather & Climate</option>
                            <option value="atmosphere">Atmosphere</option>
                            <option value="plants">Plants & Animals</option>
                        </select>
                    </div>
                    {/*Select Difficulty */}
                    <div className="form-control">
                        <label htmlFor="difficulty">Difficulty</label>
                        <select name="difficulty" id="difficulty" 
                            value={quiz.difficulty} 
                            onChange={handleChange} 
                        >
                            <option value="easy">Easy</option>
                            <option value="medium">Medium</option>
                            <option value="hard">Hard</option>
                        </select>
                    </div>


                    {error && <p>Cant generate questions, please try different options!</p>}
                    {/*<button type="submit" onClick={handleSubmit}>Start</button> */} 
                    
                </form>
            </div>
        </SetupFormStyled >
    )
}

const SetupFormStyled = styled.section`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 50%;
    height: 80%;
    color: var(--para-text-grey-color);
    transform: translate(-50%, -50%);
    border-bottom: 6px solid var(--border-grey-color);
    border-top: 2px solid var(--border-grey-color);
    border-left: 2px solid var(--border-grey-color);
    border-right: 2px solid var(--border-grey-color);
    border-radius: 10px;
    box-shadow: 0px 0px 0px rgba(0,0,0, 0.1);
    transition: all .4s ease-in-out;
    &:hover{
        box-shadow: 2px 5px 9px rgba(0,0,0, 0.1);
    }
    .form-container{
        width: 100%;
        height: 100%;
        padding: 2rem;
        display: flex;
        align-items: center;
        form{
            width: 100%;
        }
        h2{
            font-size: 2.5rem;
        }
        .form-control{
            display: flex;
            flex-direction: column;
            width: 70%;
            padding: .5rem 0;
            select, input {
                padding: .5rem 1rem;
                font-size: 1.1rem;
                border: 1px solid var(--border-grey-color);
                border-radius: 10px;
                color: var(--para-text-grey-color);
                cursor: pointer;
                &:active, &:focus{
                    outline: none;
                }
            }
            label{
                font-size: 1.2rem;
                color: var(--para-text-grey-color-3);
                padding-bottom: 1rem;
            }
        }
    }
`;

export default SetupForm
