import "./Styles.css";

import Product from "../Product/Index";

import { items } from "../../Data/db";

const List = () => {
  return (
    <div className="list__container">
      {items.map((element) => {
        return (
          <div className="products__container" key={element.id}>
            <Product
              name={element.product}
              img={element.img}
              price={element.price}
              priceDis={element.priceDis}
            />
          </div>
        );
      })}
    </div>
  );
};

export default List;
