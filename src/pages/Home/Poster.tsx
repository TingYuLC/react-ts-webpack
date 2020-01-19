import * as React from 'react';
import './Poster.less';
import { Rating } from '@/components';

interface RatingProps {
  average: number;
  min: number;
  max: number;
}

interface PosterProps {
  title: string;
  img: string;
  pubdate: string;
  rating: RatingProps;
  posterClick: () => void;
}

const Poster = (props: PosterProps) => {
  const { img, title, posterClick } = props;

  const callPosterFunc = () => {
    posterClick();
  };

  return (
    <div
      role="presentation"
      className="movies-poster"
      onClick={callPosterFunc}
    >
      <img className="poster-img" src={img} alt={img} />
      <p className="poster-title">{title}</p>
      <div className="poster-rating">
        <Rating rating={4.6} />
        <span>{4.6}</span>
      </div>
    </div>
  );
};

export default Poster;
