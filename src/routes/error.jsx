import { Link } from "react-router-dom";
import "../styles/routes/error.scss";

export default function Error() {
  return (
    <div className="Error">
      <h1>404</h1>

      <h3>Looks like the page you're looking for doesn't exist.</h3>

      <Link to="/" className="error_404">
        Back Home
      </Link>
    </div>
  );
}
