import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';
import Navigation from './Navigation';
import Header from './Header';

const MovieDetailsPage = lazy(() => import('views/MovieDetailsPage'));
const HomePage = lazy(() => import('views/HomePage'));
const MoviesPage = lazy(() => import('views/MoviesPage'));
const NotFoundView = lazy(() => import('views/NotFoundView'));

const StyledContainerSpinner = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 150px;
`;

export function App() {
  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <Suspense
        fallback={
          <StyledContainerSpinner>
            <RotatingLines width="100" strokeColor="#fff" strokeWidth="1" />
          </StyledContainerSpinner>
        }
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:id/*" element={<MovieDetailsPage />} />
          <Route path="*" element={<NotFoundView />} />
        </Routes>
      </Suspense>
      <ToastContainer theme="dark" />
    </>
  );
}
