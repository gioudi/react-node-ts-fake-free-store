import React from "react";
import { useSelector } from "react-redux";
import MlCard from "../../components/MlCard";
import { Item } from "../../types/apiTypes";
import MlBreadcrumb from "../../components/MlBreadcrumb";

const Home = (): JSX.Element => {
  const { items } = useSelector((state: any) => state.sites.data);
  const categories = useSelector((state: any) => state.sites.data.categories);
  const loading = useSelector((state: any) => state.sites.loading);
  const error = useSelector((state: any) => state.sites.error);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <>
        <MlBreadcrumb payload={{ loading, error, categories: categories?.path_from_root }} />
        <section className={`ml-bg-white panel  rounded-1 ${items && 'p-3'}`}>
          <article className="row">
            {items && items.slice(0, 4).map((item: Item, index: number) => (
              <article className="col-12" key={item.id}>
                <MlCard payload={item} />
                {index < 3 && <hr className="ml-border-color"/>}
              </article>
            ))}
          </article>
        </section>
        </>
      )}
    </>
  );
};

export default Home;
