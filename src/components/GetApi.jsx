import { useEffect, useState } from "react";

export default function GetApi() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    GetProducts();
  }, []);

  const GetProducts = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    setProducts(data.products);
  };

  return (
    <div>
      <h1>Fetch Products Data from API</h1>
      {products &&
        products.splice(0, 10).map((product) => (
          <ul key={product.id}>
            <li>Product Name: {product.title}</li>
            <li>Product Category: {product.category}</li>
            <li>Price: {product.price}</li>
            <li>Rating: {product.rating}</li>
            <li>Stock: {product.stock}</li>
            <li>Brand: {product.brand}</li>
          </ul>
        ))}
    </div>
  );
}
