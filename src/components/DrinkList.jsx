// here we create the list component that will render a list of <DrinkItem/> components.
// create a DrinkList component that has drinks variable as prop.
// this will be an array of drink objects.

import { DrinkItem } from "./DrinkItem";
import { Grid, GridItem } from "@chakra-ui/react";

export const DrinkList = ({ drinks, clickFn }) => {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={4} justifyContent="center">
      {drinks.map((drink) => (
        <GridItem key={drink.id}>
          <DrinkItem key={drink.id} drink={drink} clickFn={clickFn} />
        </GridItem>
      ))}
    </Grid>
  );
};
// this component will map over the drinks array and for each drink it will render a <DrinkItem/> component.
// the key prop is used to give each component a unique identifier.
// this is important for react to keep track of the components and optimize rendering.
