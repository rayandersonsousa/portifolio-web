import React from "react";

function Info() {
  return(
    <div className="about__info grid">
      <div className="about__box">
        <h3 className="about__title">Experiência</h3>
        <span className="about__subtitle">10 mêses de estudos na Trybe</span>
      </div>
      <div className="about__box">
        <h3 className="about__title">Concluídos</h3>
        <span className="about__subtitle">35+ projetos</span>
      </div>
      <div className="about__box">
        <h3 className="about__title">Suporte</h3>
        <span className="about__subtitle">Online 24/7</span>
      </div>
    </div>
  )
}

export default Info;