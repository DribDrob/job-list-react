import { useParams, useLocation } from 'react-router-dom';
import { BackLink } from '../components/BackLink/BackLink';
import JobInfo from 'components/JobInfo/JobInfo';

const JobDetailed = () => {
  const { jobId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/jobs';

  return (
    <main>
      <section className="w-full bg-white pt-[56px] pb-[162px] font-roboto text-lg leading-6 text-gray-dark">
        <div className="mx-auto my-0 max-w-[1432px] px-4">
          <JobInfo id={jobId} />
          <BackLink to={backLinkHref}>RETURN TO JOB BOARD</BackLink>
        </div>
      </section>
    </main>
  );
};

export default JobDetailed;
