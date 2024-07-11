
const Products = ({ result }) => {

    return (
      <div className="relative">
        <section className="card-container flex flex-wrap flex-row justify-center gap-5">
          {result}
        </section>
      </div>
    );
  };
  
  export default Products;