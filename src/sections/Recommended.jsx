import Button from "../components/Button";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div className="p-3 mt-16">
        <h2 className="recommended-title">Recommended</h2>
        <div className="flex items-start">
          <Button onClickHandler={handleClick} value="" title="All Products" />
          <Button onClickHandler={handleClick} value="Nike" title="Nike" />
          <Button onClickHandler={handleClick} value="Adidas" title="Adidas" />
          <Button onClickHandler={handleClick} value="Puma" title="Puma" />
          <Button onClickHandler={handleClick} value="Vans" title="Vans" />
        </div>
      </div>
    </>
  );
};

export default Recommended;