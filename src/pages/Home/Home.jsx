import Banner from "./Banner"
import Category from "./Category"
import Featured from "./Featured"
import PopularMenu from "./PopularMenu"
import Testimonial from "./Testimonial"

const Home = () => {
  return (
    <div>
        <Banner/>
        <Category/>
        <PopularMenu/>
        <Featured/>
        <Testimonial/>
    </div>
  )
}

export default Home