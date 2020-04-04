import React from "react";
import State from "./state";

export default React.memo(({ states }) => {
  console.log("in stateList");

  return (
    <table>
      <thead>
        <tr>
          <th>State</th>
          <th>Population</th>
        </tr>
      </thead>
      {states.map((s, i) => (
        <State key={i} state={s} />
      ))}
    </table>
  );
});
