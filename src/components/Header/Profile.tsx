import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

type ProfileProps = {
  showProfileInfo?: boolean;
}

export function Profile({ showProfileInfo = true }: ProfileProps) {
  return (
    <Flex alignItems="center">
      {
        showProfileInfo && (
          <Box
            marginRight="4"
            textAlign="right"
          >
            <Text>Weickmam Ferreira</Text>
            <Text
              color="gray.300"
              fontSize="small"
            >weickmam@mail.io</Text>
          </Box>
        )
      }

      <Avatar size="md" name="Weickmam Ferreira" src="https://github.com/weickfer.png" />
    </Flex>
  )
}