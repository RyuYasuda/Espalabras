import { useState } from "react";
import { Word, GenderType, WordType } from "../../../Type/Word";

type InitialState = {
  word: string;
  meaning: string;
  gender: GenderType;
  wordType: WordType;
  example: string;
  synonym: string;
  antonym: string;
  notes: string;
};

export const useForm = (initialState: InitialState) => {
  const [formState, setFormState] = useState<InitialState>(initialState);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value
    });
  };

  const resetForm = () => {
    setFormState(initialState);
  };

  return {
    formState,
    handleChange,
    resetForm
  };
};
