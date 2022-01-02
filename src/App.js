
import './App.css';
import { Header } from './components/Header';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import { Fondation } from './components/Fondation';
import { Accueil } from './components/Accueil';
import { Footer } from './components/Footer';

function App() {
  return (
    <Router>
      <Header/>
     <Switch>
       <Route path="/Accueil" component={Accueil}/>
       <Route path="/Fondation" component={Fondation}/>
     </Switch>
     <Footer/>

    </Router>
    
  );
}

export default App;
