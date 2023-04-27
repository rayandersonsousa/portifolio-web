import React from "react";
import Frontend from "./FrontEnd";
import Backend from "./BackEnd";
import '../css/Skills.css';

function Skills() {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <p className="section__subtitle">Meu nivel técnico</p>

      <div className="skills__container container grid">
        <Frontend />
        <Backend />
      </div>
    </section>
  )
}

export default Skills;