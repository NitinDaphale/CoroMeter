import React from "react";
import StateList from "./stateList";

export default React.memo(
  ({ index, name, population, states, removeCountryAction }) => {
    return (
      <tbody>
        <tr>
          <td>{name}</td>
          <td>{population}</td>
          <td>
            <button
              onClick={() => {
                removeCountryAction(index);
              }}
            >
              REMOVE
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <StateList states={states} />
          </td>
        </tr>
      </tbody>
    );
  }
);
