import "./Styles.css";

import { items } from "../../Data/db";

const List = () => {
  return (
    <div className="list__container">
      {items.map((element) => {
        return (
          <div className="card__container-dis card__hover">
            <h3 className="texto sombra-subtitulo-hover">{element.product}</h3>
            <img
              src={element.img}
              alt="Imagem do produto"
              className="img__card"
            />
            {element.priceDis !== 0 ? (
              <div>
                <p className="texto">
                  De: <span className="text-discount">{element.price}</span>
                </p>
                <p className="texto">Por: {element.priceDis}</p>
              </div>
            ) : (
              <p className="texto">Por: {element.price}</p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default List;
