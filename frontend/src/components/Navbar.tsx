import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSites } from '../redux/siteSlice';
const Navbar = () => {
  const dispatch = useDispatch<any>();
  const [searchQuery, setSearchQuery] = useState('')
  const {loading} = useSelector((state: any)=> state.sites)
  
  const handleSearch = ()=> {
    dispatch(fetchSites(searchQuery))
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
          <img src="logo.png" alt="Logo" width="50" height="50" />
             <div className="d-flex flex-grow-1 justify-content-center">
          <form className="d-flex">
            <input className="form-control me-2" value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            type="search" placeholder="Nunca dejes de buscar" aria-label="Search" />
            <button className="btn btn-outline-success" 
            onClick={handleSearch}
            disabled={loading}
            type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
