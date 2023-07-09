import React from "react";
import SingleItem from "./SingleItem";

const MenuItem = ({ menu, option }) => {
  const { id, category } = menu;
  let newArray = [];
  return (
    <>
      {option === "all"
        ? menu.map((item) => <SingleItem key={item.id} {...item} />)
        : (newArray = menu
            .filter((item) => item.category === option)
            .map((item) => <SingleItem key={item.id} {...item} />))}
    </>
  );
};
export default MenuItem;
