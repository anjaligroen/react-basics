import { TextInput } from "./ui/TextInput";
import { useState } from "react";

export const DrinkSearch = () => {
  const [searchField, setSearchField] = useState("Test Drink");
  return (
    <>
      <label>Search for drinks:</label>
      <TextInput />
      <p>{searchField}</p>
    </>
  );
};
