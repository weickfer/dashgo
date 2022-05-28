import NextLink from 'next/link'
import { GetServerSideProps } from 'next'
import { useState } from 'react';
import {
  Box,
  Button,
  IconButton,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
  Spinner,
  Link
} from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";

import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { SideBar } from "../../components/Sidebar";
import { getUsers, useUsers } from '../../services/hooks/users';
import { queryClient } from '../../services/query';
import { api } from '../../services/api';

export default function UserList() {
  const [currentPage, setCurrentPage] = useState(1)
  const { isLoading, isRefetching, error, data } = useUsers(currentPage)

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  const handlePrefetchUser = async (userId: string) => {
    await queryClient.prefetchQuery(['user', `id:${userId}`], async () => {
      const response = await api.get(`/users/${userId}`);

      return response.data;
    }, { 
      staleTime: 1000 * 60 * 10 // 10 minutos
    })
  }

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
            <Heading size="lg" fontWeight="normal">
              Usuários

              {(!isLoading && isRefetching) && <Spinner size="sm" color="gray.500" marginLeft="4" />}
            </Heading>

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

          {
            isLoading ? (
              <Flex justifyContent="center">
                <Spinner />
              </Flex>
            ) : error ? (
              <Flex justifyContent="center">
                <Text>Falha ao obter dados dos usuários.</Text>
              </Flex>
            ) : (
              <>
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
                    {
                      data.users.map(user => (
                        <Tr key={user.id}>
                          <Td paddingX={["4", "4", "6"]}>
                            <Checkbox colorScheme="pink" />
                          </Td>
                          <Td>
                            <Box>
                              <Link color="purple.400" onMouseEnter={() => handlePrefetchUser(user.id)}>
                                <Text fontWeight="bold" noOfLines={1}>{user.name}</Text>
                              </Link>
                              <Text fontSize="sm" color="gray.300">{user.email}</Text>
                            </Box>
                          </Td>
                          {isWideVersion && <Td>{user.createdAt}</Td>}
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
                      ))
                    }
                  </Tbody>
                </Table>

                <Pagination
                  totalCountOfRegister={data.total}
                  currentPage={currentPage}
                  onChangePage={setCurrentPage}
                  registerPerPage={10}
                />
              </>
            )
          }
        </Box>
      </Flex>
    </Box>
  )
}

// export const getServerSideProps: GetServerSideProps = async (props) => {
//   const { users, total } = await getUsers(Number(props.params.page || 1))

//   return {
//     props: { users, total }
//   }
// }
