import React from "react";

const SingleItem = ({ id, img, title, price, desc }) => {
  console.log(id);
  return (
    <article className="menu-item">
      <img className="img" src={img} alt={title} />
      <div className="item-info">
        <header>
          <h5>{title}</h5>
          <span className="item-price">{price}</span>
        </header>
        <p>{desc}</p>
      </div>
    </article>
  );
};

export default SingleItem;
