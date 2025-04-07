import { Button } from "@chakra-ui/react";

export const ButtonUI = ({ text, clickFn, ...styleProps }) => {
  return (
    <>
      <Button size="xs" className="button" onClick={clickFn} {...styleProps}>
        {text}
      </Button>
    </>
  );
};
