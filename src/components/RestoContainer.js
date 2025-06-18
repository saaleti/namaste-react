const RestoContainer = (props) => {

   const {name, cuisine, costEstimateForTwo} = props?.restObj;

 
   return <div className="restoContainer">
         <span>{name}</span>
         <h4>{cuisine}</h4>
         <h4>{costEstimateForTwo}</h4>
      </div>

};

export default RestoContainer;