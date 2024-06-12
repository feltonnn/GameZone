import React, { useState } from "react";
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Modal, TouchableWithoutFeedback, Keyboard } from "react-native";
import { globalStyles } from "../styles/global";
import Card from "../shared/card";
import { MaterialIcons } from '@expo/vector-icons';
import ReviewForm from "./reviewform";

export default function Home({ navigation }) { 

    const [modalOpen, setModalOpen] = useState('false');

    const [reviews, setReviews] = useState([
        {title: "The Legend of Zelda: Tears of the Kingdom",
        rating: 5,
        body: 'The Legend of Zelda: Breath of the Wild is a masterclass in open-world design and a watershed game that reinvents a 30-year-old franchise. It presents a wonderful sandbox full of mystery, dangling dozens upon dozens of tantalizing things in front of you that just beg to be explored. I’ve had so many adventures in Breath of the Wild, and each one has a unique story behind what led me to them, making them stories on top of stories. And even after I’ve spent more than 50 hours searching the far reaches of Hyrule, I still manage to come across things I haven’t seen before. I’ll easily spend 50 to 100 more trying to track down its fascinating moments. - Jose Otero, March 2, 2017',
        key: 1},
        {title: "Final Fantasy VII Remake",
        rating: 4,
        body: 'The expectations around Final Fantasy VII Remake are sky high, and it mostly manages to deliver. Its combat is top notch, its enemy variety kept me constantly entertained, and seeing this snippet of story fleshed out with real emotional arcs and the previously hidden humanity behind Midgar filled me with pure joy. The boring RPG filler and Kingdom Hearts-esque convolution that was inserted in between did stop my ear-to-ear grin from being constant, but never long enough to kill the mood completely. That leaves this remake as one that still delivered on letting me relive (part of) a classic in stupendous fashion, while also standing as a great RPG all its own. - Tom Marks, April 6, 2020',
        key: 2},
        {title: "Life is Strange 2",
        rating: 3,
        body: 'When all is said and done, how you play Life is Strange 2 is going to alter how you feel about it. If you want a game that is confident in what it is trying to achieve, isn’t afraid to challenge your moral compass and actually teaches you something about yourself, then Life is Strange 2 is the game for you. It isn’t as quaint as the original, but frankly I am glad, Life is Strange 2 has taken all it did well in the first game, built on it and grown up along the way. Life is Strange 2 is the best game I have played all year which if you look through the reviews of games I have played this year, it is in with some huge names. You can’t beat a game, film, TV show or book that speaks to you on so many levels, and Life is Strange 2 did just that. It is bittersweet like a lost love – it broke my heart, but I wouldn’t change a single moment of the experience.',
        key: 3},
    ])

    const addReview  = (review) => {
        review.key = Math.random.toString();
        setReviews((currentreviews) => {
            return [review, ...currentreviews]
        });
        setModalOpen(false);
    }

    return (
        <View style = {globalStyles.container}>
            <Modal visible = {modalOpen} animationType="slide">
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style = {styles.modalContent}>
                        <MaterialIcons
                        name = 'close'
                        size = {24}
                        style = {{...styles.modalToggle, ...styles.modalClose}}
                        onPress={() => setModalOpen(false)}
                        />
                        <ReviewForm addReview = {addReview}/>
                    </View> 
                </TouchableWithoutFeedback>
            </Modal>

            <MaterialIcons
                name = 'add'
                size = {24}
                style = {styles.modalToggle}
                onPress={() => setModalOpen(true)}
            />
            <FlatList
            data = {reviews}
            renderItem={({ item }) => (
                <TouchableOpacity onPress= {() => navigation.navigate('ReviewDetailsScreen', item)}> 
                    <Card>
                        <Text style = {globalStyles.titleText}>{item.title}</Text>
                    </Card>
                </TouchableOpacity>
            )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    modalToggle: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 10,
        borderRadius: 100,
        alignSelf: 'center'
    },
    modalClose: {
        marginTop: 20,
        marginBottom: 0,
    },
    modalContent: {
        flex: 1
    }
})