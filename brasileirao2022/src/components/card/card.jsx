import './card.css';

export function Card({ name, shield, foundation, mascot, localization, color }) {
  return (
    <div className="card-component" style={{backgroundColor: color}}>
      <h2>{name}</h2>
      <section className="card-infos">
        <span></span>
        <img src={shield} alt="escudo" height="100" width="100"></img>
      </section>
      <section className="card-infos">
        <h3>Fundação: {foundation}</h3>
      </section>
      <section className="card-infos">
        <h3>Mascote: {mascot}</h3>
      </section>
      <section className="card-infos">
        <h3>Localização: {localization}</h3>
      </section>
    </div>
  );
}
