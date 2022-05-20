import { useForm, SubmitHandler } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button, Flex, Stack } from "@chakra-ui/react";

import { Input } from '../components/Form/Input'

type SignInFormData = {
  email: string;
  password: string;
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório.').email('E-mail invalido.'),
  password: yup.string().required('Senha obrigatória'),
})

export default function SignIn() {
  const { register, formState, handleSubmit } = useForm({
    resolver: yupResolver(signInFormSchema)
  })
  const { errors } = formState

  const handleSignIn: SubmitHandler<SignInFormData> = async (data) => {
    await new Promise(resolve => setTimeout(resolve, 2 * 1000))

    console.log(data)
  }

  return (
    <Flex 
      width="100vw"
      height="100vh"
      align="center" 
      justify="center" 
    >
      <Flex 
        as="form"
        backgroundColor="gray.800"
        width="100%"
        maxWidth={360}
        padding={8}
        borderRadius={8}
        flexDirection="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input 
            name="email" 
            type="email" 
            label="E-mail"
            error={errors.email}
            {...register('email')} 
          />
          <Input
            name="password"
            type="password"
            label="Senha"
            error={errors.password}
            {...register('password')}
          />
        </Stack>

        <Button
          type="submit"
          marginTop={6}
          colorScheme="pink"
          size="lg"
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
