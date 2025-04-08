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
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirm Choice</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <DrinkItem drink={drink} />
            <Text>Please confirm your selection.</Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button onClick={onConfirm} variant="ghost">
              Confirm Choice
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
