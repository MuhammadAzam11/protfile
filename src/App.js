import logo from './logo.svg';
import './App.css';
import Header from './components/navbar/Header';
import Hero from './components/hero/Hero';
import Skill from './components/skills/Skill';
import Education from './components/education/Education';
import ContactMe from './components/contactme/ContactMe';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
    <Header/>
    <div className="contanier">
    <Hero/>
    <Skill/>
    <Education/>
    <ContactMe/>
    </div>
    <Footer/>
    </>
  );
}

export default App;
