import React from 'react';
import Banner from '../../components/Banner/Banner';
import logementData from '../../datas/logements.json';
import './Home.css';
import bannerImage from '../../assets/ban-accueil.png';


export default function Home() {
  return (
    <>
    <Banner imageUrl={bannerImage} slogan="Chez vous, partout et ailleurs" />
    <div className="grid-container">
      {logementData.map((logement) => (
        <div className="grid-item" key={logement.id}>
          <img src={logement.cover} alt={logement.title} />
          <h3>{logement.title}</h3>
        </div>
      ))}
    </div>
    </>
  )
}