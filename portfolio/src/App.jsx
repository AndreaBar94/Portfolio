import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import About from './components/About';
import Contacts from './components/Contacts';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <About id="about-section"/>
      <Projects id="projects-section"/>
      <Skills id="skills-section"/>
      <Contacts id="contacts-section"/>
    </div>
  );
}

export default App;
