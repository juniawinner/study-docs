import './styles.css';

function Publicity() {

    return (
        <section className="publicity">
            <div className="project-goal">
                <h3>Mapas Conceituais para estudo</h3>
                <p>Baseados nas documentações das ferramentas favoritas da comunidade dev❤️‍🔥!</p>

                <ul>
                    <li>🚀 MongoDB</li>
                    <li>🚀 NodeJS</li>
                    <li>🚀 .... e muito mais</li>
                </ul>
            </div>

            <figure className="project-logo">
                <img src="https://ik.imagekit.io/x4ikoq975/Study_Docs/publicity-logo_mvcQv-3Ce.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1653165275060"
                    alt="Logo do Study Docs" />
            </figure>

            <article className="projetct-description">
                <p>
                    Aqui você estuda os principais conceitos que fundamentam o desenvolvimento de software.
                    Além disso, o cadastramento de novos Contribuidores para o projeto está sempre disponível.
                </p>
                <hr />
                <p>
                    Cadastre-se para contribuir na elaboração de Mapas Conceituais sobre as ferramentas que
                    você conhece.
                </p>
            </article>

            <div className="module-lesson-container">
                <span className="module">
                    {/* Imagem de Hugo Hercer por Pixabay: 
                    https://pixabay.com/pt/vectors/engrenagens-trabalhar-equipe-junto-5193383/ */}
                    <img src="https://ik.imagekit.io/x4ikoq975/Study_Docs/gears-corte_RvCrOOnO5.png?ik-sdk-version=javascript-1.4.3&updatedAt=1653185637387"
                        alt="Módulos de estudo" className="image1" />

                    <p className="title1"><strong>Módulos</strong></p>
                    <p className="text1">Conjunto de aulas sobre determinada ferramenta dev🚀</p>
                </span>

                <span className="lesson">
                    {/* Imagem de Wokandapix por Pixabay
                    https://pixabay.com/pt/photos/estude-escola-aprender-educa%c3%a7%c3%a3o-1968077/ */}
                    <img src="https://ik.imagekit.io/x4ikoq975/Study_Docs/study-192x167_iqW5nPRmg.png?ik-sdk-version=javascript-1.4.3&updatedAt=1653184137829"
                        alt="Aulas para estudar" className="image2" />

                    <p className="title2"><strong>Aulas</strong></p>
                    <p className="text2">Conjunto de Mapas Conceituais📜</p>
                </span>
            </div>
        </section>
    );
}

export default Publicity;
