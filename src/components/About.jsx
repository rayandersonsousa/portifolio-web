import React from "react";
import '../css/About.css';
import MyImg from '../assets/noteb.png'
import Info from "./Info";

function About() {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">Sobre mim</h2>
      <p className="section__subtitle">Introdução</p>

      <div className="about__container container grid">
        <img src={ MyImg } alt="Rayanderson" className="about__img"/>
        <div className="about__data">
          <Info />
          <p className="about__description">
            Sou um Desenvolvedor Web Full Stack. Crio páginas web com UI/UX user interface. Também
            crio e gerencio Bancos de dados e APIs.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About;