import React from 'react';
import './Rating.css';
import StarActive from '../Icons/StarActive';
import StarInactive from '../Icons/StarInactive';

const Rating = ({ value, max }) => {
    const stars = [];
    for (let i = 1; i <= max; i++) {
        if (i <= value) {
            stars.push(<StarActive key={i} />);
        } else {
            stars.push(<StarInactive key={i} />);
        }
    }

    return (
        <div className="rating-items">
            {stars}
        </div>
    );
};

export default Rating;