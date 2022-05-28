import { Stack, Button, Box, Text } from '@chakra-ui/react'
import { PaginationButton } from './PaginationButton'

type PaginationProps = {
  totalCountOfRegister: number;
  registerPerPage?: number;
  currentPage?: number;
  onChangePage: (page: number) => void;
}

const siblingCount = 1;

function generatePagesArray(from: number, to: number): number[] {
  return [...new Array(to - from)].map((_, index) => {
    return from + index + 1
  }).filter(page => page > 0)
}

export function Pagination({
  totalCountOfRegister,
  registerPerPage = 10,
  currentPage = 1,
  onChangePage,
}: PaginationProps) {
  /*
    totalCountOfRegister={30}
    currentPage={1}
    onChangePage={() => { }}
    registerPerPage={10}
  */
  const lastPage = Math.ceil(totalCountOfRegister / registerPerPage) // 30 / 10 = 3

  const previousPages = currentPage > 1 // []
    ? generatePagesArray(currentPage - 1 - siblingCount, currentPage - 1)
    : [];


  const nextPages = currentPage < lastPage  // [2]
    ? generatePagesArray(currentPage, Math.min(currentPage + siblingCount, lastPage))
    : [];

  return (
    <Stack
      direction={["column", "row"]}
      spacing="6"
      marginTop="8"
      alignItems={["flex-start", "center"]}
      justifyContent="space-between"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>{totalCountOfRegister}</strong>
      </Box>
      <Stack direction="row" spacing="2">
        {
          (currentPage > (1 + siblingCount)) && (
            <>
              <PaginationButton number={1} onPageChange={onChangePage} />
              {currentPage > (2 + siblingCount) && (
                <Text color="gray.100" width="8" textAlign="center" >...</Text>
              )}
            </>
          )
        }

        {
          previousPages.map(page => (
            <PaginationButton key={page} number={page} onPageChange={onChangePage} />
          ))
        }

        <PaginationButton isCurrent number={currentPage} onPageChange={onChangePage} />

        {
          nextPages.map(page => (
            <PaginationButton key={page} number={page} onPageChange={onChangePage} />
          ))
        }

        {
          ((currentPage + siblingCount)) < lastPage && (
            <>
              {currentPage + 1 + siblingCount < lastPage && (
                <Text color="gray.100" width="8" textAlign="center" >...</Text>
              )}
              <PaginationButton number={lastPage} onPageChange={onChangePage} />
            </>
          )
        }
      </Stack>
    </Stack>
  )
}