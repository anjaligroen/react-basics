import { Button } from "./ui/Button";

export const DrinkChoice = ({ drink, clickFn }) => {
  return (
    <>
      <h1>Drink choice: {drink.name}</h1>
      <img src={drink.imgUrl} alt={drink.alt} width="100px" height="100px" />
      <p>Your drink will be ready soon!</p>
      <Button text={"Change selection"} clickFn={() => clickFn(null)} />
    </>
  );
};
