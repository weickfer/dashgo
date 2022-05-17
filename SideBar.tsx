import { Box, Stack, Text, Link, Icon } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";

export function SideBar() {
  return (
    <Box as="aside" width="64" marginRight="8">
      <Stack spacing="12" alignContent="flex-start" >
        <Box>
          <Text
            fontWeight="bold"
            color="gray.400"
            fontSize="small"
            casing="uppercase"
          >
            Geral  
          </Text>
          <Stack spacing="4" marginTop="8" alignContent="stretch">
            <Link display="flex" alignContent="center" color="pink.400" paddingY="1" >
              <Icon as={RiDashboardLine} fontSize="20" />
              <Text marginLeft="4">Dashboard</Text>
            </Link>
            <Link display="flex" alignContent="center" paddingY="1" >
              <Icon as={RiContactsLine} fontSize="20" />
              <Text marginLeft="4">Usuários</Text>
            </Link>
          </Stack>
        </Box>
        <Box>
          <Text
            fontWeight="bold"
            color="gray.400"
            fontSize="small"
            casing="uppercase"
          >
            Automação
          </Text>
          <Stack spacing="4" marginTop="8" alignContent="stretch">
            <Link display="flex" alignContent="center" paddingY="1" >
              <Icon as={RiInputMethodLine} fontSize="20" />
              <Text marginLeft="4">Formulários</Text>
            </Link>
            <Link display="flex" alignContent="center" paddingY="1" >
              <Icon as={RiGitMergeLine} fontSize="20" />
              <Text marginLeft="4">Automação</Text>
            </Link>
          </Stack>
        </Box>
      </Stack>
    </Box>
  )
}