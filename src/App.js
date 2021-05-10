import Starting from "./Pages/Starting";
import MainPage from "./Pages/MainPage";
import {Route, Switch} from 'react-router-dom';
import QuizSetup from "./Pages/QuizSetup";
import {useGlobalContext} from './context';



function App() {
  

  return (
    <div className="App">
      
      <Switch>
        <Route path="/" exact>
          <Starting />
        </Route>
        <Route path="/home" exact>
          <MainPage />
        </Route>
        <Route path="/quizes/setup" exact>
          <QuizSetup />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
