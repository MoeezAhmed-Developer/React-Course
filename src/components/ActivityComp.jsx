import { useState, Activity } from "react";
import ContactComp from "./ContactComp";
import HomeComp from "./HomeComp";

export default function ActivityComponent() {
  const [showHome, setShowHome] = useState(true);
  return (
    <div>
      <h1>Activity in React</h1>
      <button onClick={() => setShowHome(true)}>Home Page</button>
      <button onClick={() => setShowHome(false)}>Contact Page</button>

      <Activity mode={showHome == true ? "visible" : "hidden"}>
        <HomeComp />
      </Activity>
      <Activity mode={showHome == false ? "visible" : "hidden"}>
        <ContactComp />
      </Activity>
    </div>
  );
}
