import "./App.css";
import { DrinkChoice } from "./components/DrinkChoice";
import { useState } from "react";
import { DrinkSearch } from "./components/DrinkSearch";
import { availableDrinks } from "./utils/data";

export const App = () => {
  const greeting = "Welcome to our cafe!";
  const [userDrink, setUserDrink] = useState(tea);

  return (
    <div className="app">
      <h1>{greeting}</h1>
      <DrinkSearch />
    </div>
  );
};
