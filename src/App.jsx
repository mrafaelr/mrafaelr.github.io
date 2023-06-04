import './App.css'
import Nav from './Nav.jsx'
import About from './About.jsx'
import Resume from './Resume.jsx'

/*
function Decoration() {
  return(
    <>
      <div id="ball1"></div>
    </>
  );
}
*/

function App() {
    return (
    <div>
      <Nav></Nav>
      <About></About>
      <hr></hr>
      <Resume></Resume>
      <hr></hr>
    </div>
    );
}

export default App
