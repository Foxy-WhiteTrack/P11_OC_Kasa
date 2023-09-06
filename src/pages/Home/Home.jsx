import React from 'react';
import { Link } from 'react-router-dom'; // Importe le composant Link
import Banner from '../../components/Banner/Banner';
import jsonData from '../../datas/logements.json';
import './Home.css';
import Card from '../../components/Cards/Cards';
import bannerImage from '../../assets/ban-accueil.png';

export default function Home() {
  return (
    <>
      <Banner imageUrl={bannerImage} slogan="Chez vous, partout et ailleurs" />
      <div className="grid-container">
        {jsonData.map((item) => (
          <Link to={`/housing/${item.id}`} key={item.id}> {
            <Card
              title={item.title}
              cover={item.cover}
            />
          }
          </Link>
        ))}
      </div>
    </>
  );
}
