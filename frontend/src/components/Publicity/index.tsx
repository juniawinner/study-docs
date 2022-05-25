import './styles.css';

function Publicity() {

    return (
        <>
            <section className="publicity">
                <div className="project-goal">
                    <h3>Mapas Conceituais para estudo</h3>
                    <p className="text1">Baseados nas documentações das ferramentas favoritas da comunidade dev❤️‍🔥!</p>

                    <ul>
                        <li>✨ Azure</li>
                        <li>✨ MongoDB</li>
                        <li>✨ Node.JS</li>
                        <li>✨ .... e muito mais</li>
                    </ul>
                </div>
            </section>

            <section className="projetct-description">
                <p className="text2">
                    Aqui você estuda os principais conceitos que fundamentam o desenvolvimento de software.
                    Além disso, o cadastramento de novos Contribuidores para o projeto está sempre disponível.
                </p>
            </section>

            <section className="module-lesson">
                <div className="module-lesson-container">
                    <span className="module">
                        {/* Imagem de Olalekan Oladipupo por Pixabay
                    https://pixabay.com/pt/illustrations/rede-desenvolvedor-web-1935737/ */}
                        <img src="https://ik.imagekit.io/x4ikoq975/Study_Docs/mod_ZNWjFfmAF.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1653518749440"
                            alt="Módulos de estudo" className="image-module" />

                        <p className="title-module"><strong>Módulos</strong></p>
                        <p className="text-module">Conjunto de aulas sobre determinada ferramenta dev🚀</p>
                    </span>

                    <span className="lesson">
                        {/* Imagem de Wokandapix por Pixabay
                    https://pixabay.com/pt/photos/estude-escola-aprender-educa%c3%a7%c3%a3o-1968077/ */}
                        <img src="https://ik.imagekit.io/x4ikoq975/Study_Docs/less_i935GTwrx.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1653519127125"
                            alt="Aulas para estudar" className="image-lesson" />

                        <p className="title-lesson"><strong>Aulas</strong></p>
                        <p className="text-lesson">Conjunto de Mapas Conceituais📜</p>
                    </span>
                </div>
            </section>
        </>
    );
}

export default Publicity;
