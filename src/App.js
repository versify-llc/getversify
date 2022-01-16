import './App.css';
import Navbar from './Components/Navbar/Navbar.js';
import Footer from './Components/Footer/Footer.js';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="cover-container d-flex w-100 h-100 mx-auto flex-column">
      <Navbar />
      <Home />
      <Footer />
    </div>

  );
}

export default App;
