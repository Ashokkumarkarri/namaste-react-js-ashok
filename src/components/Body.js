import RestaurentCard from "./RestaurentCard";
import { useState, useEffect } from "react";
import Shimmer from "./Simmer";

// import resList from "../utils/mockData";

const Body = () => {
  //whenever state varible updates, react trigger a reconcocilation cycle(re-render the component)
  const [listOFRestaurents, setListOFRestaurents] = useState([]);
  const [filteredRestaurent, setFilteredRestaurent] = useState([]);

  const [searchText, setSearchText] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // const url =
      //   "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=12.9121181&lng=77.6445548&carousel=true&third_party_vendor=1";

      // Swiggy API blocks direct calls from frontend due to CORS.
      // Works sometimes with DevTools open, but fails otherwise.
      // Solution: use mock API or Dummy APi.
      const url2 = "https://swiggy-api-4c740.web.app/swiggy-api.json";
      const data = await fetch(`https://corsproxy.io/${url2}`);

      const json = await data.json();
      //optional chaining
      const apiData =
        json.data.cards[4]?.card.card.gridElements?.infoWithStyle?.restaurants;
      // console.log(apiData);
      setListOFRestaurents(apiData);
      setFilteredRestaurent(apiData);
    } catch (error) {
      console.log(error);
    }
  };

  return listOFRestaurents.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              //filter the rest and the update the UI
              //srarch Text
              console.log(searchText);
              const filteredRestaurents = listOFRestaurents.filter((res) =>
                res.info.name.toLowerCase().includes(searchText)
              );

              //here is pdaing
              setFilteredRestaurent(filteredRestaurents);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredData = listOFRestaurents.filter(
              (i) => i.info.avgRating >= 4.5
            );
            setListOFRestaurents(filteredData);
          }}
        >
          Top Rated Restaurents
        </button>
      </div>

      <div className="res-container">
        {filteredRestaurent.map((i) => (
          <RestaurentCard resData={i} key={i.info.id} />
        ))}
      </div>
    </div>
  );
  listOFRestaurents;
};

export default Body;
