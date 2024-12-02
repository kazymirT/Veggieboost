import { REVIEWS_DATA } from "./data";
import ReviewsItem from "./ReviewsItem";

const Reviews = () => {
  return ( 
  <div className="flex">
    {
      REVIEWS_DATA && REVIEWS_DATA.map((item) => (<ReviewsItem key={item.id} {...item} />))
    }
  </div> );
}
 
export default Reviews;
