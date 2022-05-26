import LessonCard from "components/LessonCard";
import Navigation from "components/Navigation";
import { useParams } from "react-router-dom";

function Lesson() {

    const params = useParams();

    return (
        <>
            <Navigation />
            <LessonCard moduleId={`${params.moduleId}`} />
        </>
    );
}

export default Lesson;
