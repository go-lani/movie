import React from 'react';
import PropTypes from 'prop-types';

const Movie = ({ id, year, title, summary, poster }) => {
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title} />
      <div className="movie__data">
        <h2 className="movie__title">{title}</h2>
        <h3 className="movie__year">{year}</h3>
        <p className="movie__summary">{summary}</p>
      </div>
    </div>
  );
};

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Movie;
