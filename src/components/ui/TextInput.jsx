import { Input } from "@chakra-ui/react";

export const TextInput = ({ changeFn, ...styleProps }) => (
  <Input type="text" onChange={changeFn} {...styleProps}></Input>
);
