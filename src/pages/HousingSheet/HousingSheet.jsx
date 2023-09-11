import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import jsonData from '../../datas/logements.json';

import Slideshow from '../../components/Slideshow/Slideshow';
import Tag from '../../components/Tag/Tag';
import Collapse from '../../components/Collapse/Collapse';
import './HousingSheet.css';
import Rating from '../../components/Rating/Rating';

export default function HousingSheet() {
  const { id } = useParams();
  const navigate = useNavigate();

  const housing = jsonData.find(item => item.id === id);

  useEffect(() => {
    if (!housing) {
      navigate('/error404');
    }
  }, [housing, navigate]);

  if (!housing) {
    return null;
  }

  const hostName = housing.host.name;
  const hostAvatar = housing.host.picture;

  return (
    <div className="housing-sheet">
      {/* Carrousel d'images */}
      <Slideshow images={housing.pictures} />
      <div className='header-housing'>

        <div className='header-left'>
          {/* Titre */}
          <h1 className='red'>{housing.title}</h1>

          {/* Emplacement */}
          <p className='red'>{housing.location}</p>

          {/* Tag */}
          <div className="tags">
            {housing.tags.map((tags, index) => (
              <Tag key={index} text={tags} />
            ))}
          </div>
        </div>
        <div className='header-right'>
          <div className='header-right-up'>
            {/* Propriétaire */}
            <div className='host'>
              <h2 className='red'>{hostName}</h2>
              <img src={hostAvatar} alt={`Avatar de ${hostName}`} />
            </div>
          </div>
          <div className='header-right-down'>
            {/* Rating */}
            <div className="rating">
              <Rating value={housing.rating} max={5} />
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
                paragraphe: housing.equipments.map((equipments, index) => (
                  <p key={index}>{equipments}</p>
                ))
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
