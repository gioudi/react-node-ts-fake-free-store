import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSites } from "../redux/siteSlice";

const Navbar = () => {
  const dispatch = useDispatch<any>();
  const [searchQuery, setSearchQuery] = useState("");
  const { loading } = useSelector((state:any) => state.sites);

  const handleSearch = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    dispatch(fetchSites(searchQuery));
  };

  return (
    <nav className="navbar navbar-expand-lg ml-bg-primary ml-navbar">
      <div className="container">
        <div className="d-flex flex-grow-1 justify-content-center align-items-center">
          <img src={require('../assets/logo.png')} className="ml-navbar__logo" alt="Logo" />
          <form className="form" onSubmit={handleSearch}>
            <div className="form-group ml-navbar__search">
              <button
                className="btn  ml-navbar__search__button"
                disabled={loading}
                type="submit"
              >
                <img src={require('../assets/ic_Search.png')} alt="icon_search" className=""/>
              </button>
              <input
                className="form-control  ml-navbar__search__input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                type="search"
                placeholder="Nunca dejes de buscar"
                aria-label="Search"
              />
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
