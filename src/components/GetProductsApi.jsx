import { useState, useTransition } from "react";

export default function GetProductsApi() {
  const [products, setProducts] = useState([]);
  const [pending, startTransition] = useTransition();

  const productsApi = () => {
    startTransition(async () => {
      const response = await fetch("https://dummyjson.com/carts");
      const data = await response.json();
      setProducts(data.carts);
    });
  };

  return (
    <div>
      <h1>Products</h1>
      <button disabled={pending} onClick={productsApi}>
        {pending ? "Getting..." : " Get Products"}
      </button>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px",
        }}
      >
        {products.map((item) =>
          item.products.map((product, idx) => (
            <div
              key={idx}
              style={{ border: "1px solid #ccc", borderRadius: "8px" }}
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                style={{ width: "200px" }}
              />
              <div style={{ padding: "20px" }}>
                <h3>{product.title}</h3>
                <h5>${product.price.toLocaleString()}</h5>
              </div>
            </div>
          )),
        )}
      </div>
    </div>
  );
}
