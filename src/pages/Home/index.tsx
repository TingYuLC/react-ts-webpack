import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { AxiosResponse } from 'axios';
import getTheaters from '@/service/movie/getTheaters';
import Poster from './Poster';
import './index.less';

const { useEffect, useState } = React;

const Theater = () => {
  const [movies, setMovies] = useState([]);
  const history = useHistory();
  useEffect(() => {
    getTheaters(0, 6)
      .then((data: AxiosResponse) => {
        setMovies(data.data);
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
