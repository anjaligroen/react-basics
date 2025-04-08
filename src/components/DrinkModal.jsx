import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
} from "@chakra-ui/react";

import { DrinkItem } from "./DrinkItem";

export function DrinkModal({ isOpen, onClose, onConfirm, drink }) {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size={["full", "md"]}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirm Choice</ModalHeader>
          <ModalCloseButton />
          <ModalBody
            display="flex"
            flexDirection="column"
            height={["100vh", "fit-content"]}
            alignItems={{ base: "center", md: "left" }}
            justifyContent="center"
          >
            <DrinkItem drink={drink} />
            <Text>Please confirm your selection.</Text>
          </ModalBody>

          <ModalFooter
            display="flex"
            justifyContent="space-around"
            alignItems="center"
            flexDirection="row"
          >
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button onClick={onConfirm} variant="ghost">
              Confirm
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
