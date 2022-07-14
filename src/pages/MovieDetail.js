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
    }, [id])

    return (
        <>
            {movie && (
                <Details>
                    <HeadLine>
                        <h2>{movie[0]?.title}</h2>
                        <img src={movie[0]?.mainImg} alt={movie[0]?.title} />
                    </HeadLine>
                    <Awards>
                        {movie[0]?.awards?.map(award => <Award title={award.title} description={award.description} key={award.title}></Award>)}
                    </Awards>
                    <ImageDisplay>
                        <img src={movie[0]?.secondaryImg} alt="" />
                    </ImageDisplay>
                </Details>
            )}

        </>
    );
};

const Details = styled.div`
color: white;
`
const HeadLine = styled.div`
min-height: 90vh;
padding-top:20vh;
position: relative;
h2{
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
    img{
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
}
`

const Awards = styled.div`
min-height: 80vh;
display: flex;
margin: 5rem 10rem;
align-items: center;
justify-content: space-around;
`
const AwardStyle = styled.div`
    padding: 5rem;
    h3{
        font-size:2rem;
    }
    .line{
        width: 100%;
        background: #23d997;
        height: 0.5rem;
        margin: 1rem 0rem;
    }
    p{
        padding: 2rem 0rem;
    }
`
const ImageDisplay = styled.div`
min-height: 50vh;
img{
    width: 100%;
    height: 100vh;
    object-fit: cover;
}
`


const Award = ({ title, description }) => {
    return (
        <AwardStyle>
            <h3>{title}</h3>
            <div className="line"></div>
            <p>{description}</p>
        </AwardStyle>

    )
}





export default MovieDetail;