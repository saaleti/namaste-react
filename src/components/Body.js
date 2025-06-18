import RestoContainer from "./RestoContainer";

const restaurents = [{name:"Meghana Foods", cuisine:["Chineese", "Indian"], costEstimateForTwo:400 },{name:"KFC", cuisine:["Fastfood"], costEstimateForTwo:1000 }]

const Body = () => {

  return ( <div>
         {restaurents.map(resturent => <RestoContainer key= {resturent.name} restObj={resturent}/>)}
      </div>)

};

export default Body;