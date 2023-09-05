import React from 'react';
import { useParams } from 'react-router-dom';
import jsonData from '../../datas/logements.json';

import Slideshow from '../../components/Slideshow';
import Tags from '../../components/Tag/Tag';
import Collapse from '../../components/Collapse/Collapse';
import './HousingSheet.css';

import { FaStar, FaRegStar } from 'react-icons/fa';



export default function HousingSheet() {
  const { id } = useParams();

  const housing = jsonData.find(item => item.id === id);

  if (!housing) {
    return <p>Logement introuvable</p>;
  }

  const hostName = housing.host.name;
  const hostAvatar = housing.host.picture;

  const rating = housing.rating;

  const generateStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const StarIcon = i <= rating ? FaStar : FaRegStar;
      const starColor = i <= rating ? '#FF6060' : '#E3E3E3';
      stars.push(<StarIcon key={i} style={{ color: starColor }} />);
    }
    return stars;
  };

  return (
    <div className="housing-sheet">

      {/* Carrousel d'images */}
      <Slideshow images={housing.pictures} />

      {/* Titre */}
      <h1>{housing.title}</h1>

      {/* Emplacement */}
      <p>{housing.location}</p>

      {/* Tags */}
      <div className="tags">
        {housing.tags.map((tags, index) => (
          <Tags key={index} text={tags} />
        ))}
      </div>

      {/* Propriétaire */}
      <div className='host'>
        <h2>{hostName}</h2>
        <img src={hostAvatar} alt={`Avatar de ${hostName}`} />
      </div>
      {/* Rating */}
      <div className="rating">
        {generateStars(rating)}
      </div>

      {/* Description */}
      <div className="description">
        <Collapse
          items={[
            {
              title: "Description",
              paragraphe: housing.description,
            },
          ]}
        />
      </div>

      {/* Equipements */}
      <div className="equipements">
        <Collapse
          items={[
            {
              title: "Équipements",
              paragraphe: housing.equipments.join(", "),
            },
          ]}
        />
      </div>




    </div>
  );
}
