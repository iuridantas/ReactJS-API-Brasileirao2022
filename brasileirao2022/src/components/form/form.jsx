import { useState } from 'react';
import { api } from '../../utils/api/api';

export function Form() {
  const [newTime, setNewTime] = useState();
  async function handleSubmit(event) {
    event.preventDefault();

    await api.createTime(newTime);
  }

  return (
    <div className="form">
      <form onSubmit={handleSubmit} className="form-inputs">
        <section>
          <span>Name:</span>
          <input
            type="text"
            name="name"
            onChange={(event) => {
              setNewTime({ ...newTime, name: event.target.value });
            }}
          ></input>
        </section>
        <section>
          <span>Foundation:</span>
          <input
            type="number"
            name="foundation"
            onChange={(event) => {
              setNewTime({ ...newTime, foundation: event.target.value });
            }}
          ></input>
        </section>
        <section>
          <span>Shield:</span>
          <input
            type="text"
            name="shield"
            onChange={(event) => {
              setNewTime({ ...newTime, shield: event.target.value });
            }}
          ></input>
        </section>
        <section>
          <span>Mascot:</span>
          <input
            type="text"
            name="mascot"
            onChange={(event) => {
              setNewTime({ ...newTime, mascot: event.target.value });
            }}
          ></input>
        </section>
        <section>
          <span>Localization:</span>
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
  )
}
