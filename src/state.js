import React from "react";

const St = ({ state }) => {
  return (
    <tr>
      <td>{state.name}</td>
      <td>{state.population}</td>
    </tr>
  );
};

export default React.memo(St);
