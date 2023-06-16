import './App.css'
import Nav from './Nav.jsx'
import About from './About.jsx'
import Resume from './Resume.jsx'
import Decoration from './Decoration'

function App() {
    return (
    <div id="view">
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
