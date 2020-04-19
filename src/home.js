import React, { useState } from "react";
import Country from "./country";
import AddCountry from "./addCountry";
import Container from "@material-ui/core/Container";
import { connect } from "react-redux";
import {
  addCountry as addCountryAction,
  removeCountry as removeCountryAction
} from "./actionCreators/country";

const HomeToConnect = ({
  countries,
  addCountryAction,
  removeCountryAction
}) => {
  const [addCountryFlag, setAddCountryFlag] = useState(false);

  const onClickAddCountry = () => {
    setAddCountryFlag(true);
  };

  const onCancelAddCountry = () => {
    setAddCountryFlag(false);
  };

  const addCountry = () => {
    addCountryAction();
    setAddCountryFlag(false);
  };

  return (
    <div>
      <h1>This is my Corona World Meter </h1>
      {!addCountryFlag && (
        <Container maxWidth="sm">
          {!addCountryFlag && (
            <button text="Add Country" onClick={onClickAddCountry}>
              Add Country
            </button>
          )}
        </Container>
      )}

      {addCountryFlag && (
        <Container>
          <AddCountry onSubmit={addCountry} onCancel={onCancelAddCountry} />
        </Container>
      )}

      <table>
        <thead>
          <tr>
            <th>Country</th>
            <th>Population</th>
          </tr>
        </thead>
        {countries &&
          countries.map((c, i) => (
            <Country
              key={i}
              index={i}
              name={c.name}
              population={c.population}
              states={c.states}
              removeCountryAction={removeCountryAction}
            />
          ))}
      </table>
    </div>
  );
};

const mapStateToProps = state => {
  return { countries: state.countries };
};

const mapActionCreatorsToProps = { addCountryAction, removeCountryAction };

export default connect(
  mapStateToProps,
  mapActionCreatorsToProps
)(HomeToConnect);
