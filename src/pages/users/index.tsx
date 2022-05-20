import NextLink from 'next/link'
import { Box, Button, IconButton, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";

import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { SideBar } from "../../components/Sidebar";

export default function UserList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box>
      <Header />

      <Flex
        width="100%"
        maxWidth={1480}
        marginX="auto"
        marginY="6"
        paddingX="6"
      >
        <SideBar />

        <Box flex="1" borderRadius={8} backgroundColor="gray.800" padding="8">
          <Flex marginBottom="8" alignItems="center" justifyContent="space-between" >
            <Heading size="lg" fontWeight="normal">Usuários</Heading>

            <NextLink href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                fontWeight="normal"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                Criar novo
              </Button>
            </NextLink>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th paddingX={["4", "4", "6"]} color="gray.300" width="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuário</Th>
                {isWideVersion && <Th>Data de cadastro</Th>}
                <Th width="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td paddingX={["4", "4", "6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold" noOfLines={1}>Weickmam Ferreira</Text>
                    <Text fontSize="sm" color="gray.300">weickmam@mail.io</Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>07 de Maio, 2022</Td>}
                <Td>
                  {
                    isWideVersion ? (
                      <Button
                        as="a"
                        size="sm"
                        fontSize="sm"
                        colorScheme="purple"
                        fontWeight="normal"
                        leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                      >
                        Editar
                      </Button>
                    )
                      : (
                        <IconButton
                          aria-label="Edit"
                          as="a"
                          size="sm"
                          fontSize="sm"
                          colorScheme="purple"
                          fontWeight="normal"
                          icon={<Icon as={RiPencilLine} fontSize="16" />}
                        />
                      )
                  }
                </Td>
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  )
}