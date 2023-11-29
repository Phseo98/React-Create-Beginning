import ProTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, coverImg, title, summary, genres }){
    return(
        <div>
            <img src={coverImg} alt={title}/>
            <h2><Link to={`/movie/${id}`}>{title}</Link></h2>
            <p>{summary}</p>
            <ul>
                {genres.map((gen) => <li key={gen}>{gen}</li>)}
            </ul>
        </div>
    )
}

Movie.ProTypes = { // props로 보낼때 타입지정 할수 없기때문에 ProTypes활용해서 타입지정
    id: ProTypes.number.isRequired,
    coverImg: ProTypes.string.isRequired,
    title: ProTypes.string,
    summary: ProTypes.string,
    geres: ProTypes.arrayOf(ProTypes.string)
}

export default Movie;