import * as React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ReactStars from 'react-stars';
import './index.less';

const { useState, useEffect } = React;

const MOVIE_API_URL = 'https://douban-api.uieee.com/v2/movie/subject/';

const detailsDefault = {
  title: '', // 标题
  poster: '', // 海报
  subTitle: '', // 副标题
  meta: '', // 影片信息
  directors: '', // 导演
  casts: '', // 主演
  ratingsCount: 0, // 打分人数
  ratingAverage: 0, // 评分
};

const MovieDetail = () => {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState(detailsDefault);

  useEffect(() => {
    axios.get(MOVIE_API_URL + id)
      .then((data) => {
        const ret = data.data;
        const {
          images, title, original_title: originalTitle, ratings_count: ratingsCount, year,
          countries, genres, directors, casts, rating,
        } = ret;
        setDetails({
          title, // 主标题
          poster: images && images.large,
          subTitle: `${originalTitle} (${year})`,
          meta: countries.concat(genres).join('/'),
          directors: directors.map((item: {name: string}) => item.name).join(' '),
          casts: casts.map((item: {name: string}) => item.name).join(' '),
          ratingAverage: rating.average,
          ratingsCount,
        });
        setLoading(false);
      });
  }, [id]);

  const InfoView = () => {
    const {
      poster, title, subTitle, meta, directors, casts, ratingsCount, ratingAverage,
    } = details;
    return (
      <div className="detail-info">
        <div className="header-poster">
          <img className="poster-img" src={poster} alt="poster" />
        </div>
        <div className="header-sub">
          <div className="header-sub-wrapper">
            <div className="sub-desc">
              <h3 className="sub-title">{title}</h3>
              <p className="meta">{subTitle}</p>
              <p className="meta">{meta}</p>
              <p className="meta">{`导演: ${directors}`}</p>
              <p className="meta">{`主演: ${casts}`}</p>
            </div>
            <div className="sub-rating">
              <p className="sub-title">综合评分</p>
              <p className="title">{ratingAverage}</p>
              <ReactStars
                count={5}
                value={ratingAverage / 2}
                color1="#E6E6E6"
                color2="#FFCC33"
                edit={false}
                size={14}
              />
              <p className="sub-title">{`${ratingsCount}人`}</p>
            </div>
          </div>
          <div className="header-sub-rate">
            <p>我来评分</p>
            <ReactStars
              count={5}
              value={0}
              color1="#E6E6E6"
              color2="#FFCC33"
              edit
              size={20}
            />
          </div>
        </div>
      </div>
    );
  };

  const ContentView = () => (
    <div className="movie-detail">
      {InfoView()}
    </div>
  );

  const LoadingView = () => (
    <p>loading...</p>
  );
  return loading ? LoadingView() : ContentView();
};

export default MovieDetail;
