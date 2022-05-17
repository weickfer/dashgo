import { Box, Button, Checkbox, Divider, Flex, Heading, Icon, Stack, SimpleGrid } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Input } from "../../components/Form/Input";

import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { SideBar } from "../../components/SideBar";

export default function UserList() {
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
          <Heading size="lg" fontWeight="normal">Criar usuário</Heading>

          <Divider marginY="6" borderColor="gray.700" />

          <Stack spacing="8" >
            <SimpleGrid width="100%" minChildWidth="240px" spacing="8">
              <Input name="name" label="Nome completo" />
              <Input name="email" type="email" label="E-mail" />
            </SimpleGrid>

            <SimpleGrid width="100%" minChildWidth="240px" spacing="8">
              <Input name="password" type="password" label="Senha" />
              <Input name="password" type="password" label="Confirmar senha" />
            </SimpleGrid>
          </Stack>

          <Flex marginTop="8" justifyContent="flex-end">
            <Stack direction="row" spacing="4">
              <Button colorScheme="whiteAlpha">Cancelar</Button>
              <Button colorScheme="pink">Salvar</Button>
            </Stack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}