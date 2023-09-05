import React from 'react';
import Banner from '../../components/Banner/Banner';
import jsonData  from '../../datas/logements.json';
import './Home.css';
import Card from '../../components/Cards/Cards';
import bannerImage from '../../assets/ban-accueil.png';


export default function Home() {
  return (
    <>
    <Banner imageUrl={bannerImage} slogan="Chez vous, partout et ailleurs" />
    <div className="grid-container">
    {jsonData.map((item) => (
        <Card
          key={item.id}
          title={item.title}
          cover={item.cover}
        />
      ))}
    </div>
    </>
  )
}