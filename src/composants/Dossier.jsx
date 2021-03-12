import './Dossier.scss'; 
import { IconButton } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import MoreVertIcon from '@material-ui/icons/MoreVert';

export default function Dossier({id, nom, couleur, date_modif}) {
  const dateModif = formaterDate(date_modif);
  return (
    <article className="Dossier" style={{backgroundColor: couleur}}>
      <div className="couverture">
        <IconButton className="deplacer" aria-label="déplacer" disableRipple={true}>
          <SortIcon />
        </IconButton>
        <img src={`images-dossiers/${id}.png`} alt={nom}/>
      </div>
      <div className="info">
        <h2>{nom}</h2>
        <p>Modifié : {dateModif}</p>
      </div>
      <IconButton className="modifier" aria-label="modifier" size="small">
        <MoreVertIcon />
      </IconButton>
    </article>
  );
}

/**
 * Formate les dates Firestore en chaîne de caractères
 * @param {Object} d Objet date spécial à Firestore
 * @returns String une chaîne représentant la date en français
 */
function formaterDate(d) {
  return new Date(d.seconds*1000).toLocaleString();
}