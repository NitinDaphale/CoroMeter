import React, { useState } from "react";
import Country from "./country";
import AddCountry from "./addCountry";
import Container from "@material-ui/core/Container";
import { connect } from "react-redux";

const HomeToConnect = ({ countries }) => {
  const [addCountryFlag, setAddCountryFlag] = useState(false);

  const onClickAddCountry = () => {
    setAddCountryFlag(true);
  };

  const onCancelAddCountry = () => {
    setAddCountryFlag(false);
  };

  const addCountry = () => {
    const newList = [...countries];
    newList.push({
      name: "Bhutan",
      population: 100,
      states: [
        { name: "Taka", population: 100 },
        { name: "Branmha", population: 200 },
        { name: "Debe", population: 300 }
      ],
      people: ["Koirala", "prachand", "abe"]
    });

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
              name={c.name}
              population={c.population}
              states={c.states}
            />
          ))}
      </table>
    </div>
  );
};

const mapStateToProps = state => {
  console.log({ state });
  return { countries: state.countries };
};

export default connect(mapStateToProps)(HomeToConnect);
