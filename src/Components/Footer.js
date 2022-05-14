import Final from "./Final";
import Restart from "./Restart";

export default function Footer({ arrIcons, flashcards, setTela }) {
  return (
    <footer>
      {arrIcons.length !== flashcards.length ? "" : <Final arrIcons={arrIcons} /> }
      <p>{arrIcons.length}/{flashcards.length} CONCLUÍDOS</p>
      <div>
        {arrIcons.map((icon, index) => ( <ion-icon key={index} name={icon}></ion-icon> ))}
      </div>
      {arrIcons.length !== flashcards.length ? "" : <Restart setTela={setTela} /> }
    </footer>
  );
}


