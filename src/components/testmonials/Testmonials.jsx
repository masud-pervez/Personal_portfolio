import React from "react";
import "./testmonials.css";
import Avatar1 from "../../assets/avatar1.jpg";
import Avatar2 from "../../assets/avatar2.jpg";
import Avatar3 from "../../assets/avatar3.jpg";
import Avatar4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import  { Swiper,SwiperSlide } from 'swiper/react';
import  { Pagination } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: Avatar1,
    name: "Tina Snow",
    review: `Each year, these investigations are made 
            public so that individuals and companies developing 
            innovations within these areas will have 
            the opportunity to submit achievements for review.`,
  },
  {
    avatar: Avatar2,
    name: "Achievements",
    review: `Each year, these investigations are made 
            public so that individuals and companies developing 
            innovations within these areas will have 
            the opportunity to submit achievements for review.`,
  },
  {
    avatar: Avatar3,
    name: "Opportunity",
    review: `Each year, these investigations are made 
            public so that individuals and companies developing 
            innovations within these areas will have 
            the opportunity to submit achievements for review.`,
  },
  {
    avatar: Avatar4,
    name: "Innovations",
    review: `Each year, these investigations are made 
            public so that individuals and companies developing 
            innovations within these areas will have 
            the opportunity to submit achievements for review.`,
  },
];

const Testmonials = () => {
  return (
    <section id="Testmonials">
      <h5>Review from clients</h5>
      <h2>Testmonials</h2>

      <Swiper className="container test_container"
      modules={[Pagination ]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true}}
    >
        {data.map((item,index) => {
          const { avatar ,name ,review } = item;
          return (
            <SwiperSlide className="testmonial" key={index}>
              <div className="client_avatar">
                <img src={avatar} alt="" />
              </div>
              <h5 className="client_name">{name}</h5>
              <small className="client_review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
      </section>
  );
};

export default Testmonials;
