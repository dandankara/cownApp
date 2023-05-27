import { StatusBar } from 'expo-status-bar'
import { Text, Linking, Image } from 'react-native'
import {  SafeAreaView } from 'react-native-safe-area-context'

import Logo from '../../../assets/Logo.png'

import { HeaderImage, MainView, TextDescription, TextTitle, ViewIcons, ViewScroll } from './style'
import { diferencial, quemSomos } from './utils/genericTexts'
import { AntDesign } from '@expo/vector-icons'


export default function About() {

  return (
    <SafeAreaView>
      <MainView>
        <StatusBar style='dark' />

        <HeaderImage>
          <Image source={Logo} />
        </HeaderImage>

        <ViewScroll showsVerticalScrollIndicator={false}>
          <TextTitle>
            Quem somos?
          </TextTitle>

          <TextDescription>
            {quemSomos}
          </TextDescription>

          <TextTitle>
            Diferencial
          </TextTitle>

          <TextDescription>
            {diferencial}
          </TextDescription>

          <ViewIcons>
            <Text
              onPress={() => {
                Linking.openURL('https://twitter.com/')
              }}
            >
              <AntDesign name="twitter" size={40} color='black' />
            </Text>

            <Text onPress={() => {
              Linking.openURL('https://facebook.com')
            }}>
              <AntDesign name="facebook-square" size={40} color='black' />
            </Text>
          </ViewIcons>
        </ViewScroll>

      </MainView>
    </SafeAreaView>
  )
}
