import React from 'react';
import { useParams } from 'react-router-dom';
import jsonData from '../../datas/logements.json';

import Slideshow from '../../components/Slideshow';
import Tags from '../../components/Tag/Tag';
import Collapse from '../../components/Collapse/Collapse';
import './HousingSheet.css';


export default function HousingSheet() {
  const { id } = useParams();

  const housing = jsonData.find(item => item.id === id);

  if (!housing) {
    return <p>Logement introuvable</p>;
  }

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
