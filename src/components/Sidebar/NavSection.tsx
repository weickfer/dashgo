import { Box, Stack, Text } from "@chakra-ui/react";

type NavSectionProps = {
  children: React.ReactNode;
  title: string;
}

export function NavSection({ title, children }: NavSectionProps) {
  return (
    <Box>
      <Text
        fontWeight="bold"
        color="gray.400"
        fontSize="small"
        casing="uppercase"
      >
        {title}
      </Text>
      <Stack spacing="4" marginTop="8" alignContent="stretch">
        {children}
      </Stack>
    </Box>
  )
}