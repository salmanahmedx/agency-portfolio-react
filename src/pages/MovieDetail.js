import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import MovieState from "../MovieState"
import { useParams } from "react-router-dom";


const MovieDetail = () => {
    const params = useParams();
    const { id } = params;
    const [movies, setMovies] = useState(MovieState)
    const [movie, setMovie] = useState([])

    useEffect(() => {
        const currentMovie = movies.filter((stateMovie) => stateMovie.id === id)
        setMovie(currentMovie)
        console.log(movie)
    }, [id])

    return (
        <>
            {movie && (
                <Details>
                    <HeadLine>
                        <h2>{movie[0]?.title}</h2>
                        <img src={movie[0]?.mainImg} alt={movie[0]?.title} />
                    </HeadLine>
                </Details>
            )}

        </>
    );
};

const Details = styled.div`

`
const HeadLine = styled.div`

`

export default MovieDetail;