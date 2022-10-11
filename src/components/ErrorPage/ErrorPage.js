import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="pt-16">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred. Please go back</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <p>Hazrat Ali</p>
    </div>
  );
}