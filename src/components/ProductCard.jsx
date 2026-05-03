import "./ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="card">
     <img
  src={
    product.thumbnail ||
    product.images?.[0] ||
    "https://via.placeholder.com/300x200?text=No+Image"
  }
  alt={product.title}
  className="card-img"
/>

      <h2 className="card-title">{product.title}</h2>

      <p className="card-desc">{product.description}</p>

      <div className="card-footer">
        <span className="price">₹{product.price}</span>
        <span className="rating">⭐ {product.rating}</span>
      </div>
    </div>
  );
};

export default ProductCard;