import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Landing from "./components/Landing";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Navigation />
          <Landing />
          <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
