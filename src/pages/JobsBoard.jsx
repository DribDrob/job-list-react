import { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { getAllJobs } from 'services/jobsAPI';
// import { Loader } from 'components/Loader/Loader';
// import JobsList from 'components/JobsList/JobsList';

const JobsBoard = () => {
  const [jobs, setJobs] = useState([]);
  // const location = useLocation();

  useEffect(() => {
    getAllJobs()
      .then(setJobs)
      .catch(err =>
        // toast.error('Something went wrong. Please try again.')
        console.log(err.message)
      );
  }, []);

  return (
    <main>
      {jobs && <div>{jobs}</div>}
      {/* <Title>Trending today</Title>
      <Suspense fallback={<Loader />}>
        {trendingMovies && (
          <MovieList data={trendingMovies} url="movies/" location={location} />
        )}
      </Suspense> */}
    </main>
  );
};

export default JobsBoard;

// import { useState, useEffect, Suspense } from 'react';
// import { useLocation } from 'react-router-dom';
// import { getTrendingMovies } from 'services/themoviedbAPI';
// import { toast } from 'react-toastify';
// import { Loader } from 'components/Loader/Loader';
// import MovieList from 'components/MovieList/MovieList';
// import { Title } from './pagesStyled/Page.styled';

// const Home = () => {
//   const [trendingMovies, setTrendingMovies] = useState([]);
//   const location = useLocation();

//   useEffect(() => {
//     getTrendingMovies()
//       .then(setTrendingMovies)
//       .catch(error => toast.error('Something went wrong. Please try again.'));
//   }, []);

//   return (
//     <main>
//       <Title>Trending today</Title>
//       <Suspense fallback={<Loader />}>
//         {trendingMovies && (
//           <MovieList data={trendingMovies} url="movies/" location={location} />
//         )}
//       </Suspense>
//     </main>
//   );
// };

// export default Home;

///////////////////////////////////////////////

// import { useState, useEffect, Suspense } from 'react';
// import { useSearchParams, useLocation } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { getSearchedMovies } from 'services/themoviedbAPI';
// import { Loader } from 'components/Loader/Loader';
// import MovieList from 'components/MovieList/MovieList';
// import SearchForm from 'components/SearchForm/SearchForm';

// const Movies = () => {
//   const [searchParams, setSearchParams] = useSearchParams();
//   const [searchedMovies, setSearchedMovies] = useState([]);
//   const query = searchParams.get('query') ?? '';
//   const location = useLocation();

//   const handleSubmit = query => {
//     setSearchParams(query !== '' ? { query: query } : {});
//   };
//   useEffect(() => {
//     if (query) {
//       getSearchedMovies(query)
//         .then(movies => {
//           if (movies.length === 0) {
//             return toast.error(
//               'Sorry, there are no movies matching your search query. Please try again.'
//             );
//           }
//           setSearchedMovies(movies);
//         })
//         .catch(error => toast.error('Something went wrong. Please try again.'));
//     }
//   }, [query]);

//   return (
//     <main>
//       <SearchForm onSubmit={handleSubmit} />
//       <Suspense fallback={<Loader />}>
//         {searchedMovies && (
//           <MovieList data={searchedMovies} url="" location={location} />
//         )}
//       </Suspense>
//     </main>
//   );
// };
// export default Movies;
