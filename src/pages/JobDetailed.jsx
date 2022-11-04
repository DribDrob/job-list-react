import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BackLink } from '../components/BackLink/BackLink';
import { getJobById } from 'services/api/jobsAPI';
import { ReactComponent as BookmarkIcon } from 'icons/bookmark.svg';
import { ReactComponent as ShareIcon } from 'icons/share.svg';
import { getNumberDaysBetweenDates } from 'services/getNumberDaysBetweenDates';
import { convertSalaryFormat } from 'services/convertSalaryFormat';

const JobDetailed = () => {
  const [jobDetails, setjobDetails] = useState(null);
  const { jobId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/jobs';

  useEffect(() => {
    getJobById(jobId)
      .then(jobById => {
        if (!jobById) {
          console.log('Sorry, there are no job info. Please try again.');
        }
        setjobDetails(jobById);
      })
      .catch(error => toast.error('Something went wrong. Please try again.'));
  }, [jobId]);

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
    <main>
      <div>
        <div>
          <div>
            <div>
              <h2>Job Details</h2>
              <button type="button">
                <BookmarkIcon />
                Save to my list
              </button>
              <button type="button">
                <ShareIcon />
                Share
              </button>
            </div>
            <button type="button">Apply now</button>
            <div>
              <h3>{title}</h3>
              <div>
                <p>{`€ ${changedFormatSalary}`}</p>
                <p>Brutto, per year</p>
              </div>
              <p>{`Posted ${postedDaysAgo} days ago`}</p>
              <p>{description}</p>
            </div>
            <button type="button">Apply now</button>
            <h2>Additional info</h2>
            <p>Employment type</p>
            <div>
              {empType.map(type => (
                <button>{type}</button>
              ))}
            </div>
            <p>Benefits</p>
            <div>
              {benefits.map(benefit => (
                <button>{benefit}</button>
              ))}
            </div>
            <h2>Attached images</h2>
            <div>
              {pictures.map(pictureSrc => (
                <img src={pictureSrc} alt="" width="200" />
              ))}
            </div>
          </div>
          <div>
            <p>{address}</p>
            <p>{phone}</p>
            <p>{email}</p>
          </div>
        </div>
        <BackLink to={backLinkHref}>RETURN TO JOB BOARD</BackLink>
      </div>
    </main>
  );
};

export default JobDetailed;
