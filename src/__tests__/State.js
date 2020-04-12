import React from "react";
import { create } from "react-test-renderer";
import State from "../state";
import Country from "../country";

const stateInfo = {
  name: "Maharashtra",
  population: 1000
};

const countryInfo = {
  name: "Bharat",
  population: 1000,
  states: [
    { name: "Maharashtra", population: 100 },
    { name: "Karnatak", population: 200 },
    { name: "Bihar", population: 300 }
  ],
  people: ["nitin", "punam", "kartik"]
};

// describe("App Component", () => {

// });

test("Matches the State", () => {
  const stateSnap = create(<State key={0} state={stateInfo} />);
  expect(stateSnap.toJSON()).toMatchSnapshot();
});

test("Matches the Country", () => {
  const countrySnap = create(
    <Country
      key={0}
      name={countryInfo.name}
      population={countryInfo.population}
      states={countryInfo.states}
    />
  );
  expect(countrySnap.toJSON()).toMatchSnapshot();
});
