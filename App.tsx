import { SafeAreaProvider } from 'react-native-safe-area-context'
import Routes from './src/router'

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins'


import { ThemeProvider } from 'styled-components'
import theme from './src/global/sytles/theme'


export default function App() {

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  })

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </SafeAreaProvider>
  )
}
