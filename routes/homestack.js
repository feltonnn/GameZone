import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from "../screens/home"; 
import ReviewDetails from "../screens/reviewdetails";
import Header from '../shared/header';
import React from 'react';

const Stack = createNativeStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen
            name = 'home'
            component={Home}
            options = {({navigation}) => {
                return {
                    headerTitle: () => <Header navigation = {navigation} title = 'GameZone'/>,
                }}
            }
            />

            <Stack.Screen
            name = 'ReviewDetailsScreen'
            component={ReviewDetails}
            options={{title: 'Review Details'}} />
        </Stack.Navigator>
    );
}
