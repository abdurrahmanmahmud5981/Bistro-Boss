
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MenuItem from "../Shared/MenuItem/MenuItem";
import useMenu from "../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu()
  const popular = menu.filter(item => item.category === 'popular')
 
  return (
    <div>
      <SectionTitle
        heading={"From Our Menu"}
        subHeading={"Popular Menu Items"}
      />
      <div className="grid md:grid-cols-2 gap-12">
        {popular.map((item, index) => (
          <MenuItem key={index} item={item}/>
        ))}
      </div>
      <button className="btn btn-outline border-0 border-b-4">View Full Menu</button>

    </div>
  );
};

export default PopularMenu;
