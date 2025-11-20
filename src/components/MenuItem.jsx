import React from "react";
import PropTypes from "prop-types";

export default function MenuItem({ id, name, category, price, description, isVegetarian }) {
  return (
    <article className="menu-card" aria-labelledby={`title-${id}`}>
      <header className="menu-card-header">
        <h4 id={`title-${id}`} className="menu-card-title">{name}</h4>
        <div className="price">₹{price.toFixed(2)}</div>
      </header>

      <p className="menu-card-desc">{description}</p>

      <div className="menu-card-meta">
        <span className="category">{category}</span>
        {isVegetarian ? <span className="veg-badge">Vegetarian</span> : null}
      </div>
    </article>
  );
}

MenuItem.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string,
  isVegetarian: PropTypes.bool
};

MenuItem.defaultProps = {
  description: "",
  isVegetarian: false
};
