import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { globalStyles } from "../styles/global";

export default function About() {
    return (
        <View style = {globalStyles.container}>
            <Text>Welcome to GameZone, the premier destination for game enthusiasts! Dive into comprehensive and honest reviews of the latest and greatest in the gaming world. Whether you're a casual gamer or a hardcore fanatic, GameZone offers detailed insights, ratings, and community feedback on a wide range of games. Stay updated, make informed choices, and join our vibrant community of gamers. GameZone is your one-stop shop for everything gaming!</Text>
        </View>
    )
}