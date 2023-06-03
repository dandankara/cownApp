import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import {createNativeStackNavigator} from '@react-navigation/native-stack'


import GuideDetail from './pages/GuideDetails/GuideDetails'
import TabNavigator from './navigation/TabNavigator'

export default function Routes() {

  const Stack = createNativeStackNavigator()


  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  )
}
