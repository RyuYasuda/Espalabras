import {
  Box,
  Text,
  Flex,
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton
} from "@chakra-ui/react";
import React from "react";

import { Word } from "../../Type/Word";

type WordCardProps = {
  numberId: number;
  wordData: Word;
  handleDelete: (id: number) => void;
};

export const WordCard: React.FC<WordCardProps> = (props) => {
  const { wordData, handleDelete, numberId } = props;
  const {
    id,
    word,
    meaning,
    gender,
    wordType,
    example,
    synonym,
    antonym,
    notes
  } = wordData;

  const { isOpen, onOpen, onClose } = useDisclosure();

  const confirmDelete = () => {
    handleDelete(id);
    onClose();
  };

  return (
    <Box border="1px" borderColor="gray.200" borderRadius="md" p={4} m="4">
      <Text>{numberId}</Text>
      <Flex justifyContent="flex-start" alignItems="center" mb={4}>
        <Text fontSize="2xl" fontWeight="bold" mr="4">
          {word}
        </Text>
        {wordType === "n" && (
          <Text
            fontSize="2xl"
            fontWeight="bold"
            mr="4"
            color={gender === "masculine" ? "blue.400" : "red.400"}
          >
            {gender === "masculine" ? "m" : "f"}
          </Text>
        )}
        <Text fontSize="2xl" fontWeight="bold">
          {wordType}
        </Text>
      </Flex>
      <Text>意味: {meaning}</Text>
      <Text>例文: {example}</Text>
      <Text>同義語: {synonym}</Text>
      <Text>対義語: {antonym}</Text>
      <Text>備考: {notes}</Text>

      <Button colorScheme="red" variant="outline" onClick={onOpen} mt={2}>
        Delete
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>単語を削除</ModalHeader>
          <ModalCloseButton />
          <ModalBody>こちらの単語を単語帳から削除しますか？</ModalBody>
          <ModalFooter>
            <Button
              colorScheme="red"
              variant="outline"
              mr={3}
              onClick={confirmDelete}
            >
              Yes
            </Button>
            <Button variant="ghost" onClick={onClose}>
              No
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default WordCard;
