import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import Landing from "./components/Landing";
import Navigation from "./components/Navigation/Navigation";
import Safety from "./components/Safety/Safety";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
          <Navigation />
          <Landing />
          <Footer/>
    </div>
  );
}

export default App;
