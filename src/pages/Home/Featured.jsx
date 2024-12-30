import SectionTitle from "../../components/SectionTitle/SectionTitle"
import featuredImg from '../../assets/home/featured.jpg'
import  './featured.css';
const Featured = () => {
  return (
    <div className="featured bg-fixed text-white">
        <SectionTitle subHeading={'check it out'} heading={'featured item'}/>
        <div className="md:flex justify-center items-center px-36 py-14 bg-slate-400/20">
            <div className="">
                <img src={featuredImg} alt="featured" className="max-w-sm"/>
               
            </div>
            <div className="w-full md:ml-12 ">
                <p>Aug 20, 2009</p>
                <h2 className="uppercase">where can i get some?</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in ipsum vel erat convallis malesuada.</p>
                <a href="#" className="btn btn-outline border-0 border-b-4">Order Now</a>
            </div>
        </div>
    </div>  
  )
}

export default Featured