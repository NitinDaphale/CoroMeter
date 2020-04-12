const initialCountries = [
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

function countries(state = initialCountries, action) {
  switch (action.type) {
    case "Add":
      return { ...state };
    default:
      return state;
  }
}

export { countries };
