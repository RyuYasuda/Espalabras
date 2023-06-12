import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input
} from "@chakra-ui/react";
import React from "react";

type Validity = {
  word: boolean;
  meaning: boolean;
};

type InputFormControlProps = {
  errorMessage?: { word: string; meaning: string };
  isValid?: Validity;
  element: string;
  formState: { [key: string]: any };
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const InputFormControl: React.FC<InputFormControlProps> = (props) => {
  const { element, formState, handleChange, isValid, errorMessage } = props;
  return (
    <FormControl isInvalid={isValid ?? false} id={element} my={4}>
      <FormLabel>
        {element.charAt(0).toUpperCase() + element.slice(1)}
      </FormLabel>
      <Input
        name={element}
        value={formState[element]}
        onChange={handleChange}
      />
      <FormErrorMessage>{errorMessage?.[element]}</FormErrorMessage>
    </FormControl>
  );
};
