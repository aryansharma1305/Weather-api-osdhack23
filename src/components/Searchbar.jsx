import React, { useState, useEffect } from "react";
import searchCss from "./searchbar.module.css";
import Loader from "./Preloader";
import PropTypes from "prop-types";
function Searchbar({ submitSearch, data }) {
  const [location, setloacation] = useState("");

  // const [datas, setdatas] = useState(data.pass);

  const [Preloader, setPreloader] = useState(null);

  // console.log(data);
  const onSubmit = async (e) => {
    // default reloading behavior of form stoped

    e.preventDefault();
    setPreloader(true);
    // console.log({location})
    if (!location || location === "") return alert("enter location");
    // <Loader/>
    let x = await submitSearch(location);
    // console.log(data.pass);

    setPreloader(false);
    // {
    //   !submitSearch ? setdatas(false) : setdatas(true);
    // }
    // {submitSearch && <Loader/>}
  };

  return (
    <>
    
    <div className={searchCss.main_container}>
      {/* {Preloader && <Loader/>} */}
      {!Preloader ? (
      <div className={searchCss.search_container}>
        <form onSubmit={onSubmit} className="form">
          <div className={searchCss.search}>
            <input
              type="text"
              placeholder="Enter Location"
              value={location}
              onChange={(e) => setloacation(e.target.value)}
            />
          </div>
          <div className={searchCss.btn}>
            <button type="submit" onClick={onSubmit}>
              Search
            </button>
          </div>
        </form>
      </div>):(

      <div className={searchCss.Loader}>
        {Preloader && <Loader />}
        </div>
      )}
    </div>
    </>
  );
}
Searchbar.propTypes = {
  submitSearch: PropTypes.func.isRequired,
};
export default Searchbar;
