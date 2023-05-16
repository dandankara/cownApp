import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import About from './pages/About/About'
import Home from './pages/Home/Home'

export default function Routes() {

  const Tab = createBottomTabNavigator()

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator initialRouteName='Home'>
          <Tab.Screen  options={{headerShown:false}} name='Home' component={Home} />
          <Tab.Screen  options={{headerShown:false}} name='About' component={About} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}
