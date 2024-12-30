import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
const Testimonial = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((response) => response.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <section>
      <SectionTitle
        subHeading={"what out client say"}
        heading={"Testimonial"}
      />
      <div className="">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper my-20"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="p-6 text-center flex flex-col items-center mx-20 my-12">
                <Rating style={{ maxWidth: 180 }} value={review.rating} readOnly />
                <p className="my-6">{review.details}</p>
                <h2 className="text-2xl text-orange-500">{review.name}</h2>
              </div>
            </SwiperSlide>
          ))}
          
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
