import * as React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Poster from './Poster';
import './index.less';

const { useEffect, useState } = React;

const MOVIE_API_URL = 'https://douban-api.uieee.com/v2/movie/in_theaters?start=0&count=6';

const Theater = () => {
  const [movies, setMovies] = useState([]);
  const history = useHistory();
  useEffect(() => {
    axios.get(MOVIE_API_URL)
      .then((data) => {
        setMovies(data.data.subjects);
      });
  }, []);

  const toMovieDetail = (id: string) => {
    history.push(`movie-detail/${id}`);
  };

  return (
    <div className="demo-theater">
      <div className="theater-movies">
        {
          movies.map((movie) => (
            <Poster
              key={movie.id}
              title={movie.title}
              img={movie.images && movie.images.small}
              pubdate={movie.mainland_pubdate}
              rating={movie.rating.average}
              posterClick={() => toMovieDetail(movie.id)}
            />
          ))
        }
      </div>
    </div>
  );
};

export default Theater;
