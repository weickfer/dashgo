import {
  FormControl,
  FormLabel,
  Input as ChakraInput, 
  InputProps as ChakraInputProps 
} from "@chakra-ui/react";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
}

export function Input({ label, name, ...inputProps }: InputProps) {
  return (
    <FormControl>
      
      { !!label && (<FormLabel htmlFor={name}>{label}</FormLabel>) }

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
        size="lg"
        {...inputProps}
      />
    </FormControl>
  )
}