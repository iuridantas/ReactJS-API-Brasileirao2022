import Modal from 'react-modal';
import { useState } from 'react';
import { AiOutlineFileAdd } from 'react-icons/ai';
import './header.css';

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

export function Header() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function handleModal() {
    setModalIsOpen(!modalIsOpen);
  }

  return (
    <div>
      <header>
        <section>
          <img src="./liga.png" alt="logo" height='40' width='40'></img>
        </section>
        <section>
          <button onClick={handleModal}><AiOutlineFileAdd size={28}/>Add Time</button>
        </section>
      </header>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleModal}
        style={customStyles}
        contentLabel="Card Details"
      ></Modal>
    </div>
  );
}