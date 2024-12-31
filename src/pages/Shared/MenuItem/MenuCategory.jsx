/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Cover from "../Cover/Cover";
import MenuItem from "./MenuItem";

const MenuCategory = ({ items, title, coverImage }) => {
  return (
    <div className="pt-8">
     { title && <Cover img={coverImage} title={title} />}

      <div className="grid md:grid-cols-2 gap-12 mt-16">
        {items.map((item, index) => (
          <MenuItem key={index} item={item} />
        ))}
      </div>
      <Link to={`/order/${title && title}`}>
       <button className="btn btn-outline border-0 border-b-4"> Order Now</button>
      </Link>
    </div>
  );
};

export default MenuCategory;
