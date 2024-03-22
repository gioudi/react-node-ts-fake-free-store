import React from "react";
import { Item } from "../types/apiTypes";
import { Link } from "react-router-dom";
import { formattedMoney } from "../helper";

const MlCard = ({ payload }: { payload: Item }): JSX.Element => {
  return (
    <Link to={`/item/${payload.id}`} className="item-card row">
      <article className="col-12 d-flex justify-content-center col-lg-2">
        <img
          src={payload.picture}
          className="card-img-left  item-card__image "
          alt={payload.title}
        />
      </article>
      <article className="col-12 col-lg-7">
        <div className="card-body item-card__body">
          <h5 className="card-text item-card__body__price d-inline-flex align-items-center ml-fw-400 py-lg-3  ml-h5">
            {formattedMoney(payload.price.amount)}
            {payload.free_shipping && (
                <img src={require('../assets/ic_shipping.png')} className="ms-2 item-card__body__badge" alt="shipping" />
            )}
          </h5>
          <h6 className="card-title item-card__title ml-h6 ml-fw-400">{payload.title}</h6>
        </div>
      </article>
      <div className="col col-lg-3 py-lg-3">
        <small className="ml-small ml-fw-400 ml-color-medium">{payload.condition}</small>
      </div>
    </Link>
  );
};

export default MlCard;
