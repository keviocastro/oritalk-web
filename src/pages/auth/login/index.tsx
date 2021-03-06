import {
  Avatar,
  Box,
  Button,
  Center,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import { Form } from '@unform/web';
import logo_justfit from 'assets/png/logo_justfit.png';
import logo from 'assets/png/logo.png';
import Union from 'assets/png/Union.png';
import { InputComponent } from 'components/Forms/Input';
import { useAuth } from 'hooks/auth';
import React from 'react';
import { FiLock, FiUser } from 'react-icons/fi';

const LoginPage: React.FC = () => {
  const { newSession, loading } = useAuth();

  return (
    <Stack minH="100%" justifyContent="center" bgColor="background.primary">
      <Center>
        <Stack spacing="0" direction="row" boxShadow="0 2px 3px 1px #ddd">
          <Box w="488px" bgColor="white" padding="80px 50px 30px">
            <Box>
              <Image w="192px" src={logo} />
            </Box>
            <Heading mt="30px" color="title" fontSize="36px" lineHeight="44px">
              Suporte prático e com eficiência
            </Heading>
            <Text fontSize="20px" mt="20px" color="text">
              Uma plataforma que proporciona atendimentos descomplicados para
              clientes e time suporte
            </Text>
            <Image mt="30px" src={Union} />

            <Stack direction="row" justifyContent="center" mt="40px">
              <Text color="grey">Desenvolvido por:</Text>
              <Stack direction="row" spacing="0" fontWeight="900">
                <Text>ORI</Text>
                <Text color="flow">FLOW</Text>
              </Stack>
            </Stack>
          </Box>

          <Box p="40px 145px" w="664px" bgColor="background.dark">
            <Form onSubmit={newSession}>
              <Stack alignItems="center" mb="30px">
                <Box
                  w="128px"
                  h="128px"
                  bgColor="#ccc"
                  borderRadius="100px"
                  p="4px">
                  <Avatar w="120px" h="120px" src={logo_justfit} />
                </Box>
              </Stack>
              <Box mb="20px">
                <InputComponent
                  icon={<FiUser />}
                  placeholder="Email"
                  name="email"
                  type="email"
                />
              </Box>
              <Box mb="20px">
                <InputComponent
                  icon={<FiLock />}
                  placeholder="Senha"
                  name="password"
                  type="password"
                />
              </Box>

              <Button
                fontWeight="normal"
                fontSize="14px"
                variant="link"
                color="grey">
                Esqueceu a senha?
              </Button>
              <Stack alignItems="center" mt="40px">
                <Button
                  isLoading={loading}
                  loadingText="Entrando..."
                  disabled={loading}
                  variant="solid"
                  type="submit"
                  w="232px">
                  Fazer login
                </Button>
              </Stack>

              <Stack direction="row" justifyContent="center" mt="60px">
                <Text color="grey">Não tem acesso?</Text>
                <Button variant="link">Solicite agora</Button>
              </Stack>
            </Form>
          </Box>
        </Stack>
      </Center>
    </Stack>
  );
};

export default LoginPage;
