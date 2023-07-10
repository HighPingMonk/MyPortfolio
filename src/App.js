import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Main from './components/Main';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>

      <Main/>
<About/>
<Footer/>
    </div>
  );
}

export default App;
