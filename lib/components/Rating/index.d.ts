/// <reference types="react" />
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
declare const Rating: (props: RatingProps) => JSX.Element;
export default Rating;
