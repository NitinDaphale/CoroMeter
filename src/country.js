import React from "react";
import StateList from "./stateList";

export default React.memo(({ name, population, states }) => {
  console.log("in country");

  return (
    <div>
      <tr>
        <td>{name}</td>
        <td>{population}</td>
      </tr>
      <tr>
        <td>
          <StateList states={states} />
        </td>
      </tr>
    </div>
  );
});
