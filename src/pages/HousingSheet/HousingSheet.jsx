import React from 'react';
import { useParams } from 'react-router-dom';
import jsonData from '../../datas/logements.json';

import Slideshow from '../../components/Slideshow/Slideshow';
import Tag from '../../components/Tag/Tag';
import Collapse from '../../components/Collapse/Collapse';
import './HousingSheet.css';

import { StarActive } from "../../components/Icons/StarActive";
import { StarInactive } from "../../components/Icons/StarInactive";



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
      const StarIcon = i <= rating ? StarActive : StarInactive;
      const starColor = i <= rating ? '#FF6060' : '#E3E3E3';
      stars.push(<StarIcon key={i} style={{ color: starColor }} />);
    }
    return stars;
  };

  return (
    <div className="housing-sheet">
      {/* Carrousel d'images */}
      <Slideshow images={housing.pictures} />
      <div className='header-housing'>

        <div className='header-up'>
          <div className='header-up-left'>
            {/* Titre */}
            <h1 className='red'>{housing.title}</h1>

            {/* Emplacement */}
            <p className='red'>{housing.location}</p>
          </div>
          <div className='header-up-right'>
            {/* Propriétaire */}
            <div className='host'>
              <h2 className='red'>{hostName}</h2>
              <img src={hostAvatar} alt={`Avatar de ${hostName}`} />
            </div>
          </div>
        </div>
        <div className='header-down'>
          <div className='header-down-right'>
            {/* Tag */}
            <div className="tags">
              {housing.tags.map((tags, index) => (
                <Tag key={index} text={tags} />
              ))}
            </div>
          </div>
          <div className='header-down-left'>
            {/* Rating */}
            <div className="rating">
              {generateStars(rating)}
            </div>
          </div>
        </div>
      </div>
      <div className='body-housing'>
        {/* Description */}
        <div className="description">
          <Collapse customClass="housing-collapse"
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
          <Collapse customClass="housing-collapse"
            items={[
              {
                title: "Équipements",
                paragraphe: housing.equipments.map((equipments) => (
                  <p>{equipments}</p>
                ))
              },
            ]}
          />
        </div>
      </div>










    </div>
  );
}
