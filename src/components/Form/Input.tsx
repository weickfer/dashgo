import { forwardRef, ForwardRefRenderFunction } from 'react'
import { FieldError } from 'react-hook-form';
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput, 
  InputProps as ChakraInputProps 
} from "@chakra-ui/react";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error?: FieldError;
}
const InputRaw: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { label, name, error = null, ...inputProps }: InputProps, 
  reference
) => {
  const hasError = !!error;

  return (
    <FormControl isInvalid={hasError}>

      {!!label && (<FormLabel htmlFor={name}>{label}</FormLabel>)}

      <ChakraInput
        id={name}
        name={name}
        backgroundColor="gray.900"
        focusBorderColor="pink-500"
        variant="filled"
        _hover={{
          backgroundColor: 'gray.900'
        }}
        _focus={{
          backgroundColor: 'gray.900'
        }}
        ref={reference}
        size="lg"
        {...inputProps} 
      />

      { hasError && (
        <FormErrorMessage>{error.message}</FormErrorMessage>
      ) }
    </FormControl>
  );
}

export const Input = forwardRef(InputRaw);
