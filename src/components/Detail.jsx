import { useParams } from "react-router-dom";
import { useState } from "react";
import ProductData from "../data/ProductData";

function ProductDetail() {
  const { id } = useParams();

  const product = ProductData.find((p) => p.id === Number(id));

  // ✅ MUST BE HERE (top level)
  const [count, setCount] = useState(1);

  // ➕ increase
  const increase = () => {
    setCount(count + 1);
  };

  // ➖ decrease
  const decrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  // 🔄 reset
  const reset = () => {
    setCount(1);
  };

  if (!product) return <h2>Product not found</h2>;

  return (
    <div className="product-detail container">

      {/* LEFT SIDE IMAGE */}
      <div className="left">
        <div className="main-image">
          <img src={product.image} alt={product.title} />
        </div>

        <div className="thumb">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
      </div>

      {/* RIGHT SIDE CONTENT */}
      <div className="right">

        <h1 className="title">{product.title}</h1>

        <p className="desc">{product.desc}</p>

        {/* TAGS */}
        <div className="tags">
          {product.tags.map((t, i) => (
            <span key={i}>{t}</span>
          ))}
        </div>

        {/* PRICE */}
        <div className="price">
          <h2>₹{product.price}</h2>
          <del>₹{product.oldPrice}</del>
          <span className="save">{product.save}</span>
        </div>

        {/* QTY */}
        <div className="qty">

          <button onClick={decrease}>-</button>

          <span>{count}</span>

          <button onClick={increase}>+</button>

        </div>

        {/* RESET (optional) */}
      

        {/* BUTTONS */}
        <div className="buttons">
          <button className="cart">ADD TO CART</button>
          <button className="buy">BUY NOW</button>
        </div>

        {/* EXTRA INFO */}
        <div className="extra">
          <p>✔ Free shipping above ₹499</p>
          <p>✔ COD available</p>
          <p>✔ Easy 7-day returns</p>
        </div>

      </div>

    </div>
  );
}

export default ProductDetail;