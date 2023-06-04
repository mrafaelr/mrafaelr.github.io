import './About.css'


function Bio() {
    return(
      <div id="bio">
        <h1>Olá! Eu sou <span id="name">Rafael</span>,</h1>
        <h2>cientista da computação e desenvolvedor.</h2>
        <p>Tutor de seis gatos (todos adotados). Extremamente curioso sobre como as coisas funcionam, poliglota, amante da leitura, da música e da boa comida.</p>
        <p>Venha conhecer mais sobre mim no meu <a href="">currículo</a></p>
        <p>ou dê uma olhada no meu <a href="">portfólio</a></p>
      </div>
    );
  }
  
export default function About() {
    return(
      <section id="about-content">
        <img src="./src/assets/rock.webp" alt="" id="headshot" />
        <Bio />
      </section>
    );
  }