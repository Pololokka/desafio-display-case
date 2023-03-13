import "./Styles.css";

import { items } from "../../Data/db";
import Input from "../Input/Index";

import { useState } from "react";

const Form = () => {
  const [product, setProduct] = useState("");
  const [img, setImg] = useState("");
  const [price, setPrice] = useState(0);
  const [priceDis, setPriceDis] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(product, img, price, priceDis);
    setProduct("");
    setImg("");
    setPrice("");
    setPriceDis("");
  };

  return (
    <div>
      <form onSubmit={(event) => handleSubmit(event)} className="product__form">
        <h2 className="subtitulo sombra-subtitulo-hover">
          Cadastro de Produtos
        </h2>
        <Input
          title="Nome"
          type="text"
          name="name"
          value={product}
          setState={setProduct}
          className="input__geral"
        />
        <Input
          title="Link da Imagem"
          type="text"
          name="img"
          value={img}
          setState={setImg}
          className="input__geral"
        />
        <Input
          title="Preço"
          type="number"
          name="price"
          value={price}
          setState={setPrice}
          className="input__price"
        />
        <Input
          title="Preço com Desconto(opcional)"
          type="number"
          name="price-discount"
          value={priceDis}
          setState={setPriceDis}
          className="input__price"
        />

        <input
          type="submit"
          value="Criar Produto"
          className="btn__geral texto"
        />
      </form>
    </div>
  );
};

export default Form;
