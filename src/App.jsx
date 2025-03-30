import "./App.css";
import { DrinkButtons } from "./components/DrinkButtons";
import { DrinkChoice } from "./components/DrinkChoice";
import { coffee, tea } from "./utils/data";
import { useState } from "react";
import { DrinkSearch } from "./components/DrinkSearch";

export const App = () => {
  const greeting = "Welcome to our cafe!";
  const [userDrink, setUserDrink] = useState(tea);

  return (
    <div className="app">
      <h1>{greeting}</h1>
      {userDrink ? (
        <DrinkChoice drink={userDrink} />
      ) : (
        <DrinkButtons drinkOne={tea.name} drinkTwo={coffee.name} />
      )}
      ;
      <DrinkSearch />
    </div>
  );
};
