import { Link } from "react-router-dom";
import style from "./style.module.css";

export function HomeBtn() {
  return (
    <Link to="/">
      <button style={{ textDecoration: "none" }}>
        <h1>📌Profile List</h1>
      </button>
    </Link>
  );
}
