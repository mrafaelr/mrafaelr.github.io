import './About.css'


function Bio() {
    return(
      <div id="bio">
        
        <h1>Olá! Eu sou <span id="name">Rafael</span>,</h1>
        <h2>cientista da computação e desenvolvedor.</h2>
        <p id="bio-paragraph">
          Sou apaixonado por 
          explorar as fronteiras da tecnologia e criar soluções inovadoras. Minha paixão 
          por animais, especialmente gatos, reflete minha natureza curiosa e atenciosa, 
          características que acredito serem essenciais tanto na minha vida profissional 
          quanto pessoal. Além da minha dedicação à tecnologia, sou um ávido leitor e 
          aprecio mergulhar em diferentes gêneros literários, o que me ajuda a expandir 
          minha perspectiva e criatividade. A música e os idiomas também desempenham um 
          papel significativo em minha vida, pois acredito que a arte e a comunicação 
          são fundamentais para a conexão humana. Estou sempre em busca de oportunidades 
          para aprender e crescer, e estou confiante de que minha paixão, conhecimento e 
          habilidades me tornam um profissional inteligente, dedicado e capaz de contribuir 
          de forma significativa em um ambiente de trabalho inspirador.</p>
        <p>Venha conhecer mais sobre mim no meu <a href="#resume">currículo</a></p>
        <p>ou dê uma olhada no meu <a href="">portfólio</a></p>
      </div>
    );
  }
  
export default function About() {
    return(
      <section id="about-content">
        <hr />
        <img src="./pic.png" alt="" id="headshot" />
        <Bio />
      </section>
    );
  }