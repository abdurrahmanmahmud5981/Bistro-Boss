/* eslint-disable react/prop-types */
const FoodCard = ({item}) => {
  const {name , image, price, recipe} = item;

  return (
    <div>
      <div className="card bg-base-100  shadow-xl">
        <figure>
          <img
            src={image}
            alt={name}
          />
        </figure>
        <p className="bg-slate-900 absolute right-2 top-2 p-2 rounded-md text-white">${price}</p>
        <div className="card-body flex flex-col items-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-outline border-0 border-orange-400 bg-slate-100 border-b-4">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
