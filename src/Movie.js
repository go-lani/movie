import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';

const Movie = ({ id, year, title, summary, poster, genres }) => {
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title} />
      <div className="movie__data">
        <h2 className="movie__title">{title}</h2>
        <h3 className="movie__year">{year}</h3>
        <ul className="movie__genres">
          {genres.map(genre => (
            <li key={uuid.v4()} className="genres__genre">
              {genre}
            </li>
          ))}
        </ul>
        <p className="movie__summary">{summary.slice(0, 140)}...</p>
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
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
