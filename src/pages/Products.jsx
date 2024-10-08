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
    <div className="  p-8 grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
      {products.map((product) => (
        <div key={product.id} className="p-1 rounded-lg shadow-2xl hover:shadow-xl transition-shadow" >
          <img src={product.attributes.image} alt={product.attributes.name} className="rounded-lg mb-4 w-96 h-52 object-cover" />
          <h2 className="text-xl font-bold text-center">{product.attributes.title}</h2>
          <p className="text-violet-700 text-center">${product.attributes.price}</p>
        </div>
      ))}
    </div>
  );
};
export default Products;
