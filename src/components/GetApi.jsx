import { useEffect, useState, useTransition } from "react";

export default function GetApi() {
  const [products, setProducts] = useState([]);
  const [pending, setTransition] = useTransition();

  const GetProducts = () => {
    setTransition(async () => {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setProducts(data.products);
    });
  };

  return (
    <div>
      <h1>Fetch Products Data from API</h1>
      <button disabled={pending} onClick={GetProducts}>
        {pending ? "fetching..." : "Fetch Products"}
      </button>
      {products &&
        products.splice(0, 10).map((product) => (
          <ul key={product.id}>
            <li>Product Name: {product.title}</li>
            <ul>
              <li>Product Category: {product.category}</li>
              <li>Price: ${product.price}</li>
              <li>Brand: {product.brand}</li>
            </ul>
          </ul>
        ))}
    </div>
  );
}
