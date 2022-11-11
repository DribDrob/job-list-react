import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { getJobById } from 'services/api/jobsAPI';
import { ReactComponent as BookmarkIcon } from 'icons/bookmark.svg';
import { ReactComponent as ShareIcon } from 'icons/share.svg';
import { getNumberDaysBetweenDates } from 'services/getNumberDaysBetweenDates';
import { convertSalaryFormat } from 'services/convertSalaryFormat';
import Button from 'components/Button/Button';

const JobInfo = ({ id }) => {
  const [jobDetails, setjobDetails] = useState(null);

  useEffect(() => {
    getJobById(id)
      .then(jobById => {
        if (!jobById) {
          console.log('Sorry, there are no job info. Please try again.');
        }
        setjobDetails(jobById);
      })
      .catch(error => console.log(error.message));
  }, [id]);

  if (!jobDetails) {
    return null;
  }

  const {
    pictures,
    title,
    address,
    createdAt,
    salary,
    phone,
    email,
    benefits,
    employment_type: empType,
    description,
  } = jobDetails;

  const currentDay = Date.now();
  const postedDaysAgo = getNumberDaysBetweenDates(createdAt, currentDay);
  const changedFormatSalary = convertSalaryFormat(salary);

  return (
    <div className="flex">
      <div>
        <div className="flex">
          <h2 className="flex">Job Details</h2>
          <button className="flex" type="button">
            <BookmarkIcon />
            Save to my list
          </button>
          <button className="flex" type="button">
            <ShareIcon />
            Share
          </button>
        </div>
        <Button>APPLY NOW</Button>
        <div>
          <h3>{title}</h3>
          <div>
            <p>{`€ ${changedFormatSalary}`}</p>
            <p>Brutto, per year</p>
          </div>
          <p>{`Posted ${postedDaysAgo} days ago`}</p>
          <p>{description}</p>
        </div>
        <Button>APPLY NOW</Button>
        <h2>Additional info</h2>
        <p>Employment type</p>
        <div className="flex">
          {empType.map(type => (
            <button type="button" key={nanoid()}>
              {type}
            </button>
          ))}
        </div>
        <p>Benefits</p>
        <div className="flex">
          {benefits.map(benefit => (
            <button type="button" key={nanoid()}>
              {benefit}
            </button>
          ))}
        </div>
        <h2>Attached images</h2>
        <div className="flex">
          {pictures.map(pictureSrc => (
            <img src={pictureSrc} alt="" width="200" key={nanoid()} />
          ))}
        </div>
      </div>
      <div>
        <p>{address}</p>
        <p>{phone}</p>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default JobInfo;
