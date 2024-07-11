import { BsFillBagFill } from "react-icons/bs";

const Card = ({ img, title, star, reviews, prevPrice, newPrice, addToList }) => {

  return (
    <>
      <section className="p-4 shadow-lg w-64 m-5">
        <img src={img} alt={title} className="card-img" />
        <div className="card-details">
          <h3 className="card-title">{title}</h3>
          <section className="card-reviews flex flex-row">
            {star} {star} {star} {star}
            <span className="total-reviews">{reviews}</span>
          </section>
          <section className="card-price">
            <div className="price">
              <del>{prevPrice}</del> {newPrice}
            </div>
            <div className="bag text-xl cursor-pointer" onClick={() => addToList({ img, title, star, reviews, prevPrice, newPrice})}>
              <BsFillBagFill className="bag-icon" />
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Card;