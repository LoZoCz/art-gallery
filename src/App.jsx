import "./style.scss";
import { MainGallery } from "./components/MainGallery";
import { Painting } from "./components/Painting";
import { Navbar } from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Data from "./data.json";

function App() {
  return (
    <BrowserRouter>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainGallery />} />
          {Data.map((item) => {
            return (
              <Route
                path={item.path}
                element={<Painting paintingId={item.id} />}
                key={item.id}
              />
            );
          })}
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
