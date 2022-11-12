import ReactStars from 'react-stars';

const RatingStars = () => {
  const ratingChanged = newRating => {
    console.log(newRating);
  };

  return (
    <ReactStars
      className="min-w-24 mr-8 flex"
      count={5}
      onChange={ratingChanged}
      size={24}
      color2={'#384564'}
      half={false}
    />
  );
};

export default RatingStars;
