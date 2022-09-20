import './card.css';

export function Card({ name, shield, foundation, mascot, localization }) {
  return (
    <div className="card-component">
      <h2>{name}</h2>
      <section className="card-infos">
        <span className="card-span">Escudo:</span>
        <h3>{shield}</h3>
      </section>
      <section className="card-infos">
        <span className="card-span">Fundação:</span>
        <h3>{foundation}</h3>
      </section>
      <section className="card-infos">
        <span className="card-span">Mascote:</span>
        <h3>{mascot}</h3>
      </section>
      <section className="card-infos">
        <span className="card-span">Localização:</span>
        <h3>{localization}</h3>
      </section>
    </div>
  );
}
