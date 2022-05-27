import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Module } from "types/module";
import { BASE_URL } from "utils/requests";
import "./styles.css";

function ModuleCard() {

    const [module, setModule] = useState<[Module]>();

    useEffect(() => {
        axios.get(`${BASE_URL}/`)
            .then(response => {
                setModule(response.data);
            });
    }, []);

    return (
        <section className="movie-card-container">
            <ul className="movie-card">
                {module?.map((data) => (
                    <li className="card" key={data.id}>

                        <span className="name">
                            <h4 className="name">{data.Modulo}</h4>
                        </span>

                        <span className="description">
                            <p>{data.description}</p>
                        </span>

                        <span className="total_lessons">
                            <p><em>Total de aulas: {data.Total}</em></p>
                        </span>

                        <Link to={`/modulos/${data.id}`}>
                            <span className="module-btn">
                                <button type="button" className="mod-btn">Acessar Aulas</button>
                            </span>
                        </Link>

                    </li>
                )
                )}
            </ul>
        </section>
    );
}

export default ModuleCard;
