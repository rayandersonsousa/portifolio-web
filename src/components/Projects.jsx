import React from "react";
import projectsData from "../Data";
import { Swiper, SwiperSlide } from "swiper/react";

import '../css/Projects.css';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from "swiper";

function Projects() {
  return (
    <section  className="project container section" id="projects">
      <h2 className="section__title">Projetos</h2>
      <span className="section__subtitle">
        Veja meus projetos
      </span>

      <Swiper
        className="project__container"
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination]}
      >
        {
          projectsData.map(({id, image, title, git, app}) => {
            return (
              <SwiperSlide className="project__card" key={id}>
                <img src={image} alt={title} className="project__img"/>
                <h3 className="project__name">{ title }</h3>
                <div  className="project__social-icons">
                  <a
                    href={app}
                    className="project__social-icon"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="uil uil-window"></i>
                  </a>

                  <a
                    href={git}
                    className="project__social-icon"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="uil uil-github-alt"></i>
                  </a>
                </div>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Projects;