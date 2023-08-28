import { Link } from 'react-router-dom';

export default function Error404() {
  return (
    <>
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/" className="Link">Retourner sur la page d'accueil</Link>
    </>
  )
}