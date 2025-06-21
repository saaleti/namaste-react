import RestoContainer from "./RestoContainer";
import { useEffect, useState } from "react";
import { SWIGGY_API } from "../utils/constants";

const Body = () => {
  const [restaurentsWithState, SetRestaurentsWithState] = useState([]);
  const [filteredRestaurentState, SetFilteredRestaurentState] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(SWIGGY_API);
      const json = await data.json();
      console.log(json);
      const swiggyRestaurents =
        json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
      console.log(swiggyRestaurents);
      SetRestaurentsWithState(swiggyRestaurents);
      SetFilteredRestaurentState(swiggyRestaurents);
    } catch (e) {
      console.log(e.message);
    }
  };

  console.log(restaurentsWithState);

  return restaurentsWithState.length == 0 ? (
    <h1> Loading 2... </h1>
  ) : (
    <div>
      <input
        type="text"
        className="searchInput"
        value={searchInput}
        onChange={(e) => {
          setSearchInput(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          console.log("Restaurent with state " + restaurentsWithState);
          console.log("Search Input Passed" + searchInput);
          const filteredList = restaurentsWithState.filter(
            (r) => r?.info?.name == searchInput
          );
          console.log("Filtered list is");
          console.log(filteredList);
          SetFilteredRestaurentState(filteredList);
        }}
      >
        Search
      </button>
      {filteredRestaurentState.map((resturent) => (
        <RestoContainer key={resturent.id} restObj={resturent} />
      ))}
    </div>
  );
};

export default Body;
