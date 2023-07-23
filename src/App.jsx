import "../dist/style.css";
import { MainGallery } from "./components/MainGallery";
import { Painting } from "./components/Painting";
import { Navbar } from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainGallery />} />
          <Route path="/painting" element={<Painting />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
