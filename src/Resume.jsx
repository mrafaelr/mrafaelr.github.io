import "./Resume.css"



export default function Resume() {
    return (
        <section >
            <h1>Curriculum vitae</h1>
            <div id="resume">
                <div className="resume-column">
                    <h2><span className="decorative-pink">-</span> Educação <span className="decorative-pink">-</span></h2>
                    <ul>
                        <li>
                            <b>Bacharelado em ciência da computação</b>,<br /> 
                            <i>Universidade de Brasília</i>.
                        </li>
                    </ul>
                    <h2><span className="decorative-pink">-</span> Experiência profissional <span className="decorative-pink">-</span></h2>
                    <ul>
                        <li>
                            <span className="decorative-pink">02/22</span> a <span className="decorative-pink">02/23</span> <br /> 
                            <b>Cientista de dados</b>, <i>Triágil</i>, estágio. <br /><br /> 
                            Desempenhei um papel fundamental na análise e processamento de <br />
                            dados relacionados à saúde, utilizando técnicas avançadas de 
                            modelagem de sistemas de machine learning. Fui responsável pela 
                            implementação e manutenção de eficientes pipelines de processamento 
                            de dados em Python, garantindo a qualidade e integridade dos dados 
                            em todo o processo. Ao aplicar minhas habilidades analíticas e 
                            conhecimentos técnicos, obtive resultados ignificativos ao 
                            identificar padrões e insights relevantes para aprimorar as 
                            estratégias de tomada de decisão da equipe.
                        </li><br />
                        <li>
                        <span className="decorative-pink">06/21</span> a <span className="decorative-pink">11/21</span> <br />
                            <b>Desenvolvedor web full stack</b>, <i>Trion 3D</i>, estágio. <br /><br />
                            Exerci o cargo de desenvolvedor, onde meu foco principal 
                            foi o desenvolvimento de sistemas web, mobile e de gestão 
                            de informação organizacional. Utilizei tecnologias avançadas, 
                            como React, Reactive Native, PostgreSql, Express, Node.js e AWS, 
                            para criar soluções inovadoras e escaláveis. Minha contribuição 
                            abrangeu desde a concepção e design até a implementação dos sistemas, 
                            garantindo a entrega de produtos de alta qualidade. Ao enfrentar 
                            desafios complexos, demonstrei minha capacidade de resolver problemas 
                            de maneira eficiente e adaptar-me a diferentes requisitos de projeto.
                        </li><br />
                        <li>
                        <span className="decorative-pink">02/16</span> a <span className="decorative-pink">12/16</span> <br />
                            <b>Desenvolvedor web full stack</b>, <i>Higgs Boson</i>, estágio. <br /><br />
                            Desenvolvi plataformas de e-commerce com foco em usabilidade e 
                            funcionalidade, utilizando PHP, Laravel, MySql, Open Cart e Bootstrap. 
                            Minha expertise na construção dessas soluções resultou em interfaces 
                            intuitivas e eficientes para os usuários. Além disso, atuei como 
                            tradutor, realizando a tradução de artigos técnicos, empresariais 
                            e documentação de sistemas de informação do inglês para o português. 
                            Com minhas habilidades linguísticas e conhecimento técnico, garanti 
                            a precisão e a fluência da comunicação entre diferentes idiomas, 
                            contribuindo para a disseminação de conhecimento e facilitando a 
                            compreensão das informações para um público mais amplo.
                        </li>
                    </ul>
                </div>
                <div className="resume-column">
                    <h2><span className="decorative-pink">-</span> Habilidades <span className="decorative-pink">-</span></h2>
                    <ul>
                        <li><b>Linguagens</b>: Python, JavaScript, TypeScript.</li><br />
                        <li><b>Ferramentas</b>: Jupyter/IPython, Git, PostgreSQL, Jest, Cypress.</li><br />
                        <li><b>Bibliotecas</b>: React, Jest, Cypress, Numpy, Pandas, Seaborn,<br /> SkLearn, TensorFlow/Keras.</li><br />
                        <li><b>Práticas</b>: Clean Code, Scrum, TDD, Design Responsivo.</li><br />
                        <li><b>Idiomas</b>: Inglês, espanhol e francês fluente.</li><br />
                    </ul>
                    <h2><span className="decorative-pink">-</span> Projetos <span className="decorative-pink">-</span></h2>
                    <ul>
                        <li>
                            <b>Verificação formal de sistemas de comando e controle</b> <br />
                            Participei como Pesquisador assistente ativamente da formalização 
                            matemática e produção de certificados de correção para sistemas de 
                            comando e controle do Exército Brasileiro, utilizando a verificação 
                            formal das especificações por meio de um sistema assistente de provas. 
                            Essa abordagem rigorosa permitiu assegurar a corretude e a confiabilidade 
                            dos sistemas, proporcionando uma base sólida para a validação dos 
                            resultados. Essa colaboração envolveu pesquisadores de destaque da 
                            Universidade de Brasília e da Pontifícia Universidade Católica do 
                            Rio de Janeiro, demonstrando minha capacidade de trabalhar em equipe 
                            e contribuir com meu conhecimento especializado para o avanço da 
                            pesquisa científica.
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
