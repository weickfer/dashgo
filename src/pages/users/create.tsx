import NextLink from 'next/link'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Box, Button, Divider, Flex, Heading, Stack, SimpleGrid } from "@chakra-ui/react";

import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { SideBar } from "../../components/Sidebar";

type CreateUserFormData = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

/*
.min(8, 'Sua senha tem que ter no mínimo 8 caracteres.')
  .matches(/[a-z]/, 'Sua senha deve conter pelo menos uma letra minúscula.')
  .matches(/[A-Z]/, 'Sua senha deve conter pelo menos uma letra maiúscula.')
  .matches(/[0-9]/, 'Sua senha deve conter pelo menos um número.')
  .matches(/[^a-zA-Z0-9]/, 'Sua senha deve conter pelo menos um carácter especial.')
*/

const createUserFormSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatório.'),
  email: yup.string().required('E-mail obrigatório.').email('E-mail invalido.'),
  password: yup.string()
    .required('Senha obrigatória.')
    .min(6, 'No mínimo 6 caracteres.'),
  password_confirmation: yup.string().oneOf([
    null,
    yup.ref('password'),
  ], 'As senhas não conferem.'),
})

export default function UserList() {
  const { register, formState, handleSubmit } = useForm({
    resolver: yupResolver(createUserFormSchema)
  })
  const { errors } = formState

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async (data) => {
    await new Promise(resolve => setTimeout(resolve, 2 * 1000))

    console.log(data)
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

        <Box
          as="form"
          flex="1"
          borderRadius={8}
          backgroundColor="gray.800"
          padding={["6", "8"]}
          onSubmit={handleSubmit(handleCreateUser)}
        >
          <Heading size="lg" fontWeight="normal">Criar usuário</Heading>

          <Divider marginY="6" borderColor="gray.700" />

          <Stack spacing="8" >
            <SimpleGrid width="100%" minChildWidth="240px" spacing={["6", "8"]}>
              <Input
                name="name"
                label="Nome completo"
                error={errors.name}
                {...register('name')}
              />
              <Input
                name="email"
                type="email"
                label="E-mail"
                error={errors.email}
                {...register('email')}
              />
            </SimpleGrid>

            <SimpleGrid width="100%" minChildWidth="240px" spacing={["6", "8"]}>
              <Input
                name="password"
                type="password"
                label="Senha"
                error={errors.password}
                {...register('password')}
              />
              <Input
                name="password"
                type="password"
                label="Confirmar senha"
                error={errors.password_confirmation}
                {...register('password_confirmation')}
              />
            </SimpleGrid>
          </Stack>

          <Flex marginTop="8" justifyContent="flex-end">
            <Stack direction="row" spacing="4">
              <NextLink href="/users">
                <Button as="a" colorScheme="whiteAlpha">Cancelar</Button>
              </NextLink>
              <Button type="submit" colorScheme="pink" isLoading={formState.isSubmitting}>
                Salvar
              </Button>
            </Stack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}