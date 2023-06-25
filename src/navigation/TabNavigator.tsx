import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import About from '../pages/About/About'
import Home from '../pages/Home/Home'
import Guides from '../pages/Guides/Guides'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import GuideDetails from '../pages/GuideDetails/GuideDetails'


const Tab = createBottomTabNavigator()
const Stack  = createNativeStackNavigator()


const GuideStackDetails = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{headerShown:false}} name='Guides' component={Guides} />
      <Stack.Screen name='GuideDetails' component={GuideDetails} />
    </Stack.Navigator>
  )
}

const TabNavigator = () => {
  return(
    <Tab.Navigator initialRouteName='Home' screenOptions={{
      headerShown:false
    }}>
      <Tab.Screen name='Home' component={Home} />
      <Tab.Screen name='About' component={About} />
      <Tab.Screen name='Guides'  component={GuideStackDetails}/>
    </Tab.Navigator>
  )
}

export default TabNavigator