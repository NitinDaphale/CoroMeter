import React from "react";
import StateList from "./stateList";

export default React.memo(({ name, population, states }) => {
  return (
    <tbody>
      <tr>
        <td>{name}</td>
        <td>{population}</td>
      </tr>
      <tr>
        <td>
          <StateList states={states} />
        </td>
      </tr>
    </tbody>
  );
});
