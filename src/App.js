import './App.css';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Hero from './components/Hero/hero';
import Info from './components/Info/info';
import Avis from './components/Avis/avis';

function App() {
  return (
    <div className="App">
    <Header/>
    <Hero/> 
    <Info/>
    <Avis/>  
   <Footer/> 
    </div>
  );
}

export default App;
