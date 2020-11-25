import './App.css';
import Landing from "./components/Landing";
import Navigation from "./components/Navigation";
import M from 'materialize-css'


function App() {
  return (
    <div>
    <Navigation />
    <div className="container App">
      <Landing />
    </div>
    </div>
  );
}

export default App;
