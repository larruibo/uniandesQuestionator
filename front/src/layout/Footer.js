import React from "react";

const Footer = () => (
  <footer>
    <div className="container-fluid">
      <div className="footer row">
        <div className="blanco extra col-12 col-lg-5 offset-lg-1">
          <p>
            Hecho con amor y bajo mucha presión, by Luis 🤷🏿‍♂️ y Sebastián en
            Febrero de 2020.
          </p>
        </div>
        <div className="blanco extra col-12 col-lg-5">
          <a
            className="linkPagina"
            href="https://www.instagram.com/luchorb/"
            target="_blank"
          >
            <i className="fa fa-instagram"></i>
          </a>
          <a
            className="linkPagina"
            href="https://www.twitter.com/luchorb/"
            target="_blank"
          >
            <i className="fa fa-twitter"></i>
          </a>
          <a
            className="linkPagina"
            href="https://www.linkedin.com/in/luis-alfonso-ruiz-botero-b87305145/"
            target="_blank"
          >
            <i className="fa fa-linkedin"></i>
          </a>
          <a
            className="linkPagina"
            href="https://github.com/larruibo"
            target="_blank"
          >
            <i className="fa fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
