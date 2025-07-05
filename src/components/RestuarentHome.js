import { useParams } from "react-router-dom";
export const RestuarentHome = () => {
  const { name } = useParams();

  return (
    <div>
      <h1> Resturant Name : {name}</h1>
    </div>
  );
};
