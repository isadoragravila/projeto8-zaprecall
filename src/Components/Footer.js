import Final from "./Final";

export default function Footer({ arrIcons, flashcards }) {
  return (
    <footer>
      {arrIcons.length !== flashcards.length ? (
        ""
      ) : (
        <Final arrIcons={arrIcons} />
      )}
      <p>
        {arrIcons.length}/{flashcards.length} CONCLUÍDOS
      </p>
      <div>
        {arrIcons.map((icon) => (
          <ion-icon name={icon}></ion-icon>
        ))}
      </div>
    </footer>
  );
}