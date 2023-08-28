import "./Collapse.css";
import React from "react";

import { useState } from "react";

export default function Collapse() {

  const [selected, setSelected] = useState(null)

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null)
    }

    setSelected(i)
  }

  const text = [
    {
      title: 'fiabilite',
      paragraphe: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.'
    },
    {
      title: 'respect',
      paragraphe: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
    },
    {
      title: 'service',
      paragraphe: 'Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N\'hésitez pas à nous contacter si vous avez la moindre question.'
    },
    {
      title: 'securite',
      paragraphe: 'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l\'hôte qu\'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.'
    }
  ]
  return (
    <>
      <div className="wrapper">
        <div className="accordion">
          {text.map((item, i) => (
            <>
              <div className="item">
                <div className="title" onClick={() => toggle(i)}>
                  <h2>{item.title}</h2>
                  <span>{selected === i ? '-' : '+'}</span>
                </div>
                <div className={selected === i ? 'content show' : 'content'}>{item.paragraphe}</div>
              </div>

            </>
          ))}
        </div>
      </div>
    </>

  );
};