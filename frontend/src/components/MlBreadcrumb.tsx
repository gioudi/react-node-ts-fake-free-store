import React from "react";

type Category = {
  error: string | "";
  loading: boolean;
  categories: { id: string; name: string }[];
};

const MlBreadcrumb = ({ payload }: { payload: Category }): JSX.Element => {
  const { loading, error, categories } = payload;

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb ml-breadcrumb my-3">
        {loading ? (
          <li className="breadcrumb-item ml-breadcrumb__item ">Loading...</li>
        ) : error ? (
          <li className="breadcrumb-item ml-breadcrumb__item">
            Error: {error}
          </li>
        ) : (
          categories?.map((category, index) => (
            <li
              className="breadcrumb-item ml-breadcrumb__item"
              key={category.id}
            >
              <span>
                {category.name}
                {index !== categories.length - 1 && " "}
              </span>
            </li>
          ))
        )}
      </ol>
    </nav>
  );
};

export default MlBreadcrumb;
