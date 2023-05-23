import { SafeAreaProvider } from 'react-native-safe-area-context'
import Routes from './src/router'

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins'

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  })

  if(!fontsLoaded) {
    return null
  }

  return (
    <SafeAreaProvider>
      <Routes />
    </SafeAreaProvider>
  )
}
