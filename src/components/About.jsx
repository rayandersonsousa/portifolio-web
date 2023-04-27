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
            Desenvolvedor Web Full Stack. Crio páginas web com UI / UX user interface, APIs, 
            Bancos de dados relacionais e não relacionais, e também o Backend que consome API e
            alimenta o Fronend.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About;