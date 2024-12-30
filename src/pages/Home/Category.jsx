import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import slide1 from '../../assets/home/slide1.jpg';
import slide2 from '../../assets/home/slide2.jpg';
import slide3 from '../../assets/home/slide3.jpg';
import slide4 from '../../assets/home/slide4.jpg';
import slide5 from '../../assets/home/slide5.jpg';
import SectionTitle from "../../components/SectionTitle/SectionTitle";


const Category = () => {
  return (
    <div>
      <SectionTitle subHeading={'From 11.00am to 10.00pm'} heading={'Order Online'} />
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={false}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slide1} alt="Slide 1" />
          <h2 className="text-3xl font-semibold uppercase -mt-16 text-white shadow-xl text-center">salads</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="Slide 2" />
          <h2 className="text-3xl font-semibold uppercase -mt-16 text-white shadow-xl text-center">pizza</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="Slide 3" />
          <h2 className="text-3xl font-semibold uppercase -mt-16 text-white shadow-xl text-center">soups</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="Slide 4" />
          <h2 className="text-3xl font-semibold uppercase -mt-16 text-white shadow-xl text-center">desserts</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="Slide 5" />
          <h2 className="text-3xl font-semibold uppercase -mt-16 text-white shadow-xl text-center">salads</h2>
        </SwiperSlide>
       
      </Swiper>
    </div>
  );
};

export default Category;
