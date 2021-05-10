import React, {useState, useEffect, useContext} from 'react';
import allQuestions from './data/questions';



const data = allQuestions;

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    //Display Question Setup Form is waiting is true
    const [isWaiting, setIsWaiting] = useState(true);
    const [loading, setLoading] = useState(false);
    const [questions, setQuestions] = useState([]);
    const [index, setIndex] = useState(0);
    const [correct, setCorrect] = useState(0);
    const [error, setError] = useState(false);
    const [quiz, setQuiz] = useState({
        amount: 10,
        category: 'atmosphere',
        difficulty: 'easy'
    });
    const [isModalOpen, setIsModalOpen] = useState(false);

    const fetchQuestions = (qData) => {
        setLoading(true);
        setIsWaiting(false);

        const response = qData;
        
        if (response){
            const data = response;
            if(data.length > 0){
                setQuestions(data);
                setLoading(false);
                setIsWaiting(false);
                setError(false);
            }else{
                setIsWaiting(true);
                setError(true);
            }
        }else{
            setIsWaiting(true);
        }
    }

    const nextQuestion = () => {
        setIndex((oldIndex) =>{
            const index = oldIndex + 1;
            if(index > questions.length -1){
                //Open Completion Madal
                openModal();
                return 0;    
            }else{
                return index;
            }
            
        })
    }

    //Check Answer
    const checkAnswer = (value) =>{
        if(value){
            setCorrect((currentState)=>{
                return currentState + 1;
            })
        }
        nextQuestion();
    }

    //Open and Close Modal Function
    //Open Modal
    const openModal = () =>{
        setIsModalOpen(true);
    }
    const closeModal = () =>{
        setIsWaiting(true);
        setCorrect(0);
        setIsModalOpen(false);
    }

    const handleChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        
        setQuiz({...quiz, [name]:value})
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        const {amount,category, difficulty} = quiz;

        
        fetchQuestions(data);
        
    }

    return <AppContext.Provider value={{
        isWaiting,
        loading,
        questions,
        index,
        correct,
        error,
        isModalOpen,
        nextQuestion,
        checkAnswer,
        closeModal,
        quiz,
        handleChange,
        handleSubmit
        }}
        >
        {children}
        </AppContext.Provider>
}

export const useGlobalContext = () =>{
    return useContext(AppContext)
}

export {AppContext, AppProvider}