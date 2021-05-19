import React from 'react';
import PropTypes from 'prop-types';
import Star from './Star';

// Fonte: https://javascript.plainenglish.io/how-to-build-a-star-rating-component-in-react-dad06b05679b
export default function Rating(props) {
  const {
    index,
    rating,
    onSaveRating,
  } = props;

  const fill = React.useMemo(() => {
    if (rating >= index) {
      return 'yellow';
    }
    return 'none';
  }, [rating, index]);

  return (
    <div
      onClick={ () => onSaveRating(index) }
      role="button"
      tabIndex={ 0 }
      onKeyDown={ onSaveRating }
    >
      <Star fill={ fill } />
    </div>
  );
}

Rating.propTypes = {
  index: PropTypes.number,
  rating: PropTypes.number,
  onSaveRating: PropTypes.func,
}.isRequired;
