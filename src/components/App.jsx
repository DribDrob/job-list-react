import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const JobsBoard = lazy(() => import('../pages/JobsBoard'));
// const JobDetailed = lazy(() => import('../pages/JobDetailed'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/jobs" element={<JobsBoard />} />
        {/* <Route path="/jobs/:jobId" element={<JobDetailed />}></Route> */}
        <Route path="*" element={<JobsBoard />} />
      </Routes>
    </>
  );
};
