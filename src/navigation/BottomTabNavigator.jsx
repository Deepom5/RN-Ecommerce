import * as React from 'react';
import { createBottomTabNavigator  } from '@react-navigation/bottom-tabs';
import CartNavigator from './CartNavigator';
import HomeNavitagor from './HomeNavigator';
import OrderNavigator from './OrderNavigator';
import { StyleSheet } from "react-native";
import { COLORS } from '../global/COLORS';
import Feather from '@expo/vector-icons/Feather';
import ProfileNavigator from './ProfileNavigator';

const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
      <BottomTab.Navigator
        initialRouteName='HomeNav'
        screenOptions={{
          headerShown:false,
          tabBarShowLabel: false,
          tabBarStyle: styles.tabBar
      }}
      >
        <BottomTab.Screen 
          name="HomeNav" 
          component={HomeNavitagor} 
          options={{
            tabBarIconStyle: styles.icon,
            tabBarIcon: ({focused}) => (
              <Feather name="shopping-bag" size={30} color={focused ?  COLORS.secondary : '#FFF'}/>
            )
          }}
        />
        <BottomTab.Screen
          name="CartNav"
          component={CartNavigator}
          options={{
            tabBarIconStyle: styles.icon,
            tabBarIcon: ({focused}) => (
              <Feather name="shopping-cart" size={30} color={focused ?  COLORS.secondary : '#FFF'}/>
            )
          }}
        />
        <BottomTab.Screen
          name="OrderNav"
          component={OrderNavigator}
          options={{
            tabBarIconStyle: styles.icon,
            tabBarIcon: ({focused}) => (
              <Feather name="list" size={30} color={focused ?  COLORS.secondary : '#FFF'}/>
            )
          }}
        />
        <BottomTab.Screen
          name="ProfileNav"
          component={ProfileNavigator}
          options={{
            tabBarIconStyle: styles.icon,
            tabBarIcon: ({focused}) => (
              <Feather name="user" size={30} color={focused ?  COLORS.secondary : '#FFF'}/>
            )
          }}
        />
      </BottomTab.Navigator>
  );
}

export default BottomTabNavigator;


const styles = StyleSheet.create({
    tabBar:{
        height: 80,
        backgroundColor: COLORS.primary,
        borderTopColor: COLORS.secondary,
    },
    icon:{
      width: '100%'
    }

})