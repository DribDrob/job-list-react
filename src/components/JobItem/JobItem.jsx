import { Link } from 'react-router-dom';
import { ReactComponent as BookmarkIcon } from 'icons/bookmark.svg';
import { ReactComponent as LocationIcon } from 'icons/location.svg';
import { getNumberDaysBetweenDates } from 'services/getNumberDaysBetweenDates';
import RatingStars from 'components/RatingStars/RatingStars';

const JobItem = ({ url, location, jobData }) => {
  const { id, pictures, title, address, createdAt } = jobData;
  const currentDay = Date.now();
  const postedDaysAgo = getNumberDaysBetweenDates(createdAt, currentDay);

  return (
    <li>
      <img src={pictures[0]} alt={title} width="85" />
      <div>
        <Link to={`${url}${id}`} state={{ from: location }}>
          {title}
        </Link>
        <p>Department name • Allgemeines Krankenhaus der Stadt Wien - AKH</p>
        <div>
          <LocationIcon />
          <p>{address}</p>
        </div>
      </div>
      <RatingStars />
      <div>
        <button type="button">
          <BookmarkIcon />
        </button>
        <p>{`Posted ${postedDaysAgo} days ago`}</p>
      </div>
    </li>
  );
};

export default JobItem;
