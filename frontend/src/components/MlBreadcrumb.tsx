import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumb = (): JSX.Element => {
  const location = useLocation();
  const path = location.pathname.split('/').filter(Boolean);

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        {path.map((segment, index) => (
          <li key={index} className="breadcrumb-item">
            <Link to={`/${path.slice(0, index + 1).join('/')}`}>{segment}</Link>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
