import { lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

const JobsBoard = lazy(() => import('../pages/JobsBoard'));
const JobDetailed = lazy(() => import('../pages/JobDetailed'));

export const App = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/">
            <Route index element={<Navigate to="jobs" />} />
            <Route path="jobs" element={<JobsBoard />} />
            <Route path="jobs/:jobId" element={<JobDetailed />} />
            <Route path="*" element={<JobsBoard />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
