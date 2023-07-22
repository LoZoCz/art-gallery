import "../dist/style.css";
import { Firstcolumn } from "./components/Firstcolumn";

function App() {
  return (
    <>
      <header className="main-head">
        <a href="#" className="logo">
          <h1>galleria.</h1>
        </a>
        <p className="slide-show-btn">start slideshow</p>
      </header>
      <main className="main-cont">
        <div className="column-box">
          <Firstcolumn maxIndex={5} minIndex={0} />
        </div>
        <div className="column-box">
          <Firstcolumn maxIndex={10} minIndex={5} />
        </div>
        <div className="column-box">
          <Firstcolumn maxIndex={15} minIndex={10} />
        </div>
      </main>
    </>
  );
}

export default App;
