import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Dimensions } from 'react-native';

export default function Header({navigation, title}) {

    const openMenu = () => {
        navigation.openDrawer();
    }

    return (
        <ImageBackground source = {require('../assets/images/game_bg.png')} style = {styles.header}>
            <MaterialIcons name = 'menu' size = {28} onPress = {openMenu} style = {styles.icon}/>
            <View style = {styles.headerTitle}>
                <Image source = {require('../assets/images/heart_logo.png')} style = {styles.headerImage} />
                <Text style = {styles.headerText}>{title}</Text>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    header: {
        width:Dimensions.get('screen').width,
        flex: 1,
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1,
        textAlign: 'center',
        paddingRight: 28
    },
    icon: {
        position: 'absolute',
        left: 0,
    },
    headerTitle: {
        flexDirection: 'row',
    },
    headerImage: {
        width: 26,
        height: 26,
        marginHorizontal: 10,
    }
});