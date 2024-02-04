import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login, SignUp } from '../screens';


const AuthStack = createNativeStackNavigator();

function AuthNavigator() {
  return (
      <AuthStack.Navigator 
        initialRouteName='Signup'
        screenOptions={()=> ({
            headerShown:false,
        })}
      >
        <AuthStack.Screen name="Login" component={Login} />
        <AuthStack.Screen name="Signup" component={SignUp} />
      </AuthStack.Navigator>
  );
}

export default AuthNavigator;