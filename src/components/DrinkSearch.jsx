import { TextInput } from "./ui/TextInput";
import { useState } from "react";
import { availableDrinks } from "../utils/data";
import { DrinkList } from "./DrinkList.JSX";

export const DrinkSearch = ({ clickFn }) => {
  const [searchField, setSearchField] = useState("");

  const matchedDrinks = availableDrinks.filter((drink) => {
    return drink.name.toLowerCase().includes(searchField.toLowerCase());
  });

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };

  return (
    <>
      <label>Search for drinks:</label>
      <TextInput value={searchField} changeFn={handleChange} />
      <p>{searchField}</p>
      <DrinkList clickFn={clickFn} drinks={matchedDrinks} />
    </>
  );
};
