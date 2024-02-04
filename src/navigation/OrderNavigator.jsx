import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Orders } from '../screens';


const Stack = createNativeStackNavigator();

function OrderNavigator() {
  return (
      <Stack.Navigator 
        initialRouteName='Orders'
        screenOptions={()=> ({
            headerShown:false,
        })}
      >
        <Stack.Screen name="Cart" component={Orders} />
      </Stack.Navigator>
  );
}

export default OrderNavigator;