import { Link } from 'react-router-dom';

const JobItem = ({ url, location, jobData }) => {
  console.log(jobData);
  const { id, pictures, title, address, createdAt } = jobData;
  return (
    <li>
      <img src={pictures[0]} alt={title} width="85" />
      <div>
        <Link to={`${url}${id}`} state={{ from: location }}>
          {title}
        </Link>
        <p>Department name • Allgemeines Krankenhaus der Stadt Wien - AKH</p>
        <div>
          <p>Icon</p>
          <p>{address}</p>
        </div>
      </div>
      <p>Rate</p>
      <div>
        <p>Bookmark</p>
        <p>{`Posted ${createdAt}`}</p>
      </div>
    </li>
  );
};

export default JobItem;
