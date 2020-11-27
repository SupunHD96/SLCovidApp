import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import Landing from "./components/Landing";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import Intro from './components/Intro/intro';


function App() {
  return (
    <div>
      <Navigation />
      <Intro/>
      <Landing/>
      <Footer/>
    </div>
  );
}

export default App;
