import { useState } from "react";
import AddUser from "./AddUser";
import DisplayUser from "./DisplayUser";

function LiftUpState() {
  const [user, setUser] = useState();
  return (
    <div>
      <h1>LiftUp state in React</h1>
      <AddUser setUser={setUser} />
      <DisplayUser user={user} />
      <button>
        <i className="uil uil-home"></i>
      </button>
    </div>
  );
}

export default LiftUpState;
