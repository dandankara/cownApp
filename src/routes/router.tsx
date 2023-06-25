import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import TabNavigator from '../navigation/TabNavigator'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AuthRoutes from './auth.routes'

export default function Routes() {


  const Stack = createNativeStackNavigator()

  const loading = false
  const signed = false

  return (
    signed ? <TabNavigator /> : <AuthRoutes />
  )
}
