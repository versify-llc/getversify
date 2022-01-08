import './App.css';
import Navbar from './Components/Navbar/Navbar.js';
import Footer from './Components/Footer/Footer.js';

function App() {
  return (
    <div className="cover-container d-flex w-100 h-100 mx-auto flex-column">
      <Navbar/>
      <div style={{height: '300px'}}></div>
      <Footer/>
    </div>

  );
}

export default App;
