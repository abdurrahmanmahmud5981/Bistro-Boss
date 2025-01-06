import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const iamge_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const AddItems = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    
  };
  return (
    <div>
      <SectionTitle heading={"add an item"} subHeading={"what's new?"} />

      <div className="">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className=" form-control w-full my-6">
            <label className=" label" htmlFor="name">
              <span className="label-text">Recipe Name*</span>
            </label>
            <input
              className="input input-bordered w-full "
              type=" text"
              placeholder="Recipe Name"
              {...register("name",{required:true})}
            />
          </div>
          <div className="flex justify-between items-center gap-4">
            {/* category */}
            <div className=" form-control w-full my-6">
              <label className=" label" htmlFor="name">
                <span className="label-text">Category*</span>
              </label>
              <select
                defaultValue={'default'}
                className=" select select-bordered w-full "
                {...register("category",{required:true})}
                placeholder="category"
              >
                <option disabled value='default'>
                  Select Category
                </option>
                <option value="salad">Salad</option>
                <option value="salad">Salad</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
            </div>
            {/* price */}
            <div className=" form-control w-full my-6">
              <label className=" label" htmlFor="name">
                <span className="label-text">Price*</span>
              </label>
              <input
                className="input input-bordered w-full "
                type="number"
                placeholder="Price"
                {...register("price",{required:true})}
              />
            </div>
          </div>
          {/* recipe details */}

          <label className="form-control">
            <div className="label">
              <span className="label-text">Recipe Details*</span>
            </div>
            <textarea
              {...register("recipe",{required:true})}
              className="textarea textarea-bordered h-24"
              placeholder="Recipe Details"
            ></textarea>
          </label>
          <div
             className="form-control w-full my-5"
          >
            <input
             {...register('image',{required:true})}
              type="file"
              className="file-input file-input-bordered w-full max-w-xs"
            />
          </div>
          <button className="btn btn-neutral " type="submit">Add Item <FaUtensils className="ml-2"/></button>
        </form>

        {/* display all items */}
        {/* <ItemList /> */}
      </div>
    </div>
  );
};

export default AddItems;
