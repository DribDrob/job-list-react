import PropTypes from 'prop-types';
import JobItem from 'components/JobItem/JobItem';

const JobsList = ({ data, url, location }) => {
  return (
    <ul className="">
      {data.map(jobData => {
        return (
          <JobItem
            key={jobData.id}
            url={url}
            location={location}
            jobData={jobData}
          />
        );
      })}
    </ul>
  );
};

export default JobsList;

JobsList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
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
    })
  ).isRequired,
  url: PropTypes.string,
  location: PropTypes.object.isRequired,
};
