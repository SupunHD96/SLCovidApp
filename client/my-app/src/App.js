import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import Landing from "./components/Landing";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Navigation />
      <Landing/>
      <Footer/>
    </div>
  );
}

export default App;
