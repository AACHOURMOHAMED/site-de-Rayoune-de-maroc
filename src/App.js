
import './App.css';
import { Header } from './components/Header';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import { Fondation } from './components/Fondation';
import { Accueil } from './components/Accueil';
import { Footer } from './components/Footer';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (
    
    
    <Router>
    <Redirect from="/" to="/Accueil"/>
    <Header/>
     <Switch>
       <Route exact path="/Accueil" component={() => <Accueil />}/>
       <Route exact path="/Fondation" component={Fondation}/>
     </Switch>
     <Footer/>

    </Router>
    
  );
}

export default App;
