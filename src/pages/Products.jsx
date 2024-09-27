import React, { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://strapi-store-server.onrender.com/api/products")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      setProducts(data.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  }, []);

  return (
    <div className="bg-gray-900 text-white p-8 grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
      {products.map((product) => (
        <div key={product.id} className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow" >
          <img src={product.attributes.image} alt={product.attributes.name} className="rounded-lg mb-4 w-96 h-52" />
          <h2 className="text-xl font-bold text-center">{product.attributes.title}</h2>
          <p className="text-violet-700 text-center">${product.attributes.price}</p>
        </div>
      ))}
    </div>
  );
};
export default Products;
