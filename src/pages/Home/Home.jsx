import { Helmet } from "react-helmet-async"
import Banner from "./Banner"
import Category from "./Category"
import Featured from "./Featured"
import PopularMenu from "./PopularMenu"
import Testimonial from "./Testimonial"

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home - Bistro Boss</title>
        <meta name="description" content="Welcome to Bistro Boss, our home for fine dining and a relaxed atmosphere" />
      </Helmet>
        <Banner/>
        <Category/>
        <PopularMenu/>
        <Featured/>
        <Testimonial/>
    </div>
  )
}

export default Home