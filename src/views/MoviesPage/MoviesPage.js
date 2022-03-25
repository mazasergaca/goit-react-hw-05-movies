import { useState, useEffect } from 'react/';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';

import { fetchSearchMovies } from 'services/movie-api';
import MoviesList from 'components/MoviesList';
import Container from 'components/Container';
import NotFoundMovies from 'components/NotFoundMovies';
import InputMovies from 'components/InputMovies';
import Section from 'components/Section';
import Spinner from 'components/Spinner';

export default function MoviesPage() {
  const [nameSearch, setNameSearch] = useState('');
  const [movies, setMovies] = useState(null);
  const [status, setStatus] = useState('idle');

  const navigate = useNavigate();
  const location = useLocation();

  const searchParam = new URLSearchParams(location.search).get('query');

  useEffect(() => {
    if (searchParam) {
      setStatus('pending');
      return fetchSearchMovies(searchParam.toLowerCase())
        .then(res => {
          if (res.results.length < 1) {
            return Promise.reject(new Error('Not Found'));
          }
          setMovies(res);
          setStatus('resolved');
        })
        .catch(error => {
          setStatus('rejected');
        });
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  function onSubmitForm(e) {
    e.preventDefault();
    if (nameSearch.trim() === '') {
      toast.info('Please input text');
      return;
    }
    navigate({ ...location, search: `query=${nameSearch}` });
    setStatus('pending');
    fetchSearchMovies(nameSearch.toLowerCase())
      .then(res => {
        if (res.results.length < 1) {
          return Promise.reject(new Error('Not Found'));
        }
        setMovies(res);
        setStatus('resolved');
      })
      .catch(error => {
        setStatus('rejected');
        toast.error('Please enter another text');
      });

    setNameSearch('');
  }

  function handleNameChange(e) {
    setNameSearch(e.target.value);
  }

  return (
    <Section>
      <Container>
        <InputMovies
          onSubmit={onSubmitForm}
          onChange={handleNameChange}
          value={nameSearch}
        />
        {status === 'pending' && <Spinner />}
        {movies && status === 'resolved' && (
          <MoviesList movies={movies.results} />
        )}

        {status === 'rejected' && <NotFoundMovies />}
      </Container>
    </Section>
  );
}
