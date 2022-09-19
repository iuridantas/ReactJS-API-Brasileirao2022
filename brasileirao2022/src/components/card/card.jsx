import './card.css';

export function Card() {
  return (
    <div className="card-component">
      <h2>Time Name</h2>
      <section className="card-infos">
        <span className="card-span">Name:</span>
        <h3>Name</h3>
      </section>
      <section className="card-infos">
        <span className="card-span">Shield:</span>
        <h3>Shield</h3>
      </section>
      <section className="card-infos">
        <span className="card-span">Foundation:</span>
        <h3>Foundation</h3>
      </section>
      <section className="card-infos">
        <span className="card-span">Mascot:</span>
        <h3>Mascot</h3>
      </section>
      <section className="card-infos">
        <span className="card-span">Localization:</span>
        <h3>Localization</h3>
      </section>
    </div>
  );
}
