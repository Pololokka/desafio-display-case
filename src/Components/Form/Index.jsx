import { items } from "../Data/db";

const Form = () => {
  const handleSubmit = () => {
    console.log("foi");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label
          htmlFor="product-name"
          className="subtitulo sombra-subtitulo-hover"
        >
          Nome
        </label>
        <input type="text" name="product-name" className="texto" />
      </form>
    </div>
  );
};

export default Form;
