import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from "./components/Landing";
import Testing from "./components/Testing";
import Navigation from "./components/Navigation";
import M from 'materialize-css'
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Navigation />
      <Switch>
      <div className="container App">
      <Route path="/testing" component={Testing} /> 
      <Route path="/landing" component={Landing}/> 
      <Footer/>
    </div>
    </Switch>
    </div>
  );
}

export default App;
