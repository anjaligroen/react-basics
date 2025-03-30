import "./App.css";
import { DrinkButtons } from "./components/DrinkButtons";
import { DrinkChoice } from "./components/DrinkChoice";
import { coffee, tea } from "./utils/data";
import { useState } from "react";

export const App = () => {
  const greeting = "Welcome to our cafe!";

  const userDrink = null;

  return (
    <div className="app">
      <h1>{greeting}</h1>
      <DrinkButtons drinkOne={tea.name} drinkTwo={coffee.name} />
    </div>
  );
};
