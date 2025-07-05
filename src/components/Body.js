import RestoContainer from "./RestoContainer";
import { Link } from "react-router-dom";
import useRestaurentData from "../utils/useRestaurentaData";

const Body = () => {
  const restaurentsWithState = useRestaurentData();

  return restaurentsWithState.length == 0 ? (
    <h1> Loading 2... </h1>
  ) : (
    <div>
      <input
        type="text"
        className="searchInput"
        value={""}
        onChange={(e) => {
          setSearchInput(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          console.log("Restaurent with state " + restaurentsWithState);
        }}
      >
        Search
      </button>
      {restaurentsWithState.map((resturent) => (
        <Link key={resturent.id} to={"/restaurent/" + resturent.info?.name}>
          <RestoContainer restObj={resturent} />
        </Link>
      ))}
    </div>
  );
};

export default Body;
