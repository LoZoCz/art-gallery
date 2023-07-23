import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMaximize } from "@fortawesome/free-solid-svg-icons";
import "../../dist/style.css";
export const Painting = () => {
  return (
    <main className="image-wrapper">
      <div className="image-preview">
        <div className="image-box">
          <img src="public/america_gothic.jpg" alt="opis" />
          <button className="view-whole-image">
            <FontAwesomeIcon icon={faMaximize} />
            view image
          </button>
        </div>
        <div className="author-info">
          <h1 className="image-name">chuj dupa cyce</h1>
          <p className="author-name">kurwa mac jebac</p>
        </div>
      </div>
      <div className="image-decription">
        <span className="date-text">1999</span>
        <p className="image-desc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut rerum
          vel consectetur cupiditate pariatur optio tempora in iure architecto
          atque.
        </p>
        <a href="link">got to source</a>
      </div>
    </main>
  );
};
