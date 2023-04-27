import React from "react";
import "../css/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Rayanderson Sousa</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">Sobre mim</a>
          </li>

          <li>
            <a href="#projects" className="footer__link">Projetos</a>
          </li>

          <li>
            <a href="#qualification" className="footer__link">Qualificação</a>
          </li>
        </ul>

        <div className="footer__social">
          <a
          href="https://www.linkedin.com/in/rayanderson-sousa/"
          className="footer__social-link"
          target="_blank"
          rel="noreferrer noopener"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
          <a
            href="https://github.com/rayandersonsousa"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer noopener"
          >
            <i className="bx bxl-github"></i>
          </a>
          <a
            href="https://twitter.com/harpe_erudon"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer noopener"
          >
            <i className="bx bxl-twitter"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; Rayanderson Sousa. Todos os direitos reservados
        </span>
      </div>
    </footer>
  )
}

export default Footer;