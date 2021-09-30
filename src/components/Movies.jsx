import { Space, Typography } from 'antd';
import React from 'react';
import Movie from './Movie';

const {Title} = Typography
const Movies = ({ movies, urlImg }) => {
    return (
        <Space
            size="small"
            direction="vertical"
            className="right-information"
        >
            <Title className="movies-title">
                Películas
            </Title>
            {
                movies.map(element => (
                    <Movie
                        key={element.id}
                        name={element.original_title}
                        description={element.overview}
                        movieBg={`${urlImg}${element.poster_path}`}
                        release={element.release_date}
                        rating={element.vote_average}
                    />
                ))
            }
        </Space>
    )
}

export default Movies
