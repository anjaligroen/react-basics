import {
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  Button,
} from "@chakra-ui/react";
import { useRef } from "react";
import { DrinkItem } from "./DrinkItem";

export const DrinkDialog = ({ drink, clickFn }) => {
  const cancelRef = useRef();

  return (
    <AlertDialog
      isOpen={true}
      leastDestructiveRef={cancelRef}
      onClose={() => clickFn(false)}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Confirm Your Drink
          </AlertDialogHeader>

          <AlertDialogBody>
            <DrinkItem drink={drink} />
            <p>Please confirm your selection.</p>
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={() => clickFn(false)}>
              Cancel
            </Button>
            <Button colorScheme="teal" onClick={() => clickFn(true)} ml={3}>
              Confirm
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};
