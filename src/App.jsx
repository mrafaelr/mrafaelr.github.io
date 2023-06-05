import './App.css'
import Nav from './Nav.jsx'
import About from './About.jsx'
import Resume from './Resume.jsx'


function Decoration() {
  return(
    <>
      <div id="ball1"></div>
    </>
  );
}


function App() {
    return (
    <div>
      <Decoration />
      <Nav></Nav>
      <About></About>
      <hr />
      <Resume></Resume>
      <hr />
    </div>
    );
}

export default App
