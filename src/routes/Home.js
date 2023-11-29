import { useState, useEffect } from "react";
import Movie from "../components/Movie";

function Home(){
    const[loading, setLoading] = useState(true);
    const[movies, setMovies] = useState([]);
    const getMoives = async() => {
        const json = await (
            await fetch(
                `https://yts.mx/api/v2/list_movies.json?`
            )
        ).json();
        setMovies(json.data.movies);
        setLoading(false);
    }
    useEffect(() => {
       getMoives();
    }, [])
    console.log(movies);
    return(
        <div>
            {loading ? <strong>Loading...</strong> : (
            <div>
                {movies.map((movie) => 
                    <Movie 
                        key={movie.id}
                        id={movie.id}
                        coverImg ={movie.medium_cover_image}  
                        title = {movie.title}
                        summary = {movie.summary}
                        genres= {movie.genres}
                    />
                )}
            </div>)}
        </div>
    )
}

export default Home;