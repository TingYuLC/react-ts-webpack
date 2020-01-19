import * as React from 'react';
import { starEmpty, starFull, starHalf } from '@/static';
import './index.less';

interface StarProps {
  fullStar?: string;
  halfStar?: string;
  emptyStar?: string;
  maxStars?: number;
}

interface RatingProps extends StarProps {
  rating: number;
}

const defaultProps = {
  // 默认值
  maxStars: 5,
  fullStar: starFull,
  halfStar: starHalf,
  emptyStar: starEmpty,
};

const Star = (props: RatingProps) => {
  // 星星图标
  const {
    fullStar, halfStar, emptyStar, maxStars, rating,
  } = props;
  let average = rating;

  return new Array(maxStars).fill(0).map(() => {
    let starImg;
    if (average >= 1) {
      starImg = fullStar;
    } else if (average > 0) {
      starImg = halfStar;
    } else {
      starImg = emptyStar;
    }
    average--;
    return <img src={starImg} alt={starImg} key={average} />;
  });
};

const Rating = (props: RatingProps) => {
  const ratingProps = { ...defaultProps, ...props };
  return (
    <div className="component-rating">
      {Star(ratingProps)}
    </div>
  );
};

export default Rating;
