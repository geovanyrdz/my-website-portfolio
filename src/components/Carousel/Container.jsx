// src/components/Projects/Carousel/Container.jsx
import React from 'react';

// import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import {EffectCoverflow, Navigation, Pagination, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import styles from './Container.module.css'; // Importa los estilos del módulo CSS
import projects from "../../data/projects.json";
import { ProjectCard } from "../Projects/ProjectCard"; 


// Componente GallerySwiper
const Container = () => {
  return (
    <div className={styles.swiper_container}>
      <h2 className={styles.heading}>Data Projects</h2>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'} 
        spaceBetween={50}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          modifier: 3,
          depth: 30,
          slideShadows: false,
        }}
        pagination={{ el: `.${styles.swiper_pagination}`, clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation, A11y]}
        className={styles.mySwiper}
      > 
        {projects.map((project, index) => (
          <SwiperSlide key={index} className={styles.swiper_slide}>
            <ProjectCard project={project} />
          </SwiperSlide>
        ))}
        
        <div className={styles.slider_controler}>
          <div className={`${styles.swiper_button_prev} slider_arrow`}>
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className={`${styles.swiper_button_next} slider_arrow`}>
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className={styles.swiper_pagination}></div>
        </div>
        
      </Swiper>
    </div>
  );
}

export default Container;