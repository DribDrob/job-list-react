import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BackLink } from '../components/BackLink/BackLink';
import { getJobById } from 'services/jobsAPI';

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

  return (
    <main>
      <div>
        <div>
          <div>
            <div>
              <h2>Job Details</h2>
              <button>Save to my list</button>
              <button>Share</button>
            </div>
            <button>Apply now</button>
            <div>
              <h3>{title}</h3>
              <div>
                <p>{salary}</p>
                <p>Brutto, per year</p>
              </div>
              <p>`Posted ${createdAt} days ago`</p>
              <p>{description}</p>
            </div>
            <button>Apply now</button>
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
