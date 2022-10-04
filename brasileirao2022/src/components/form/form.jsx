import { useState } from 'react';
import { api } from '../../utils/api/api';
import './form.css';

export function Form({ getALL, handleModal }) {
  const [newTime, setNewTime] = useState();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    setLoading(true);
    event.preventDefault();

    await api.createTime(newTime);
    await getALL();
    setLoading(false);
    handleModal();
  }

  return (<> 
  {loading ? (
    <div> loading...</div>
  ) : (
    <div className="form">
      <form onSubmit={handleSubmit} className="form-inputs">
        <section>
          <span>Nome:</span>
          <input
            type="text"
            name="name"
            onChange={(event) => {
              setNewTime({ ...newTime, name: event.target.value });
            }}
          ></input>
        </section>
        <section>
          <span>Fundação:</span>
          <input
            type="number"
            name="foundation"
            onChange={(event) => {
              setNewTime({ ...newTime, foundation: event.target.value });
            }}
          ></input>
        </section>
        <section>
          <span>Escudo:</span>
          <input
            type="text"
            name="shield"
            onChange={(event) => {
              setNewTime({ ...newTime, shield: event.target.value });
            }}
          ></input>
        </section>
        <section>
          <span>Mascote:</span>
          <input
            type="text"
            name="mascot"
            onChange={(event) => {
              setNewTime({ ...newTime, mascot: event.target.value });
            }}
          ></input>
        </section>
        <section>
          <span>Localização:</span>
          <input
            type="text"
            name="localization"
            onChange={(event) => {
              setNewTime({ ...newTime, localization: event.target.value });
            }}
          ></input>
        </section>
        <button type="submit" className="btn-submit">
          Submit
        </button>
      </form>
    </div>
  )}
  </>)
}
