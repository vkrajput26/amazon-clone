import logo from './logo.svg';
import './App.css';
import { Landing } from './pages/Landing';
import { Navbar } from './Components/Common/Navbar/Navbar';
import { Footer } from './Components/Common/footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
     <Landing/>
     <Footer/>
    </div>
  );
}

export default App;
