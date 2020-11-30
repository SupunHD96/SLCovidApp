import './App.css';
import { Route, Switch,BrowserRouter } from 'react-router-dom';
import Landing from "./components/Landing";
import Testing from "./components/Testing";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div>
      <BrowserRouter >
        <Navigation />
        <Switch>
          <Route path="/intro" component={Landing} />
          <Route path="/testing" component={Testing} /> 
        </Switch>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
