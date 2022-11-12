import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getNumberDaysBetweenDates } from 'services/getNumberDaysBetweenDates';
import { ReactComponent as BookmarkIcon } from 'icons/bookmark.svg';
import { ReactComponent as LocationIcon } from 'icons/location.svg';
import RatingStars from 'components/RatingStars/RatingStars';

const JobItem = ({ url, location, jobData }) => {
  const { id, pictures, title, address, createdAt } = jobData;
  const currentDay = Date.now();
  const postedDaysAgo = getNumberDaysBetweenDates(createdAt, currentDay);

  return (
    <li className="mb-2 flex items-center rounded-lg bg-white py-6 px-4">
      <div className="mr-auto flex items-start">
        <img
          className="mr-[26px] h-[85px] rounded-round"
          src={pictures[0]}
          alt={title}
          width="85"
        />
        <div>
          <Link
            className="mb-2 text-xl font-bold text-accent"
            to={`${url}${id}`}
            state={{ from: location }}
          >
            {title}
          </Link>
          <p className="mb-2">
            Department name • Allgemeines Krankenhaus der Stadt Wien - AKH
          </p>
          <div className=" flex">
            <LocationIcon className="mr-2" />
            <p>{address}</p>
          </div>
        </div>
      </div>
      <RatingStars />
      <div className="flex flex-col items-end justify-between">
        <button className="mb-[68px]" type="button">
          <BookmarkIcon />
        </button>
        <p>{`Posted ${postedDaysAgo} days ago`}</p>
      </div>
    </li>
  );
};

export default JobItem;

JobItem.propTypes = {
  jobData: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    title: PropTypes.string.isRequired,
    salary: PropTypes.string,
    address: PropTypes.string,
    benefits: PropTypes.array,
    location: PropTypes.object,
    pictures: PropTypes.array,
    createdAt: PropTypes.string.isRequired,
    updatedAt: PropTypes.string,
    description: PropTypes.string.isRequired,
    employment_type: PropTypes.array,
  }).isRequired,
  url: PropTypes.string,
  location: PropTypes.object.isRequired,
};
