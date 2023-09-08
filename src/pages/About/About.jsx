import React from "react";
import Collapse from "../../components/Collapse/Collapse";
import Banner from '../../components/Banner/Banner';
import bannerImage from '../../assets/ban-about.png';
import "./About.css";

export default function About() {
  const text = [
    {
      title: "Fiabilité",
      paragraphe:
        "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
    },
    {
      title: "Respect",
      paragraphe:
        "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    },
    {
      title: "Service",
      paragraphe:
        "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
    },
    {
      title: "Sécurite",
      paragraphe:
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
  ];

  return (
    <>
      <Banner imageUrl={bannerImage} slogan="" />
      {text.map((section, index) => (
        <Collapse key={index} customClass="about-collapse" items={[section]} />
      ))}
    </>
  );
}
