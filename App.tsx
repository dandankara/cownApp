import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Home from './src/pages/Home'
import About from './src/pages/About'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

export default function App() {

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
