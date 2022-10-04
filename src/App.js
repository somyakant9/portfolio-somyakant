import './App.css';
import About from './Components/About';
import Contacts from './Components/Contacts';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Welcome from './Components/Welcome';
import  Calender  from './Components/Calendar';

function App() {
  return (
    <div className="App">
     <Welcome/>
     <About/>
     <Projects/>
     <Skills/>
     <Calender/>
     <Contacts/> 
    </div>
  );
}

export default App;
