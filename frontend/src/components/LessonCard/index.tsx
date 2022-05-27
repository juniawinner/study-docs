import axios from "axios";
import { useEffect, useState } from "react";
import { Lesson } from "types/module";
import { BASE_URL } from "utils/requests";
import "./styles.css";

type Props = {
    moduleId: string;
}

function LessonCard({ moduleId }: Props) {

    const [lesson, setLesson] = useState<[Lesson]>();

    useEffect(() => {
        axios.get(`${BASE_URL}/modulos/${moduleId}`)
            .then(response => {
                setLesson(response.data);
            });
    }, [moduleId]);

    return (
        <>
            <article className="contribution">
                <div className="contribution-container">
                    <h3>Aulas Temáticas</h3>
                    <p className="text-contribution">
                        Aprimore seus conhecimentos e se destaque no mercado de trabalho.
                        Os Mapas Conceituais são sínteses das documentações oficiais, com design
                        esquematizado e trechos de códigos para exemplificar os conceitos técnicos.
                    </p>
                </div>
            </article>

            <section className="lesson-card-container">
                <ul className="lesson-card">
                    {lesson?.map((data) => (
                        <li className="card-L" key={data.Aula}>

                            <span className="image-L">
                                <img className="image-L"
                                    src="https://ik.imagekit.io/x4ikoq975/Study_Docs/less_i935GTwrx.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1653519127125"
                                    alt="Imagem do card Aula" />
                            </span>

                            <span className="name-L">
                                <h4 className="name-L">{data.Aula}</h4>
                            </span>

                            <span className="mapa">
                                <a className="mapa-link" href={data.Mapa}>Mapa Conceitual</a>
                            </span>

                        </li>
                    )
                    )}
                </ul>
            </section>
        </>
    );
}

export default LessonCard;
