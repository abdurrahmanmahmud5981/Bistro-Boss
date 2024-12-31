import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import menuImg from "../../assets/menu/banner3.jpg";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
import useMenu from "../../hooks/useMenu";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MenuCategory from "../Shared/MenuItem/MenuCategory";
const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div>
      <Helmet>
        <title>Menu - Bistro Boss</title>
        <meta
          name="description"
          content="Discover our delicious and diverse menu"
        />
      </Helmet>
      <section>
        {/* main cover */}
        <Cover img={menuImg} title={"our menu"} />
        <SectionTitle subHeading={"Don't Miss"} heading={"today's offer"} />
        {/* offered cover */}
        <MenuCategory items={offered} />
        {/* dessert menu items */}
        <MenuCategory
          items={dessert}
          title={"dessert"}
          coverImage={dessertImg}
        />
        {/* pizza  */}
        <MenuCategory items={pizza} title={"pizza"} coverImage={pizzaImg} />
        {/* salad */}
        <MenuCategory items={salad} title={"salad"} coverImage={saladImg} />
        {/* soup */}
        <MenuCategory items={soup} title={"soup"} coverImage={soupImg} />
      </section>
    </div>
  );
};

export default Menu;
