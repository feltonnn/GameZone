import React from "react";
import { StyleSheet, View, Text, Button, Image } from "react-native";
import { globalStyles, images } from "../styles/global";
import Card from "../shared/card";

export default function ReviewDetails({ route, navigation }) {

    const { title, rating, body } = route.params;

    return (
        <View style = {globalStyles.container}>
            <Card>
                <Text>{ title } </Text>
                <Text>Review: { body } </Text>
                <View style = {styles.rating}>
                    <Text>GameZone Rating: </Text>
                    <Image source={images.ratings[rating]} style = {styles.image}/>
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    rating: {
         flexDirection: 'row',
         justifyContent: 'center',
         paddingTop: 16,
         marginTop: 16,
         borderTopWidth: 1,
         borderTopColor: '#eee',
    },
    image: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain'
    },
})