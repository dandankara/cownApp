import { StatusBar } from 'expo-status-bar'
import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { Platform } from 'react-native'

import Logo from '../../../assets/Logo.png'
import {
  Container,
  Input,
  AreaInput,
  SubmitButton,
  SubmitText,
  Link,
  LinkText,
  LogoImage,
  Background,
} from './style'

import { useNavigation } from '@react-navigation/native'

export default function Login() {

  const navigation = useNavigation()

  return (
    <Background>
      <Container behavior={Platform.OS === 'ios'? 'padding' : ''}
        enabled
      >
        <LogoImage source={Logo} />

        <AreaInput>
          <Input placeholder="Usuário" />
        </AreaInput>

        <AreaInput>
          <Input  secureTextEntry={true} placeholder="Senha" />
        </AreaInput>

        <SubmitButton>
          <SubmitText>Entrar</SubmitText>
        </SubmitButton>

        <Link onPress={() => navigation.navigate('Register')}>
          <LinkText>Cadastre-se!</LinkText>
        </Link>
      </Container>
    </Background>
  )
}
