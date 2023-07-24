import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMaximize,
  faForwardFast,
  faBackwardFast,
} from "@fortawesome/free-solid-svg-icons";
import Data from "../data.json";
import "../../dist/style.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export const Painting = ({ paintingId }) => {
  const dataLength = Data.length;
  const currentIndex = Data.findIndex((item) => item.id === paintingId);

  const nextPaintingId =
    currentIndex < dataLength - 1 ? Data[currentIndex + 1].path : null;
  const prevPaintingId = currentIndex > 0 ? Data[currentIndex - 1].path : null;
  return (
    <>
      {Data.filter((item) => item.id === paintingId).map((item) => {
        const indicatorStyle = {
          height: "1.25px",
          backgroundColor: "#212529",
          width: `calc(${item.id} / 15 * 100%)`,
          position: "absolute",
          top: 0,
          left: 0,
        };

        return (
          <>
            <main className="image-wrapper">
              <div className="image-preview">
                <div className="image-box">
                  <img src={item.painting} alt="opis" />
                  <button className="view-whole-image">
                    <FontAwesomeIcon icon={faMaximize} className="btn-icon" />
                    view image
                  </button>
                </div>
                <div className="author-info">
                  <h1 className="image-name">{item.name}</h1>
                  <p className="author-name">{item.author}</p>
                </div>
              </div>
              <div className="image-decription">
                <span className="date-text">{item.year}</span>
                <p className="image-desc">{item.description}</p>
                <a href={item.link} className="painting-link">
                  got to source
                </a>
              </div>
            </main>
            <footer className="main-footer">
              <div className="names-wrapper">
                <p className="foot-painting-author">{item.name}</p>
                <p className="foot-painting-name">{item.author}</p>
              </div>
              <div className="arrow-btn-wrapper">
                <Link
                  to={`${prevPaintingId}`}
                  data-active={currentIndex > 0 ? "true" : "false"}
                >
                  <button
                    className="prev-btn"
                    disabled={currentIndex <= 0}
                    data-active={currentIndex > 0 ? "true" : "false"}
                  >
                    <FontAwesomeIcon
                      icon={faBackwardFast}
                      className="btn-arrow"
                    />
                  </button>
                </Link>
                <Link
                  to={`${nextPaintingId}`}
                  data-active={currentIndex < dataLength - 1 ? "true" : "false"}
                >
                  <button
                    className="next-btn"
                    disabled={currentIndex >= dataLength - 1}
                    data-active={
                      currentIndex < dataLength - 1 ? "true" : "false"
                    }
                  >
                    <FontAwesomeIcon
                      icon={faForwardFast}
                      className="btn-arrow"
                    />
                  </button>
                </Link>
              </div>
              <span className="imageIndicator" style={indicatorStyle}></span>
            </footer>
          </>
        );
      })}
    </>
  );
};

Painting.propTypes = {
  paintingId: PropTypes.number,
};
