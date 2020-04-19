export const addCountry = () => {
  return { type: "COUNTRY_ADD" };
};

export const removeCountry = index => {
  console.log("in remove Country action", index);
  return { type: "COUNTRY_REMOVE", index };
};
