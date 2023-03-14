import "./Styles.css";

import { items } from "../../Data/db";
import Input from "../Input/Index";
import List from "../List/Index";

import { useState } from "react";

const Form = () => {
  const [product, setProduct] = useState("");
  const [img, setImg] = useState("");
  const [price, setPrice] = useState(0);
  const [priceDis, setPriceDis] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newProduct = {
      id: Math.random(),
      product,
      img,
      price,
      priceDis,
    };

    items.push(newProduct);

    console.log(items);

    setProduct("");
    setImg("");
    setPrice(0);
    setPriceDis(0);
  };

  return (
    <div>
      <form onSubmit={(event) => handleSubmit(event)} className="product__form">
        <h2 className="subtitulo sombra-subtitulo-hover">
          Cadastro de Produtos
        </h2>
        <div>
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
        </div>
        <div>
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
        </div>

        <input
          type="submit"
          value="Criar Produto"
          className="btn__geral texto"
        />
      </form>

      <h2 className="subtitulo sombra-subtitulo-hover">
        Confira Nossos Produtos!
      </h2>

      <List />
    </div>
  );
};

export default Form;
