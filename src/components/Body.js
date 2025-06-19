import RestoContainer from "./RestoContainer";
import { useEffect, useState } from "react";

const Body = () => {
  const restaurents = [
    {
      name: "Meghana Foods",
      cuisine: ["Chineese", "Indian"],
      costEstimateForTwo: 400,
      rating: "4.5",
    },
    {
      name: "KFC",
      cuisine: ["Fastfood"],
      costEstimateForTwo: 1000,
      rating: "3.9",
    },
  ];

  const [restaurentsWithState, SetRestaurentsWithState] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.3697893&lng=78.3991533&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    const swiggyRestaurents =
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
    console.log(swiggyRestaurents);
    SetRestaurentsWithState(swiggyRestaurents);
  };

  console.log(restaurentsWithState);

  return restaurentsWithState.length == 0 ? (
    <h1> Loading 2... </h1>
  ) : (
    <div>
      <button
        onClick={() => {
          console.log("Restaurent with state " + restaurentsWithState);
          const filteredList = restaurentsWithState.filter(
            (r) => r?.info?.avgRating > 4
          );
          console.log("Filtered list is" + filteredList);
          SetRestaurentsWithState(filteredList);
        }}
      >
        Click me
      </button>
      {restaurentsWithState.map((resturent) => (
        <RestoContainer key={resturent.id} restObj={resturent} />
      ))}
    </div>
  );
};

export default Body;
