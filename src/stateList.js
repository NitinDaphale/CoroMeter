import React from "react";
import State from "./state";

export default React.memo(({ states }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>State</th>
          <th>Population</th>
        </tr>
      </thead>
      <tbody>
        {states.map((s, i) => (
          <State key={i} state={s} />
        ))}
      </tbody>
    </table>
  );
});
