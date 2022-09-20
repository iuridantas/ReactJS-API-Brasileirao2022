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

  async function getTime() {
    const times = await api.getAllTimes();
    setTimeList(times);
  }

  function handleModal() {
    setModalIsOpen(!modalIsOpen);
  }

  useEffect(() => {
    getTime();
  }, []);

  return (
    <>
      <Header />
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
      </Modal>
    </>
  );
}
