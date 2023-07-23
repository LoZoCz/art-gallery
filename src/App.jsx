import "../dist/style.css";
import { Navbar } from "./components/Navbar";
import { Firstcolumn } from "./components/Firstcolumn";

function App() {
  return (
    <>
      <Navbar />
      <main className="main-cont">
        <Firstcolumn maxIndex={5} minIndex={0} />
        <Firstcolumn maxIndex={10} minIndex={5} />
        <Firstcolumn maxIndex={15} minIndex={10} />
      </main>
    </>
  );
}

export default App;
