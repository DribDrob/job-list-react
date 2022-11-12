import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { getJobById } from 'services/api/jobsAPI';
import { getNumberDaysBetweenDates } from 'services/getNumberDaysBetweenDates';
import { convertSalaryFormat } from 'services/convertSalaryFormat';
import { ReactComponent as BookmarkIcon } from 'icons/bookmark.svg';
import { ReactComponent as ShareIcon } from 'icons/share.svg';
import Button from 'components/Button/Button';
import { BackLink } from 'components/BackLink/BackLink';

const JobInfo = () => {
  const { jobId: id } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/jobs';
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

  let [preText, restText] = description
    .split(' Responsopilities:')
    .map(i => i.trim());
  let [responsibilities, compensation] = restText
    .split('Compensation & Benefits:')
    .map(i => i.trim());

  const currentDay = Date.now();
  const postedDaysAgo = getNumberDaysBetweenDates(createdAt, currentDay);
  const changedFormatSalary = convertSalaryFormat(salary);

  return (
    <>
      <div className="flex px-[89px] pb-[98px]">
        <div className="mr-auto w-[720px]">
          <div className="border-b-solid  mb-[39px] flex border-b-[1px] border-gray-dark/13 pb-2">
            <h2 className="mr-auto font-proxima text-[28px] font-bold">
              Job Details
            </h2>
            <button className="mr-[31px] flex items-center" type="button">
              <BookmarkIcon className="mr-4" />
              Save to my list
            </button>
            <button className="flex items-center" type="button">
              <ShareIcon className="mr-4" />
              Shar
            </button>
          </div>
          <Button styles="mb-8 rounded-lg bg-accent py-[18px] px-[30px] font-proxima text-white">
            APPLY NOW
          </Button>

          <div className="mb-[7px] flex">
            <h3 className="mr-[60px]  font-proxima text-2xl font-bold">
              {title}
            </h3>
            <div className="min-w-[161px] pr-1">
              <p className="font-proxima text-xl font-bold">{`€ ${changedFormatSalary}`}</p>
              <p>Brutto, per year</p>
            </div>
          </div>
          <p className="mb-[7px] text-accent-secondary/35">{`Posted ${postedDaysAgo} days ago`}</p>
          <div className="mb-[35px]">
            <p className="mb-6">{preText}</p>
            <p className="mb-2 font-proxima text-xl font-bold">
              Responsibilities
            </p>
            <p className="mb-6">{responsibilities}</p>
            <p className="mb-2 font-proxima text-xl font-bold">
              Compensation & Benefits:
            </p>
            <p className="mb-6">{compensation}</p>
          </div>
          <Button styles="mb-[85px] rounded-lg bg-accent py-[18px] px-[30px] font-proxima text-white">
            APPLY NOW
          </Button>
          <h2 className="border-b-solid mb-[15px] flex border-b-[1px]  border-gray-dark/[.13] pb-2 font-proxima text-[28px] font-bold">
            Additional info
          </h2>
          <p className="mb-[10px]">Employment type</p>
          <ul className="mb-[23px] flex">
            {empType.map(type => (
              <li className="mr-2  last:mr-0" key={nanoid()}>
                <button
                  className=" w-[222px] rounded-lg border-[1px] border-solid border-navy-bgd bg-navy-bgd/30 py-[17px] text-center font-proxima text-base font-bold text-navy-text"
                  type="button"
                >
                  {type}
                </button>
              </li>
            ))}
          </ul>
          <p className="mb-[10px]">Benefits</p>
          <ul className="mb-[23px] flex">
            {benefits.map(benefit => (
              <li className="mr-[10px]  last:mr-0" key={nanoid()}>
                <button
                  className=" w-[220px] rounded-lg border-[1px] border-solid border-yellow-bgd bg-yellow-bgd/15 py-[17px] text-center font-proxima text-base font-bold text-yellow-text"
                  type="button"
                >
                  {benefit}
                </button>
              </li>
            ))}
          </ul>
          <h2 className="border-b-solid mb-[21px] flex border-b-[1px]  border-gray-dark/[.13] pb-2 font-proxima text-[28px] font-bold">
            Attached images
          </h2>
          <ul className="flex">
            {pictures.map(pictureSrc => (
              <li className="mr-[10px] last:mr-0" key={nanoid()}>
                <img
                  className="h-[116px] rounded-lg object-cover"
                  src={pictureSrc}
                  alt=""
                  width="200"
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="w-[402px] px-4">
          <p>{address}</p>
          <p>{phone}</p>
          <p>{email}</p>
        </div>
      </div>
      <BackLink to={backLinkHref}>RETURN TO JOB BOARD</BackLink>
    </>
  );
};

export default JobInfo;
