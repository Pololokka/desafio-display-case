const Product = ({ name, img, price, priceDis }) => {
  return (
    <>
      {priceDis !== 0 ? (
        <div className="card__container-dis card__hover">
          <h3 className="texto sombra-subtitulo-hover">{name}</h3>
          <img src={img} alt="Imagem do produto" className="img__card" />
          <div>
            <p className="texto">
              De: <span className="text-discount">{price}</span>
            </p>
            <p className="texto">Por: {priceDis}</p>
          </div>
          <input type="button" value="Gimme!" className="texto btn__geral" />
        </div>
      ) : (
        <div className="card__container card__hover">
          <h3 className="texto sombra-subtitulo-hover">{name}</h3>
          <img src={img} alt="Imagem do produto" className="img__card" />
          <p className="texto">Por: {price}</p>
          <input type="button" value="Gimme!" className="texto btn__geral" />
        </div>
      )}
    </>
  );
};

export default Product;
