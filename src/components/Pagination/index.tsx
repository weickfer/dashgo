import { Stack, Button, Box } from '@chakra-ui/react'
import { PaginationButton } from './PaginationButton'

export function Pagination() {
  return (
    <Stack
      direction={["column", "row"]}
      spacing="6"
      marginTop="8"
      alignItems={["flex-start", "center"]}
      justifyContent="space-between"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction="row" spacing="2">
        <PaginationButton isCurrent number={1} />
        <PaginationButton number={2} />
        <PaginationButton number={3} />
        <PaginationButton number={4} />
      </Stack>
    </Stack>
  )
}