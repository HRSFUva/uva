var reviewList = ({reviews}) => (
  <div>
    {reviews.map((review) => {
      <reviewListEntry />
    })}
  </div>
);
