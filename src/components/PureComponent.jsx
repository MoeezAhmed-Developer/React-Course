import { useState } from "react";

function PureComponent() {
  const [guest, setGuest] = useState(0);
  return (
    <div>
      <h1>Keeping Pure Component</h1>
      <h4>
        We have {guest} guest and we have cup {guest} cup of tea.
      </h4>
      <button onClick={() => setGuest(guest + 1)}>update guest {guest}</button>
    </div>
  );
}

export default PureComponent;
