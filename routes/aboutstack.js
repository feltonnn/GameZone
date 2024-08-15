import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import About  from '../screens/about';
import Header from '../shared/header';

const Stack = createNativeStackNavigator();

export default function AboutStack() {
    return (
        <Stack.Navigator initialRouteName='About'>

            <Stack.Screen
            name = 'about'
            component={About}
            options = {({navigation}) => {
                return {
                    headerTitle: () => <Header navigation = {navigation} title = 'About GameZone'/>,
                }}
            }
            />


        </Stack.Navigator>
    );
}

