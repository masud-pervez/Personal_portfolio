import React from "react";
import "./testmonials.css";
import Avatar1 from "../../assets/1.png";
import Avatar2 from "../../assets/Biprodas-roy.jpg";
import Avatar3 from "../../assets/gautam.jpg";
// import Avatar4 from "../../assets/sokal.jpg";

// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: Avatar1,
    name: "Ruhit Hassan",
    contact: "https://www.facebook.com/ruhithassan.rafi",
    review: `Each year, these investigations are made 
            public so that individuals and companies developing 
            innovations within these areas will have 
            the opportunity to submit achievements for review.`,
  },
  {
    avatar: Avatar2,
    name: "Biprodas Roy",
    contact: 'https://www.facebook.com/biprodasry',
    review: `Each year, these investigations are made 
            public so that individuals and companies developing 
            innovations within these areas will have 
            the opportunity to submit achievements for review.`,
  },
  {
    avatar: Avatar3,
    name: "Gowtam Kumar",
    contact: 'https://www.facebook.com/Gowtamkumar17',
    review: `Each year, these investigations are made 
            public so that individuals and companies developing 
            innovations within these areas will have 
            the opportunity to submit achievements for review.`,
  },
  // {
  //   avatar: Avatar4,
  //   name: "Innovations",
  //   review: `Each year, these investigations are made 
  //           public so that individuals and companies developing 
  //           innovations within these areas will have 
  //           the opportunity to submit achievements for review.`,
  // },
];

const Testmonials = () => {
  return (
    <section id="Testmonials" className="mb-5">
      <h2>Testmoials</h2>
      <Swiper
        className="container test_container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map((item, index) => {
          const { avatar, name, review, contact } = item;
          return (
            <SwiperSlide className="testmonial d-flex" key={index}>
              <div className="">
                <img src={avatar} className="img-fluid mx-4 rounded-pill" alt="" style={{width:'60%'}} />
              </div>
              <div>
                <h1 className="mt-5">
                  <a href={contact} target="blank" className="nav-link fs-2">
                    {name}
                  </a>
                </h1>
                <small className="client_review">{review}</small>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testmonials;
