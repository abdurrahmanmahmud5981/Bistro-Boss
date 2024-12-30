import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MenuItem from "../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((response) => response.json())
      .then((data) => {
        const popularMenu = data.filter((item) => item.category === "popular");
        setMenu(popularMenu);
      });
  }, []);
  return (
    <div>
      <SectionTitle
        heading={"From Our Menu"}
        subHeading={"Popular Menu Items"}
      />
      <div className="grid md:grid-cols-2 gap-12">
        {menu.map((item, index) => (
          <MenuItem key={index} item={item}/>
        ))}
      </div>
      <button className="btn btn-outline border-0 border-b-4">View Full Menu</button>

    </div>
  );
};

export default PopularMenu;
