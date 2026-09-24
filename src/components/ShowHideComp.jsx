import { useState } from "react";

function ShowHideComponent() {
  const [display, setDisplay] = useState(true);
  return (
    display && (
      <div>
        <h2>Show And Hide Component</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          sequi non soluta impedit veniam ratione asperiores id culpa enim
          saepe.
        </p>
        <a href="#">Not Click</a>
        <button onClick={() => setDisplay(false)}>Close</button>
      </div>
    )
  );
}

export default ShowHideComponent;
