import "./App.css";
import { DrinkChoice } from "./components/DrinkChoice";
import { useState } from "react";
import { DrinkSearch } from "./components/DrinkSearch";
import { Heading, useDisclosure } from "@chakra-ui/react";
import { DrinkModal } from "./components/DrinkModal";

export const App = () => {
  const greeting = "Welcome to our cafe!";
  const [userDrink, setUserDrink] = useState();
  const [selectDrink, setSelectDrink] = useState(false);

  const handleChangeSelection = () => {
    setUserDrink(null);
    setSelectDrink(false);
  };

  //DrinkModal is a modal that is used to confirm the drink choice
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleDrinkSelect = (drink) => {
    setUserDrink(drink);
    onOpen(); // open modal when drink is selected
  };

  const handleConfirm = () => {
    setSelectDrink(true);
    onClose(); // close modal
  };

  const handleCancel = () => {
    setUserDrink(null);
    setSelectDrink(false);
    onClose(); // close modal just in case
  };

  return (
    <div className="app">
      {!userDrink && !selectDrink && (
        <>
          <Heading as="h1" size="2xl" mb={8} color="teal.800">
            {greeting}
          </Heading>
          <DrinkSearch clickFn={handleDrinkSelect} />
        </>
      )}

      <DrinkModal
        isOpen={isOpen}
        onClose={handleCancel}
        onConfirm={handleConfirm}
        drink={userDrink}
      />

      {userDrink && selectDrink && (
        <DrinkChoice drink={userDrink} clickFn={handleChangeSelection} />
      )}
    </div>
  );
}; //this is the bracket of the export App function
