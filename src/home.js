import React, { useState } from "react";
import Country from "./country";
import AddCountryFlag from "./addCountry";
import Container from "@material-ui/core/Container";

export default () => {
  const list = [
    {
      name: "Bharat",
      population: 1000,
      states: [
        { name: "Maharashtra", population: 100 },
        { name: "Karnatak", population: 200 },
        { name: "Bihar", population: 300 }
      ],
      people: ["nitin", "punam", "kartik"]
    },
    {
      name: "SriLanka",
      population: 200,
      states: [
        { name: "Mugabe", population: 100 },
        { name: "DEvvar", population: 200 },
        { name: "Dikke", population: 300 }
      ],
      people: ["Jaywardene", "Atapatu", "Rantunga"]
    },
    {
      name: "Nepal",
      population: 100,
      states: [
        { name: "Taka", population: 100 },
        { name: "Branmha", population: 200 },
        { name: "Debe", population: 300 }
      ],
      people: ["Koirala", "prachand", "abe"]
    }
  ];

  const [countries, setCountries] = useState(list);
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

    setCountries(newList);
    setAddCountryFlag(false);
  };

  const addState = () => {
    const newCountries = [...countries];
    const nepal = countries[2];
    nepal.states.push({ name: "DABA", population: 4500 });
    setCountries(newCountries);
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
          <AddCountryFlag onSubmit={addCountry} onCancel={onCancelAddCountry} />
        </Container>
      )}

      <table>
        <thead>
          <tr>
            <th>Country</th>
            <th>Population</th>
          </tr>
        </thead>
        {countries.map((c, i) => (
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
