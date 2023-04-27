import React, { useState } from "react";
import '../css/Qualification.css'

function Qualification() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualificação</h2>
      <p className="section__subtitle">Minha jornada pessoal</p>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className={toggleState === 1 ? "qualification__button qualification__active button--flex"
          : "qualification__button button--flex"}
          onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            {" "}Formação
          </div>

          <div className={toggleState === 2 ? "qualification__button qualification__active button--flex"
          : "qualification__button button--flex"}
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            {" "}Experiência
          </div>
        </div>

        <div className="qualification__sections">
          <div className={toggleState === 1 ? "qualification__content qualification__content-active"
          : "qualification__content"}>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Desenvolvimento Web Fundamentos</h3>
                <span className="qualification__subtitle">Trybe</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2022 - 2022
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Desenvolvimento Web Frontend</h3>
                <span className="qualification__subtitle">Trybe</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2022 - 2022
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Desenvolvimento Web Backend</h3>
                <span className="qualification__subtitle">Trybe</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2022 - Presente
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={toggleState === 2 ? "qualification__content qualification__content-active"
            : "qualification__content"}
          >
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Freelancer</h3>
                <span className="qualification__subtitle">Remoto</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2023 - Presente
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Qualification;