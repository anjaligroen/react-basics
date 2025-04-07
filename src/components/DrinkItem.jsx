import { Image, Text, Flex } from "@chakra-ui/react";

export const DrinkItem = ({ drink, clickFn }) => {
  return (
    <>
      <Flex
        onClick={() => clickFn(drink)}
        p={4}
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        borderWidth={1}
        borderRadius="md"
        boxShadow="md"
        _hover={{ boxShadow: "lg", transform: "scale(1.05)" }}
        transition="0.2s"
        backgroundColor="white"
        borderColor="gray.200"
        width="150px"
        height="200px"
        margin="10px"
        cursor="pointer"
      >
        <Image src={drink.imgUrl} alt={drink.alt} w={100} />
        <Text>{drink.name}</Text>
      </Flex>
    </>
  );
};
