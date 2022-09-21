import { Card } from '../../components/card/card';
import { Header } from '../../header/header';
import './home.css';
import { api } from '../../utils/api/api';
import { useState, useEffect } from 'react';
import { CgCloseR } from 'react-icons/cg';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    rigth: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    width: '40%',
    height: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  overlay: {
    background: 'rgba(0, 0, 0, 0.4)',
  },
};

Modal.setAppElement('#root');

export function Home() {
  const [timeList, setTimeList] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [uniqueTime, setUniqueTime] = useState({});
  const [editTime, setEditTime] = useState(false);

  async function getTime() {
    const times = await api.getAllTimes();
    setTimeList(times);
  }

  function deleteTime(timeId) {
    api.deleteTime(timeId);
    const newTimeList = timeList;
    newTimeList.map((time, index) => {
      if (time._id === timeId) {
        newTimeList.splice(index, 1);
        setTimeList(newTimeList);
        handleModal();
      }
    });
  }

  function handleModal() {
    setModalIsOpen(!modalIsOpen);
  }

  function changeTime(event) {
    event.preventDefault();

    const updatedTime = {
      _id: uniqueTime._id,
      name: event.target.name.value,
      shield: event.target.shield.value,
      foundation: event.target.foundation.value,
      mascot: event.target.mascot.value,
      localization: event.target.localization.value,
    };

    const newTimeList = timeList;
    newTimeList.map((item, index) => {
      if (item._id === updatedTime._id) {
        newTimeList.splice(index, 1, updatedTime);
        setTimeList(newTimeList);
        handleModal();
      }
    });
    setEditTime(false);
    api.updateTime(updatedTime);
  }

  useEffect(() => {
    getTime();
  }, []);

  return (
    <section className="home">
      <Header getALL={getTime} />
      <div className="card-list">
        {timeList.map((item, index) => {
          return (
            <button
              className="button-card"
              onClick={() => {
                setUniqueTime(item);
                handleModal();
              }}
              key={index}
            >
              <Card
                name={item.name}
                shield={item.shield}
                foundation={item.foundation}
                mascot={item.mascot}
                localization={item.localization}
              />
            </button>
          );
        })}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleModal}
        style={customStyles}
        contentLabel="Card Details"
      >
        {editTime ? (
          <>
            <div className="form">
              <form onSubmit={changeTime} className="form-inputs">
                <section>
                  <span>Name:</span>
                  <input
                    type="text"
                    name="name"
                    defaultValue={uniqueTime.name}
                  ></input>
                </section>
                <section>
                  <span>Foundation:</span>
                  <input
                    type="number"
                    name="foundation"
                    defaultValue={uniqueTime.foundation}
                  ></input>
                </section>
                <section>
                  <span>Shield:</span>
                  <input
                    type="text"
                    name="shield"
                    defaultValue={uniqueTime.shield}
                  ></input>
                </section>
                <section>
                  <span>Mascot:</span>
                  <input
                    type="text"
                    name="mascot"
                    defaultValue={uniqueTime.mascot}
                  ></input>
                </section>
                <section>
                  <span>Localization:</span>
                  <input
                    type="text"
                    name="localization"
                    defaultValue={uniqueTime.localization}
                  ></input>
                </section>
                <button type="submit" className="btn-submit">
                  Submit
                </button>
              </form>
            </div>
          </>
        ) : (
          <>
            <section>
              <section className="display-button">
                <button className="button" onClick={handleModal}>
                  <CgCloseR size={28} color="red" />
                </button>
              </section>
              <h2>{uniqueTime.name}</h2>
              <h3>{uniqueTime.shield}</h3>
              <h3>{uniqueTime.foundation}</h3>
              <h3>{uniqueTime.mascot}</h3>
              <h3>{uniqueTime.localization}</h3>
            </section>
            <button
              onClick={() => {
                setEditTime(true);
              }}
            >
              Edit
            </button>
            <button
              onClick={() => {
                deleteTime(uniqueTime._id);
              }}
            >
              Delete
            </button>
          </>
        )}
      </Modal>
    </section>
  );
}
