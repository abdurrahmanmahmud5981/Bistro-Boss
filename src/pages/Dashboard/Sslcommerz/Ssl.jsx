const Ssl = () => {
  return (
    <div>
        <h2 className="text-4xl font-bold text-center my-8">Pay Your Bill</h2>
      <select className="select select-bordered w-full max-w-xs">
        <option disabled selected>
            Choose a Payment Method
        </option>
        <option>Sslcommerz</option>
        
      </select>

      <div className="">
        <input type="email" placeholder="email" className="border-2 border-gray-300 w-full p-4 text-gray-800 rounded-lg" />
       
      </div>
    </div>
  );
};

export default Ssl;
