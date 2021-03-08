import './Accueil.scss';

export default function Accueil() {
  
  return (
    <div className="Accueil">
      <h3 className="logo">Signets <span>beta</span></h3>
      <h2 className="amorce">Organisez vos signets,<br />c'est simple comme bonjour.</h2>
      <h4 className="etiquette">Connexion à Signets</h4>
      <div id="connexion-firebaseui"></div>
    </div>
  );
}