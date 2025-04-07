import "./App.css";
import { DrinkChoice } from "./components/DrinkChoice";
import { useState } from "react";
import { DrinkSearch } from "./components/DrinkSearch";
import { Heading } from "@chakra-ui/react";
import { DrinkDialog } from "./components/DrinkDialog";

export const App = () => {
  const greeting = "Welcome to our cafe!";
  const [userDrink, setUserDrink] = useState();
  const [selectDrink, setSelectDrink] = useState(false);

  const handleCancelButton = () => {
    setUserDrink(null);
    setSelectDrink(false);
  };

  // if there is no drink selected, we show the search bar.
  // by clicking on the search bar, we have a user drink but only through the drinkDialog confirmation we confirm the selection.
  // if we have a drink selected, we show the drink choice.

  return (
    <div className="app">
      {!userDrink && !selectDrink && (
        <>
          <Heading as="h1" size="2xl" mb={8} color="teal.800">
            {greeting}
          </Heading>
          <DrinkSearch clickFn={setUserDrink} />
        </>
      )}
      {userDrink && !selectDrink && (
        <DrinkDialog drink={userDrink} clickFn={setSelectDrink} />
      )}
      {userDrink && selectDrink && (
        <DrinkChoice drink={userDrink} clickFn={handleCancelButton} />
      )}
    </div>
  );
}; //this is the bracket of the export App function
