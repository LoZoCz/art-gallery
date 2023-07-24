import Data from "../data.json";
import { Link } from "react-router-dom";

export const PaintingBox = () => {
  return (
    <>
      {Data.map((item) => {
        return (
          <Link to={item.path} key={item.id}>
            <div className="painting-wrapper" key={item.id}>
              <img src={item.painting} alt={item.name} />
              <div className="content-box">
                <h3>{item.name}</h3>
                <p>{item.author}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
};
