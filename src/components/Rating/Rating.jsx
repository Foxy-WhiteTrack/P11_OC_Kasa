import React from 'react';
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
        <div className="rating">
            {stars}
        </div>
    );
};

export default Rating;