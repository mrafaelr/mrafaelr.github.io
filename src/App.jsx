import './App.css'
import {About} from './About.jsx'

function Nav() {
  return(
    <nav>
      <ul id="nav">
        <li><a href=""></a>Home</li>
        <li><a href=""></a>Currículo</li>
        <li><a href=""></a>Projetos</li>
      </ul>
    </nav>
  );
}


function App() {
    return (
    <>
      <Nav></Nav>
      <About></About>
    </>
  )
}

export default App
