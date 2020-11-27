import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import { Route, Switch } from 'react-router-dom';
import Landing from "./components/Landing";
import Testing from "./components/Testing";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import Intro from './components/Intro/intro';


function App() {
  return (
    <div>
      <Navigation />
      <Switch>
      <div className="container App">
      <Route path="/intro" render={(props) => 
        <div>
          <Intro/>
          <Landing/>
        </div>
      }
      />
      <Route path="/testing" component={Testing} /> 
      <Footer/>
    </div>
    </Switch>
    </div>
  );
}

export default App;
