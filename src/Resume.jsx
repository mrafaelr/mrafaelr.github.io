import "./Resume.css"



export default function Resume() {
    return (
        <section >
            <h1>Curriculum vitae</h1>
            <div id="resume">
                <div className="resume-column">
                    <h2><span id="decorative-dash">-</span> Educação <span id="decorative-dash">-</span></h2>
                    <ul>
                        <li>
                            <b>Bacharelado em ciência da computação</b>,<br /> 
                            Universidade de Brasília.
                        </li>
                    </ul>
                    <h2><span id="decorative-dash">-</span> Experiência profissional <span id="decorative-dash">-</span></h2>
                    <ul>
                        <li>
                            02/22 a 02/23 <br /> 
                            Cientista de dados, Triágil, estágio. <br /> 
                            Análise e limpeza de dados relacionados à saúde, <br />
                            modelagem de sistemas de machine learning, <br />
                            implementação e manutenção de pipelines de <br />
                            processmento de dados. <br />
                        </li>
                        <li>
                            06/21 a 11/21 <br />
                            Desenvolvedor web full stack, Trion 3D, estágio. <br />
                            Desenvolveu sistemas web com React, Node.js, <br />
                            Express,  PostgreSql, e AWS. <br />
                        </li>
                        <li>
                            02/16 a 12/16 <br />
                            Desenvolvedor web full stack, Higgs Boson, estágio. <br />
                            Desenvolveu plataformas de e-commerce utilizando <br />
                            PHP, Laravel, MySql e Open Cart e Bootstrap. <br />
                        </li>
                    </ul>
                </div>
                <div className="resume-column">
                    <h2><span id="decorative-dash">-</span> Habilidades <span id="decorative-dash">-</span></h2>
                    <ul>
                        <li>Linguagens: Python, JavaScript, TypeScript.</li>
                        <li>Ferramentas: Jupyter/IPython, Git, PostgreSQL, Jest, Cypress.</li>
                        <li>Bibliotecas: React, Jest, Cypress, Numpy, Pandas, Seaborn,<br /> SkLearn, TensorFlow/Keras.</li>
                        <li>Práticas: Clean Code, Scrum, TDD, Design Responsivo.</li>
                        <li>Idiomas: Inglês, espanhol e francês fluente.</li>
                    </ul>
                    <h2><span id="decorative-dash">-</span> Projetos <span id="decorative-dash">-</span></h2>
                </div>
            </div>
        </section>
    );
}
