import './Nav.css'

export default function Nav() {
    return(
      <header>
        <nav>
          <ul id="nav">
            <li><a href="#bio" id="">Home</a></li>
            <li><a href="#cv">Currículo</a></li>
            <li><a href="">Portfólio</a></li>
          </ul>
          <div id="social-medial-links">
            <a href="https://github.com/mrafaelr">
              <img src="./github-mark-white.png" alt="The Github icon" className="social-media-icon" />
            </a>
            <a href="https://www.linkedin.com/in/rafael-monteiro-rodrigues-125439235/">
              <img src="./linkedin.png" alt="The Linkedin icon" className="social-media-icon" />
            </a>
          </div>
        </nav>
    </header>
    );
  }