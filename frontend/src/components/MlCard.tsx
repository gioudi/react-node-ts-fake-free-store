import React from "react";
import { Item } from "../types/apiTypes";
import { Link } from "react-router-dom";

const MlCard = ({ payload }: { payload: Item }): JSX.Element => {
  return (
    <Link to={`/item/${payload.id}`} className="item-card d-flex align-items-center flex-column flex-md-row">
      <img
        src={payload.picture}
        className="card-img-left mb-3 me-md-3 item-card__image "
        alt={payload.title}
      />
      <div className="card-body item-card__body">
        <p className="card-text item-card__price">
          {payload.price.currency} {payload.price.amount}
          {payload.free_shipping && (
            <span className="badge bg-success item-card__badge">
              Free Shipping
            </span>
          )}
        </p>

        <h5 className="card-title item-card__title">{payload.title}</h5>
      </div>
      <hr />
    </Link>
  );
};

export default MlCard;
