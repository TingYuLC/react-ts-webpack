/// <reference types="react" />
import './Poster.less';
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
declare const Poster: (props: PosterProps) => JSX.Element;
export default Poster;
