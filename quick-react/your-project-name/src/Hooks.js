import React, { useState } from "react";

function Hooks() {
  const [manager, setManager] = useState("Paulo");
  const [numberOfManagers, setNumberOfManagers] = useState(2);

  return (
    <>
      <h1>Manager Name: {manager}</h1>
      <button onClick={() => setManager("Lizanne")}>Updated Manager</button>
      <button onClick={() => setManager("Paulo")}>Show old Manager</button>
      <h1>Number of Managers: {numberOfManagers}</h1>
      <button onClick={() => setNumberOfManagers(numberOfManagers + 1)}>
        Updated Manager
      </button>
    </>
  );
}
export default Hooks;
