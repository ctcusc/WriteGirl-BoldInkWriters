import { NativeBaseProvider } from "native-base";
import { SafeAreaView, View, Text, Image, ScrollView, Dimensions, Pressable, FlatList } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { styles } from "./ScreenSaverStyles.js";

// npm i react-native-sideswipe
// npm i react-native-elements 

// import SideSwipe from 'react-native-sideswipe';
import data from './screenSaverData.json'

const { width, height } = Dimensions.get('window');
const ITEM_SIZE = width * 0.85
const ITEM_HEIGHT = height * 0.9
const SPACING = 10
const FULLSIZE = ITEM_SIZE + (SPACING * 2)
const START_END_PADDING = (width - ITEM_SIZE) / 2 + 2

export default function ScreenSaverSetup({ navigation }) {
    const [promptIndex, setPromptIndex] = useState(0)
    
    const viewConfigRef = React.useRef({ itemVisiblePercentThreshold: 50 })
    const promptChanged = React.useRef(( viewableItems ) => {

        // console.log(viewableItems)
        try {
            // console.log(viewableItems.viewableItems[0].index)
            setPromptIndex(viewableItems.viewableItems[0].index)
        } catch (e) {
            console.log("scrolling")
        }
    })

    return (
        <NativeBaseProvider>
        <SafeAreaView style={styles.container}>
        {/* <KeyboardAwareScrollView style={styles.container}> */}

            {/* <View>
                <Image style={styles.backarrow} source={'./backArrowIcon.png'}/>
            </View> */}

            <View>
                <Text style={styles.title}>Pick a prompt and set a timer!</Text>
            </View>

            {/* <View style={styles.carouselContainer}> */}
            <FlatList
                style={{
                    paddingLeft: START_END_PADDING,
                    // paddingRight: START_END_PADDING,
                    // paddingHorizontal: START_END_PADDING,
                    // paddingEnd: START_END_PADDING,
                    // padding: START_END_PADDING
                }}
                data={data}
                horizontal
                // contentContainerStyle={{ alignItems: 'center' }}
                bounces={false}
                snapToAlignment="center"
                snapToInterval={FULLSIZE}
                decelerationRate="fast"
                onViewableItemsChanged={ promptChanged.current }
                viewabilityConfig={ viewConfigRef.current }
                ListFooterComponent={() => <View style={{padding: 10}}></View>} //padding needs to be better figured out
                renderItem={({ item }) => (
                    <View 
                        style={{
                            width: ITEM_SIZE, 
                            height: ITEM_SIZE * 0.5,
                            paddingHorizontal: SPACING
                        }}
                    >
                        <View style={styles.cardContainer}>
                            <Text style={styles.prompt}> {item.prompt} </Text>
                            {/* <Text style={{marginTop: 10}}>
                                alsjflasjd flkj oiasjd flkjaoisejks dflskdjf {item.img}
                            </Text> */}
                            <Image style={styles.img} source={{ uri: item.img }} /> 
                        </View>
                    </View>
                )}
            />
            {/* </View> */}

            {/* <SideSwipe
                data={data}
                style={styles.carouselContainer}
                itemWidth={width}
                threshold={0}
                contentOffset={0}
                onIndexChange={index => (setPromptIndex(index))}
                renderItem={({ item }) => (
                    <View style={{width, paddingHorizontal: 30}}>
                        <View style={styles.cardContainer}>
                            <Text style={styles.prompt}> {item.prompt} </Text>
                            <Text style={{marginTop: 10}}>
                                alsjflasjd flkj oiasjd flkjaoisejks dflskdjf {item.img}
                            </Text>
                            <Image style={styles.img} source={{ uri: item.img }} /> 
                        </View>
                    </View>
                )}
            /> */}


            <View style={styles.timerContainer}>
            {/* TIMER SETUP */}
             {/* HELPPPPPPP */}

            {/* BUTTON */}
            <View style={styles.buttonWrapper}>
                <Pressable style={styles.button} onPress={() => navigation.navigate('Screen Saver Page', {promptId: promptIndex})}>
                    <Text style={styles.buttonLabel}>Set Timer</Text>
                </Pressable>
            </View>

            </View>

        {/* </KeyboardAwareScrollView> */}
        </SafeAreaView>
        </NativeBaseProvider>
    )
}
