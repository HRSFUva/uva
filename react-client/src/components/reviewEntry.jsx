var reviewEntry = ({review}) => (
  <div>
    {/* insert image of user
    */}
    <div>
      {review.title}
    </div>
    <div>
      {review.rating}
    </div>
    <div>
      {review.context}
    </div>
  </div>
)

export default reviewEntry;
