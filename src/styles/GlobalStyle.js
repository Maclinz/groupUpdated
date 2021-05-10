import {createGlobalStyle} from 'styled-components';


const GlobalStyle = createGlobalStyle`
    :root{
        --background-color: #235390;
        --background-white-color: #fff;
        --background-light-grey-color: #e5e5e53f;
        --blue-color: #1cb0f6;
        --green-color: #60E100;
        --green-color-dark: #51BF22;
        --blue-color-light: #26C0FF;
        --border-grey-color: #e5e5e5;
        --para-text-grey-color: #999;
        --para-text-grey-color-2: #afafaf;
        --para-text-grey-color-3: #4b4b4b;
        --para-heading-black-color: #3c3c3c;
    }
    
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    body::-webkit-scrollbar {
        width: 8px;
    }
    body::-webkit-scrollbar-track {
        background: var(--para-text-grey-color);
    }
    body::-webkit-scrollbar-thumb {
        background-color: #235390; 
        border-radius: 30px;     
    }
    body{
        /*background-color: #235390;*/
        background-color:var(--background-white-color) ;
        font-family: 'M PLUS Rounded 1c', sans-serif;
        color: white;
        .inner-content{
            padding: 1rem;
        }
        .black-p-heading{
            color: var(--para-heading-black-color);
            font-size: 22px;
            line-height: 4rem;
        }
        span{
            color: var(--blue-color);
        }
        h3{
            color: var(--para-heading-black-color);
        }
        .paragraph{
            color: var(--para-text-grey-color);
            line-height: 22px;
            padding: 1rem 0;
            font-size: 1.2rem;
        }
        .question{
            font-size: 3rem;
            letter-spacing: 1px;
        }

        //Answers Modal
        .modal-container{
            display: none;
        }
        .isOpen{
            display: block;
        }

        //Util Classes
        .u-h-m-top{
            margin-top: 2rem;
        }

        
    }

    
`;

export default GlobalStyle;