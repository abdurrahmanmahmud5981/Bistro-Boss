import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const iamge_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const UpdateItem = () => {
  const {name,category,recipe,price,_id} = useLoaderData();
  console.log(name,category,recipe,price,_id);
  const { register, handleSubmit,reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const onSubmit = async (data) => {
      // console.log(data);
      const imageFile ={image: data.image[0]};
      // console.log(imageFile);
      const res = await axiosPublic.post(iamge_hosting_api,imageFile,{
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      if(res.data.success){
        // now send the data to the database
        const menuItem = {
          name: data.name,
          category: data.category,
          price: parseFloat(data.price),
          recipe: data.recipe,
          image: res.data.data.display_url,
        }
        // 
        const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
        console.log(menuRes.data);
        if(menuRes.data.modifiedCount > 0) {
          reset()
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${data.name}  updated successfully`,
            showConfirmButton: false,
            timer: 1500
          });
        }
      }
      console.log(res.data.data.display_url
      );
    };


  return (
    <div>
      <SectionTitle heading={"Update Item"} subHeading={"Refresh Info"} />

      <div className="">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className=" form-control w-full my-6">
            <label className=" label" htmlFor="name">
              <span className="label-text">Recipe Name*</span>
            </label>
            <input
            defaultValue={name}
              className="input input-bordered w-full "
              type=" text"
              placeholder="Recipe Name"
              {...register("name", { required: true })}
            />
          </div>
          <div className="flex justify-between items-center gap-4">
            {/* category */}
            <div className=" form-control w-full my-6">
              <label className=" label" htmlFor="name">
                <span className="label-text">Category*</span>
              </label>
              <select
                defaultValue={category}
                className=" select select-bordered w-full "
                {...register("category", { required: true })}
                placeholder="category"
              >
                <option disabled value="default">
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
              defaultValue={price}
                className="input input-bordered w-full "
                type="number"
                placeholder="Price"
                {...register("price", { required: true })}
              />
            </div>
          </div>
          {/* recipe details */}

          <label className="form-control">
            <div className="label">
              <span className="label-text">Recipe Details*</span>
            </div>
            <textarea
            defaultValue={recipe}
              {...register("recipe", { required: true })}
              className="textarea textarea-bordered h-24"
              placeholder="Recipe Details"
            ></textarea>
          </label>
          <div className="form-control w-full my-5">
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input file-input-bordered w-full max-w-xs"
            />
          </div>
          <button className="btn btn-neutral " type="submit">
            Update Menu Item <FaUtensils className="ml-2" />
          </button>
        </form>

        {/* display all items */}
        {/* <ItemList /> */}
      </div>
    </div>
  );
};

export default UpdateItem;
