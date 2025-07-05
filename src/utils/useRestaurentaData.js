import { SWIGGY_API } from "../utils/constants";
import { useEffect, useState } from "react";

const useRestaurentData = () => {
  const [restaurentsWithState, SetRestaurentsWithState] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(SWIGGY_API);
      const json = await data.json();
      const swiggyRestaurents =
        json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
      SetRestaurentsWithState(swiggyRestaurents);
      return swiggyRestaurents;
    } catch (e) {
      console.log(e.message);
    }
  };

  return restaurentsWithState;
};

export default useRestaurentData;
