import Data from "../data.json";
import PropTypes from "prop-types";

export const Firstcolumn = ({ maxIndex, minIndex }) => {
  return (
    <>
      {Data.filter((item) => item.id <= maxIndex && item.id > minIndex).map(
        (item) => {
          return (
            <div className="painting-wrapper" key={item.id}>
              <img src={item.painting} alt={item.name} />
              <div className="content-box">
                <h3>{item.name}</h3>
                <p>{item.author}</p>
              </div>
            </div>
          );
        }
      )}
    </>
  );
};

Firstcolumn.propTypes = {
  maxIndex: PropTypes.number,
  minIndex: PropTypes.number,
};
