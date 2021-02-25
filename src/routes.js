import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './pages/Login/login';
import Loading from './pages/Loading/loading';
import Main from './pages/Main';
import ListaPlantao from './components/ListaPlantao';
import Report from './pages/Report';



const Stack = createStackNavigator();

const StackScreens = () =>{
    return(
        <Stack.Navigator
            screenOptions={{headerShown: false}}
            initialRouteName='Loading' >
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Loading' component={Loading} />
            <Stack.Screen name='Main' component={Main} />
            <Stack.Screen name='ListaPlantao' component={ListaPlantao} />
            <Stack.Screen name='Report' component={Report} />
        </Stack.Navigator>
    )
}

const Routes = () =>{
    return (
        <NavigationContainer>
            <StackScreens />
        </NavigationContainer>
    )
}

export default Routes;


