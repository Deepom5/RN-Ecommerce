import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CategoriesList, Details, Home, Login ,SignUp} from '../screens';

const Stack = createNativeStackNavigator();

function HomeNavitagor() {
  return (
      <Stack.Navigator 
        initialRouteName='Login'
        screenOptions={({route, navigation})=> ({
            headerShown:false,
            // header: ()=> (
            //     <View>
            //         <Header title={route.name} navigation={navigation}/>
            //     </View>
            // ),
        })}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={SignUp} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
  );
}

export default HomeNavitagor;
