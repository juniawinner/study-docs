import "./styles.css";

function Footer() {
    return (
        <footer className="project-author">
            <section className="project">
                <p className="title"><strong>🚀 Study Docs 📜</strong></p>
                <p className="license"><em>MIT License</em></p>
                <p className="text">
                    A interface de usuário, com design moderno e intuitivo,
                    foi desenvolvida com React.JS e TypeScript.
                    Presente também no back-end, a tipagem estática maximiza
                    a eficiência do Node/Express, através do API/REST que se
                    comunica com a base de dados (TypeORM e MongoDB).
                </p>
            </section>

            <address className="contact">
                <a className="contact-project" href="https://github.com/juniawinner/study-docs"
                    title="Repositório do Study Docs no GitHub">
                    <img className="image" src="https://ik.imagekit.io/x4ikoq975/%C3%ADcones/github_HZyrSFa1W.png?ik-sdk-version=javascript-1.4.3&updatedAt=1653574797151" alt="Logo do GitHub" /> /study-docs
                </a>

                <a className="contact-author" href="https://www.linkedin.com/in/junia-winner"
                    title="LinkedIn da autora do projeto Study Docs">
                    <img className="image" src="https://ik.imagekit.io/x4ikoq975/%C3%ADcones/linkedin_4KBmvLHyp.png?ik-sdk-version=javascript-1.4.3&updatedAt=1653574797154" alt="Logo do LinkedIn" /> /junia-winner
                </a>
            </address>
        </footer>
    );
}

export default Footer;
