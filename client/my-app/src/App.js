import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import Landing from "./components/Landing";
import Navigation from "./components/Navigation";
import M from 'materialize-css'
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Navigation />
      <div className="container App">
      <Landing/>
      <Footer/>
    </div>
    </div>
  );
}

export default App;
