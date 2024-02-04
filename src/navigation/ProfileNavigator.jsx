import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from '../screens/Profile/Profile';
import Location from '../screens/Location/Location';


const ProfileStack = createNativeStackNavigator();

function ProfileNavigator() {
  return (
      <ProfileStack.Navigator 
        initialRouteName='Signup'
        screenOptions={()=> ({
            headerShown:false,
        })}
      >
        <ProfileStack.Screen name="Profile" component={Profile} />
        <ProfileStack.Screen name="Location" component={Location} />
      </ProfileStack.Navigator>
  );
}

export default ProfileNavigator;