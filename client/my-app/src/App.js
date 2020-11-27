import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from "./components/Landing";
import Testing from "./components/Testing";
import M from 'materialize-css'
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import Intro from './components/Intro/intro';


function App() {
  return (
    <div>
      <Navigation />
      <Switch>
      <div className="container App">
      <Route path="/intro" component={Intro} /> 
      <Route path="/testing" component={Testing} /> 
      <Route path="/landing" component={Landing}/> 
      <Footer/>
    </div>
    </Switch>
    </div>
  );
}

export default App;
