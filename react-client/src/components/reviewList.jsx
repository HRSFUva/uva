import reviewEntry from './reviewEntry.jsx';

var reviewList = ({reviews}) => (
  <div>
    {reviews.map((review) => {
      <reviewEntry review={review}/>
    })}
  </div>
);

export default reviewList;
