import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';

const AuthStack = createNativeStackNavigator()

function AuthRoutes() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen options={{headerShown:false}} name="Login" component={Login} />
      <AuthStack.Screen options={{
        headerStyle:{
          backgroundColor:'#6E742E',
        },
        headerTintColor:'#fff',
        headerTitle: 'Voltar',
        headerBackTitleVisible: false
      }}
      name="Register" component={Register} />
    </AuthStack.Navigator>
  )
}


export default AuthRoutes