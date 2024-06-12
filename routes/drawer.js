import {createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AboutStack from './aboutstack';
import HomeStack from './homestack';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

export default function RootDrawerNavigator() {
    return (
        <NavigationContainer>
            <Drawer.Navigator
            initialRouteName='Home'
            screenOptions = {{headerShown: false}}
            // screenOptions={({navigation, route}) => ({
            //     header: () => <Header navigation = {navigation} title = {route.name}/>
            // })}
            >
                <Drawer.Screen name = 'Home' component = {HomeStack} />
                <Drawer.Screen name = 'About' component = {AboutStack} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}