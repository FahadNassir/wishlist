const Button = ({ onClickHandler, value, title }) => {
    return (
      <button onClick={onClickHandler} value={value} className="px-2 py-1 border border-black rounded m-1">
        {title}
      </button>
    );
  };
  
  export default Button;