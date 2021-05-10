import React from 'react'
import styled from 'styled-components';
import PrimaryButton from '../Components/PrimaryButton';
import {useGlobalContext} from '../context';
import {PrimaryButtonStyled} from '../Components/PrimaryButton';
import ButtonButton from '../Components/ButtonButton';
import ResultsModal from '../Components/ResultsModal';
import SetupForm from '../Components/SetupForm';

function QuizSetup() {
    const {isWaiting,loading,questions,index,correct, nextQuestion, checkAnswer, handleSubmit } = useGlobalContext();
    if(isWaiting){
        return (
            <QuizSetupStyled>
                <div className="quiz-content">
                    <SetupForm />
                </div>
                <div className="button-con">
                    <button type="submit" form="my-form" onClick={handleSubmit}>start</button>
                </div>
            </QuizSetupStyled>
        )
    }
    if(loading){
        return <h1>Its Loading...</h1>
    }
        const{question,incorrect_answers, correct_answer} = questions[index];
        //const answers = [...incorrect_answers,correct_answer]
        let answers = [...incorrect_answers];
        const randomAnswer = Math.floor(Math.random() * 4);
        if(randomAnswer === 3){
            answers.push(correct_answer);
        }else{
            answers.push(answers[randomAnswer]);
            answers[randomAnswer] = correct_answer;
        }
        return <main className="u-modal">
            <ResultsModal />
            <QuizSetupStyled>
                <section className="quiz-content">
                    <div className="quizzes">
                        <div className="question-index">
                            <p className="correct-answers">
                                Correct Answers: <span>{correct} / <span className="qs">{index}</span></span>
                            </p>
                        </div>
                        <article className="quizzes-con">
                            <h2 className="black-p-heading question">{question}</h2>
                        </article>
                        <div className="answers">
                            <div className="answer-image"></div>
                            <div className="answer">
                                {answers.map((answer, index)=>{
                                    return <AnswerButtonStyled text={'Next Question'} key={index} onClick={() => checkAnswer(correct_answer === answer)} ><span>{index + 1}</span>{answer}</AnswerButtonStyled>
                                })}
                            </div>
                        </div>
                    </div>
                </section>
                <div className="button-con">
                    <div className="next-btn" onClick={nextQuestion}>
                        <ButtonButton title={'Next Question'} />
                    </div>
                </div>
            </QuizSetupStyled>
        </main>
    }

export const QuizSetupStyled = styled.div`
    min-height: 100vh;
    background-color: white;
    width: 100%;
    .question-index{
        p{
            color: var(--blue-color);
            font-size: 1.5rem;
            border-bottom: 6px solid var(--border-grey-color);
            border-top: 2px solid var(--border-grey-color);
            border-left: 2px solid var(--border-grey-color);
            border-right: 2px solid var(--border-grey-color);
            display: inline-block;
            padding: .5rem .9rem;
            position: absolute;
            right: 0;
            top: 0;
            border-radius: 10px;
            cursor: pointer;
            transition:all .4s ease-in-out;
            &:hover{
                color: var(--green-color-dark);
            }
            span{
                color: var(--para-text-grey-color);
            }
            .qs{
                font-size: 2rem;
            }
        }
    }
    .quiz-content{
        min-height: 80vh;
        position: relative;
        overflow-y: scroll;
        
        @media screen and (max-width:845px){
            overflow-y: scroll;
        }
        ::-webkit-scrollbar {
            width: 8px;
        }
        ::-webkit-scrollbar-track {
            background: var(--para-text-grey-color);
        }
        ::-webkit-scrollbar-thumb {
            background-color: #235390; 
            border-radius: 30px;     
        }
        .quizzes{
            position: absolute;
            width: 80%;
            height: 80%;
            left: 50%;
            top: 45%;
            transform: translate(-50%, -50%);
            text-align: center;
            .question-index{
                display: block;
                padding: 4rem 0;
            }
            .answer{
                display: grid;
                height: 100%;
                grid-gap: .8rem;
                margin-top: 4rem;
                padding-bottom: 2rem;
                @media screen and (max-width:762px){
                    padding-bottom: 2rem;
                }
            }
            @media screen and (max-width:762px){
                h2{
                    line-height: 3rem;
                }
            }
            @media screen and (max-width:600px){
                h2{
                    font-size: 2.8rem;
                }
            }
        }
    }

    .button-con{
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 20vh;
        border-top: 2px solid var(--border-grey-color);
        button{
            color: white;
            text-transform: uppercase;
            background-color: var(--green-color);
            padding: .6rem 4rem;
            border-radius: .7rem;
            display: inline-block;
            position: relative;
            z-index: 4;
            font-family: inherit;
            box-shadow: 0 8px 0px var(--green-color-dark);
            font-weight: 600;
            letter-spacing: 1px;
            align-self: center;
            font-size: inherit;
            margin-top: 1rem;
            cursor: pointer;
            transition: all .3s ease-in-out;
            outline: none;
            border: none;
            &:hover{
                background-color: var(--green-color-dark);
                box-shadow: 0 8px 0px var(--green-color);
                transform: translateY(-2px);
            }
            &:active{
                transform: translateY(3px);
            }
        }
    }
`;

const AnswerButtonStyled = styled.button`
    border: 2px solid var(--border-grey-color);
    padding: 1rem 2rem;
    cursor: pointer;
    outline: none;
    font-family: inherit;
    box-shadow: 0 4px 0px var(--border-grey-color);
    font-weight: 600;
    letter-spacing: 1px;
    background-color: var(--background-white-color);
    border-radius: 10px;
    position: relative;
    transition: all .2s ease-in-out;
    color: var(--para-text-grey-color-3);
    &:hover{
        background-color: var(--background-light-grey-color);
    }
    span{
        position: absolute;
        left: 2%;
        border: 1px solid var(--border-grey-color);
        padding: .2rem .4rem;
        top: 50%;
        transform: translateY(-50%);
        border-radius: 6px;
        color: var(--para-text-grey-color-2);
    }
`;

export default QuizSetup;
