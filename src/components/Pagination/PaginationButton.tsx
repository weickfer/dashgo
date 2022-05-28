import { Button } from "@chakra-ui/react";

type PaginationButtonProps = {
  number: number;
  isCurrent?: boolean;
  onPageChange(page: number): void;
}

export function PaginationButton({ number, isCurrent, onPageChange }: PaginationButtonProps) {
  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        width="4"
        colorScheme="pink"
        disabled
        _disabled={{
          backgroundColor: 'pink.500',
          cursor: 'default',
        }}
      >{number}</Button>
    )
  }

  return (
    <Button
      size="sm"
      fontSize="xs"
      width="4"
      backgroundColor="gray.700"
      _hover={{
        backgroundColor: 'gray.500'
      }}
      onClick={() => onPageChange(number)}
    >{number}</Button>
  )
} 