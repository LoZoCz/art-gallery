import { Firstcolumn } from "./Firstcolumn";

export const MainGallery = () => {
  return (
    <main className="main-cont">
      <Firstcolumn maxIndex={5} minIndex={0} />
      <Firstcolumn maxIndex={10} minIndex={5} />
      <Firstcolumn maxIndex={15} minIndex={10} />
    </main>
  );
};
