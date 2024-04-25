// import React, { useState, useEffect } from "react";

// const Slider = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const slides = document.querySelectorAll(".carousel-item");
//   const slideCount = slides.length;

//   useEffect(() => {
//     const slideInterval = setInterval(() => {
//       nextSlide();
//     }, 5000);

//     return () => clearInterval(slideInterval);
//   }, [currentSlide]);

//   const nextSlide = () => {
//     setCurrentSlide((currentSlide + 1) % slideCount);
//   };
//   return (
//     <>
//       <section id="hero">
//         <div
//           id="heroCarousel"
//           data-bs-interval="5000"
//           className="carousel slide carousel-fade"
//           data-bs-ride="carousel"
//         >
//           <ol
//             className="carousel-indicators"
//             id="hero-carousel-indicators"
//           ></ol>

//           <div className="carousel-inner" role="listbox">
//             <div
//               className="carousel-item active"
//               Style="background-image: url(../assets/img/slide/slide-1.jpg)"
//             >
//               <div className="carousel-container">
//                 <div className="container">
//                   <h2 className="animate__animated animate__fadeInDown">
//                     Chào mứng tới <span>MINHSPORT</span>
//                   </h2>
//                   <p className="animate__animated animate__fadeInUp">
//                      là một trong những trang web bán hàng trực
//                     tuyến lớn nhất tại Đông Nam Á, SHOP có một bộ sưu tập rộng
//                     lớn các loại giày thể cho nam, nữ và trẻ em từ các thương
//                     hiệu nổi tiếng trên thế giới.
//                   </p>
//                   <a
//                     href="#about"
//                     className="btn-get-started animate__animated animate__fadeInUp scrollto"
//                   >
//                     Tìm hiểu thêm
//                   </a>
//                 </div>
//               </div>
//             </div>

//             <div
//               className="carousel-item"
//               Style="background-image: url(../assets/img/slide/slide-2.jpg)"
//             >
//               <div className="carousel-container">
//                 <div className="container">
//                   <h2 className="animate__animated animate__fadeInDown">
//                     Lorem Ipsum Dolor
//                   </h2>
//                   <p className="animate__animated animate__fadeInUp">
//                     Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea
//                     ut et est quaerat sequi nihil ut aliquam. Occaecati alias
//                     dolorem mollitia ut. Similique ea voluptatem. Esse
//                     doloremque accusamus repellendus deleniti vel. Minus et
//                     tempore modi architecto.
//                   </p>
//                   <a
//                     href="#about"
//                     className="btn-get-started animate__animated animate__fadeInUp scrollto"
//                   >
//                     Tìm hiểu thêm
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <a
//             className="carousel-control-prev"
//             href="#heroCarousel"
//             role="button"
//             data-bs-slide="prev"
//           >
//             <span
//               className="carousel-control-prev-icon bi bi-chevron-left"
//               aria-hidden="true"
//             >
//               <i className="fa-solid fa-chevron-left"></i>
//             </span>
//           </a>

//           <a
//             className="carousel-control-next"
//             href="#heroCarousel"
//             role="button"
//             data-bs-slide="next"
//           >
//             <span
//               className="carousel-control-next-icon bi bi-chevron-right"
//               aria-hidden="true"
//             >
//               <i className="fa-solid fa-chevron-right"></i>
//             </span>
//           </a>
//         </div>
//       </section>
//     </>
//   );
// };
// export default Slider;

import React, { useState, useEffect } from "react";
// import "./Slider.css";

const slidesData = [
  {
    image: "https://anhdep123.com/wp-content/uploads/2021/01/anh-giay-converse.jpg",
    // title: "Slide 1",
    // description: "This is slide 1",
  },
  {
    image: "https://th.bing.com/th/id/R.1a0b031c1dee49cb4653676b167bdab1?rik=ymskOPIsuQg%2bHA&pid=ImgRaw&r=0",
    // title: "Slide 2",
    // description: "This is slide 2",
  },
  {
    image: "https://th.bing.com/th/id/R.90cd0ffb6cca120b11febdd74698a21a?rik=0MCMq8OFzUCdKA&pid=ImgRaw&r=0",
    // title: "Slide 3",
    // description: "This is slide 3",
  },
];

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === slidesData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? slidesData.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider">
      <div className="slides-container">
        {slidesData.map((slide, index) => (
          <div
            key={index}
            className={index === activeIndex ? "slide active" : "slide"}
          >
            <img src={slide.image} alt={slide.title} />
            <div className="slide-content">
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="slides-navigation">
        <button className="prev-btn" onClick={prevSlide}>
          Prev
        </button>
        <button className="next-btn" onClick={nextSlide}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Slider;
