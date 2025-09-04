import RestaurentCard from "./RestaurentCard";
import { useState } from "react";

import resList from "../utils/mockData";

const Body = () => {
  const [listOFRestaurents, setListOFRestaurents] = useState(resList);

  return (
    <div className="body">
      <div className="search">Searchbar</div>
      <div className="filter">
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
        {listOFRestaurents.map((i) => (
          <RestaurentCard resData={i} key={i.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
