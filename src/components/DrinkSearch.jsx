import { TextInput } from "./ui/TextInput";
import { useState } from "react";
import { availableDrinks } from "../utils/data";
import { DrinkList } from "./DrinkList.JSX";

export const DrinkSearch = ({ clickFn }) => {
  const [searchField, setSearchField] = useState("Test Drink");
  return (
    <>
      <label>Search for drinks:</label>
      <TextInput />
      <p>{searchField}</p>
      <DrinkList clickFn={clickFn} drinks={availableDrinks} />
    </>
  );
};
