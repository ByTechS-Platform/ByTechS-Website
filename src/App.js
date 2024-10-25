import './App.scss';
import ContactUs from './Components/ContactUs';
import Hero from './Components/Hero';
import NavBar from './Components/NavBar';
import News from './Components/News';
import SideNav from './Components/SideNav';

function App() {

  return (
    <div className="App">
      <NavBar />
      <Hero />
      <ContactUs />
      <News />
    </div>
  );
}

export default App;
