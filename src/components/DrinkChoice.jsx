import { ButtonUI } from "./ui/ButtonUI";
import { Text, Heading, Image, Flex } from "@chakra-ui/react";

export const DrinkChoice = ({ drink, clickFn }) => {
  return (
    <>
      <Flex
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        p="8"
      >
        <Heading mb="8" fontSize="3xl" color="teal.800">
          Drink choice: {drink.name}
        </Heading>
        <Image
          src={drink.imgUrl}
          alt={drink.alt}
          width="100px"
          height="100px"
          mb="8"
        />
        <Text mb="4"> Your drink will be ready soon!</Text>
        <ButtonUI
          text={"Change selection"}
          clickFn={clickFn}
          fontSize={"xl"}
          padding={6}
        />
      </Flex>
    </>
  );
};
