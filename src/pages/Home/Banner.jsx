import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import image1 from '../../assets/home/01.jpg';
import image2 from '../../assets/home/02.jpg';
import image3 from '../../assets/home/03.png';
import image4 from '../../assets/home/04.jpg';
import image5 from '../../assets/home/05.png';
import image6 from '../../assets/home/06.png';
const Banner = () => {
  return (
    <div>
          <Carousel>
                <div>
                    <img src={image1} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={image2} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={image3} />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={image4} />
                    <p className="legend">Legend 4</p>
                </div>
                <div>
                    <img src={image5} />
                    <p className="legend">Legend 5</p>
                </div>
                <div>
                    <img src={image6} />
                    <p className="legend">Legend 6</p>
                </div>
            </Carousel>
    </div>
  )
}

export default Banner