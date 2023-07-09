import { useState } from "react";
import data from "./data";
import MenuItem from "./MenuItem";
import Button from "./Button";

const App = () => {
  const [menu, setMenu] = useState(data);
  const [option, setOption] = useState("all");

  const handleClick = (click) => {
    setOption(click);
    return () => (click = "");
  };

  return (
    <main>
      <section className="menu">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="title-underline"></div>
        </div>
        <div className="btn-container">
          <Button key={"all"} text={"all"} handleClick={handleClick} />
          <Button
            key={"breakfast"}
            text={"breakfast"}
            handleClick={handleClick}
          />
          <Button key={"lunch"} text={"lunch"} handleClick={handleClick} />
          <Button key={"shakes"} text={"shakes"} handleClick={handleClick} />
        </div>
        <div className="section-center">
          <MenuItem menu={menu} option={option} />;
        </div>
      </section>
    </main>
  );
};
export default App;
