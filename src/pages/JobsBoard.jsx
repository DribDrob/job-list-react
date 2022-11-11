import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { getAllJobs } from 'services/api/jobsAPI';
// import { Loader } from 'components/Loader/Loader';
import JobsList from 'components/JobsList/JobsList';

const JobsBoard = () => {
  const [jobs, setJobs] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getAllJobs()
      .then(allJobs => {
        if (allJobs.length === 0) {
          console.log('Sorry, there are no jobs. Please try again.');
          // return toast.error(
          //   'Sorry, there are no movies matching your search query. Please try again.'
          // );
        }
        setJobs(allJobs);
      })
      .catch(err =>
        // toast.error('Something went wrong. Please try again.')
        console.log(err.message)
      );
  }, []);

  return (
    <main>
      <section className="w-full bg-gray-light pt-[29px] pb-16 font-proxima text-base text-gray">
        <div className="mx-auto -mb-2 mt-0 max-w-[1432px] px-4">
          {jobs && <JobsList data={jobs} url="" location={location} />}
        </div>
      </section>
    </main>
  );
};

export default JobsBoard;
