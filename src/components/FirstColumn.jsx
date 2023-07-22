import Data from "../data.json";
import PropTypes from "prop-types";

export const Firstcolumn = ({ maxIndex, minIndex }) => {
  return (
    <>
      {Data.filter((item) => item.id <= maxIndex && item.id > minIndex).map(
        (item) => {
          return (
            <div
              className="painting-wrapper"
              key={item.id}
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(0, 212, 255, 0) 0%, rgba(33, 37, 41, 1) 100%), url('${item.painting}')`,
              }}
            >
              <h3>{item.name}</h3>
              <p>{item.author}</p>
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
