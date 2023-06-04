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
                            <b>Cientista de dados</b>, <i>Triágil</i>, estágio. <br /> 
                            Análise e limpeza de dados relacionados à saúde, <br />
                            modelagem de sistemas de machine learning, <br />
                            implementação e manutenção de pipelines de <br />
                            processmento de dados. <br />
                        </li><br />
                        <li>
                        <span className="decorative-pink">06/21</span> a <span className="decorative-pink">11/21</span> <br />
                            <b>Desenvolvedor web full stack</b>, <i>Trion 3D</i>, estágio. <br />
                            Desenvolvimento de sistemas web com React, Node.js, <br />
                            Express,  PostgreSql, e AWS. <br />
                        </li><br />
                        <li>
                        <span className="decorative-pink">02/16</span> a <span className="decorative-pink">12/16</span> <br />
                            <b>Desenvolvedor web full stack</b>, <i>Higgs Boson</i>, estágio. <br />
                            Desenvolvimento de plataformas de e-commerce utilizando <br />
                            PHP, Laravel, MySql e Open Cart e Bootstrap. <br />
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
                </div>
            </div>
        </section>
    );
}
