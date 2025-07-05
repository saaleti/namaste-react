import { useRouteError } from "react-router-dom";
export const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h1> This is Error Page</h1>
      <h2> Status Code : {err.status}</h2>
      <h3> Status Message: {err.statusText}</h3>
    </div>
  );
};
