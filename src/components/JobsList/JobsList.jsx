import PropTypes from 'prop-types';
import JobItem from 'components/JobItem/JobItem';

const JobsList = ({ data, url, location }) => {
  return (
    <ul>
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
  data: PropTypes.array.isRequired,
  url: PropTypes.string,
  location: PropTypes.object.isRequired,
};
