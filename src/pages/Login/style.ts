import styled from 'styled-components/native'

export const Background = styled.View`
  flex:1;
  background-color: #F0F4FF;
`

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const LogoImage = styled.Image`
  margin-bottom: 25px;
`

export const AreaInput = styled.View`
  flex-direction: row;
`

export const Input = styled.TextInput`
  background-color: #fff;
  width: 90%;
  font-size: 16px;
  padding: 10px;
  border-radius: 8px;
  color: #121212;
  margin-bottom: 26px;
`

export const SubmitButton = styled.TouchableOpacity`
  width: 60%;
  height: 40px;
  border-radius:8px;
  background-color: #6E742E;
  align-items: center;
  justify-content: center;
`

export const SubmitText = styled.Text`
  font-size: 18px;
  align-items: center;
  color: #fff;
`

export const Link = styled.TouchableOpacity`
  margin-top: 10px;
  margin-bottom: 10px;
`

export const LinkText = styled.Text`
  color: #0038FF;
`