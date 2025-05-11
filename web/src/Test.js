import { Link } from "react-router";

function Test() {
  return (
    <div className="Test">
      Routing 
      <Link to={"/"}>
          <button>Back to home </button>
      </Link>
    </div>
  );
}

export default Test;
