import './footer.css';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className="footer">
      <>
        <a href= 'https://www.linkedin.com/in/iuri-dantas-20388911a/' target="_blank" className="icons">
          <FaLinkedin className="linkedin" />
        </a>
        <a href= 'https://github.com/iuridantas' target="_blank" className="icons">
        <FaGithub className="github" />
        </a>
        <a href= 'https://www.instagram.com/iuri.dantass/' target="_blank" className="icons">
        <FaInstagram className="instagram" />
        </a>
      </>
    </footer>
  );
}
