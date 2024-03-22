import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchItem, fetchItemDescription } from "../../redux/itemSlice";
import { fetchCategories } from "../../redux/categorySlice";
import MlBreadcrumb from "../../components/MlBreadcrumb";
import { formattedMoney } from "../../helper";

const Item = (): JSX.Element => {
  const { id } = useParams<{ id: string }>();
  const item = useSelector((state: any) => state.item.data);
  const loading = useSelector((state: any) => state.item.loading);
  const error = useSelector((state: any) => state.item.error);
  const categories = useSelector((state: any) => state.category.data);
  const itemDescription = useSelector(
    (state: any) => state.item.itemDescription,
  );
  const dispatch = useDispatch<any>();

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        await dispatch(fetchItem(id));
        await dispatch(fetchItemDescription(id));
      }
      if (item.category_id) {
        await dispatch(fetchCategories(item.category_id));
      }
    };

    fetchData();
  }, [dispatch, id, item.category_id]);

  return (
    <>
      {loading ? (
        <section className="container vh-100 d-flex align-items-center justify-content-center">
          <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        </section>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <>
          {categories && (
            <>
              <MlBreadcrumb
                payload={{
                  loading,
                  error,
                  categories: categories.pathFromRoot,
                }}
              />
              <section className="ml-bg-white panel p-32 rounded-1">
                <article className="row">
                  <article className="col-12 col-lg-8">
                    {item?.item?.picture && (
                      <img
                        src={item?.item?.picture}
                        className="ms-2 ml-item__view__image mb-md-5"
                        alt={item?.item?.title}
                      />
                    )}
                  </article>
                  <article className="col-12 col-lg-4">
                    <span className="ml-small ml-color-medium mb-3">
                      {item?.item?.condition === 'new' ? 'Nuevo' : 'Usado'} - {item?.item?.sold_quantity ?? 0}{" "}
                      vendidos
                    </span>
                    <h5 className="h5 ml-fw-600 ml-color-dark ml-h4 my-3">
                      {item?.item?.title}
                    </h5>
                    {item?.item?.price && (
                      <h3 className="h3 ml-fw-400  ml-color-dark ml-h3 my-3">
                        {formattedMoney(item?.item?.price?.amount)}
                      </h3>
                    )}

                    <button className="btn btn-primary ml-bg-blue my-3 w-100">
                      Comprar
                    </button>
                  </article>
                </article>
                <article className="row">
                  <div className="col-12 col-lg-8">
                    <h4 className="ml-fw-400 mb-4 ml-color-dark">
                      Descripción del producto
                    </h4>
                    <p className="ml-fw-400 ml-normal mt-2 ml-color-medium">
                      {itemDescription.plain_text}
                    </p>
                  </div>
                </article>
              </section>
            </>
          )}
        </>
      )}
    </>
  );
};

export default Item;
