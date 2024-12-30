
const MenuItem = ({item}) => {
  const {name , image, price, recipe} = item;
  return (
    <div>
        <div  className="flex gap-4 mb-6">
            <img style={{borderRadius: '0 200px 200px 200px'}} src={image}alt="" className="w-[100px] object-cover " />
            <div className="">
              <h3 className="uppercase">{name}-----------</h3>
              <p>Recipe: {recipe}</p>
              <button className="btn btn-primary">Order Now</button>
            </div>
            <p className="text-yellow-500">${price}</p>

          </div>
    </div>
  )
}

export default MenuItem