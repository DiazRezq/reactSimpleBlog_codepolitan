import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();

  return <div>Error Nih yee, Sorry Yee !!</div>;
}

export default ErrorPage;
