import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page" className="d-flex flex-column justify-content-center align-items-center text-white">
            <h1>Oops! </h1>
            <pre> Sorry, an unexpected error has occurred.</pre>

            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}