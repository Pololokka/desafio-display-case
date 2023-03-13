const Input = ({ title, type, name, value, setState, className }) => {
  return (
    <>
      <label htmlFor="product-name" className="texto sombra-texto-hover">
        {title}
      </label>
      <input
        type={type}
        name={`product-${name}`}
        className={`texto ${className}`}
        onChange={(event) => setState(event.target.value)}
        value={value || ""}
      />
    </>
  );
};

export default Input;
