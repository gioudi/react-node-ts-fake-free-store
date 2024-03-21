import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchItem, fetchItemDescription } from "../../redux/itemSlice";
import { fetchCategories } from "../../redux/categorySlice";
import MlBreadcrumb from "../../components/MlBreadcrumb";

const Item = (): JSX.Element => {
  const { id } = useParams<{ id: string }>();
  const item = useSelector((state: any) => state.item.data);
  const loading = useSelector((state: any) => state.category.loading);
  const error = useSelector((state: any) => state.category.error);
  const categories = useSelector((state: any) => state.category.data);
  const itemDescription = useSelector((state: any) => state.item.itemDescription);
  const dispatch = useDispatch<any>();

  useEffect(() => {
    const fetchData = async () => {
      if(id){
        await dispatch(fetchItem(id));
        await dispatch(fetchItemDescription(id));
      }
      if (item.category_id) {
        await dispatch(fetchCategories(item.category_id));
      }
      console.log(itemDescription)
    };

    fetchData();
  }, [dispatch, id, item.category_id]);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <>
          <MlBreadcrumb payload={{ loading, error, categories: categories.pathFromRoot }} />
          <section className="ml-bg-white panel p-3 rounded-1">
            <article className="row">
              <article className="col-12 col-lg-8">
                {item.picture && (
                  <img src={require(item.picture)} className="ms-2 " alt={item.title} />
              )}
              </article>
              <article className="col-12 col-lg-4"></article>
            </article>
          </section>
        </>
      )}
    </>
  );
};

export default Item;
