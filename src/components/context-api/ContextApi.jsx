import { useState } from "react";
import College from "./College";
import { SubjectContext } from "./ContextData";

function ContextApi() {
  const [subject, setsubject] = useState();
  return (
    <div style={{ backgroundColor: "yellow", padding: 10 }}>
      <SubjectContext.Provider value={subject}>
        <select
          value={subject}
          onChange={(evt) => setsubject(evt.target.value)}
        >
          <option value="">Select a subject</option>
          <option value="English">English</option>
          <option value="Urdu">Urdu</option>
          <option value="Math">Math</option>
        </select>
        <button onClick={() => setsubject("")}>clear</button>
        <h1>Context Api</h1>
        <College />
      </SubjectContext.Provider>
    </div>
  );
}

export default ContextApi;
