import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from 'services/movie-api';
import MoviesList from 'components/MoviesList';
import Title from 'components/Title';
import Container from 'components/Container';
import Section from 'components/Section';
import Spinner from 'components/Spinner';

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    setStatus('pending');
    fetchTrendingMovies().then(res => {
      setStatus('resolved');
      setMovies(res.results);
    });
  }, []);
  return (
    <Section>
      <Container>
        <Title />
        {status === 'pending' && <Spinner />}
        {movies && status === 'resolved' && <MoviesList movies={movies} />}
      </Container>
    </Section>
  );
}
