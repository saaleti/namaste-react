const RestoContainer = (props) => {
  const { name, cuisines, costForTwo, avgRating } = props?.restObj?.info;

  return (
    <div className="restoContainer">
      <span>{name}</span>
      <h4>{cuisines}</h4>
      <h4>{costForTwo}</h4>
      <h4>Rating {avgRating}</h4>
    </div>
  );
};

export default RestoContainer;
