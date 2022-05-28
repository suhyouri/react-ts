import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <h1>
        <Link to="/">TOEIC English Voca(고급)</Link>
      </h1>
      <div className="menu">
        <Link to="/create_word" className="link">
          Add Voca
        </Link>
        <a href="#x" className="link">
          Add Day
        </a>
      </div>
    </div>
  );
}
