import { NativeBaseProvider } from "native-base";
import { SafeAreaView, View, Text, Pressable, ImageBackground } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { styles } from "./ScreenSaverStyles.js";
import data from './screenSaverData.json'
import React, { useEffect, useState } from "react";

export default function ScreenSaverPage({ navigation, route }) {
    const promptId = route.params.promptId;
    const prompt = data.at(promptId).prompt;
    const img = data.at(promptId).img

    // const time = route.params.timer
    // const [timer, setTimer] = useState(60);

    // useEffect(() => {
    //     const count = timer > 0 && setTimeout(() => setTimer(timer - 1), 1000)
    // }, [timer])

    // from https://medium.com/bb-tutorials-and-thoughts/how-to-create-a-countdown-timer-in-react-app-e99916046292
    const minSecs = route.params.time;
    const{ minutes = 0, seconds = 60 } = minSecs;
    const [ [mins, secs], setTime ] = useState( [minutes, seconds] )

    const tick = () => {
        if (mins === 0 && secs === 0) 
            reset()
        else if (mins === 0 && secs === 0) {
            setTime([59, 59]);
        } else if (secs === 0) {
            setTime([mins - 1, 59]);
        } else {
            setTime([mins, secs - 1]);
        }
    }
    const reset = () => setTime([parseInt(minutes), parseInt(seconds)])

    useEffect(() => {
        const timerId = setInterval(() => tick(), 1000)
        return () => clearInterval(timerId)
    })

    return (
        <NativeBaseProvider>
        <SafeAreaView style={styles.screensaverContainer}>
        <ImageBackground source={{uri: img}} resizeMode="cover" style={styles.screensaverBg}> 

            {/* BACK ARROW */}
            <View>
                {/* BACK ARROW GO HERE */}
            </View>

            {/* TIMER */}
            <View> 
                {/* <Text style={styles.timeText}>{timer}</Text> */}
                <Text style={styles.timeText}>{`${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`}</Text>
            </View>

            {/* PROMPT */}
            <View>
                <Text style={styles.timeText}>{prompt}</Text>
            </View>

        </ImageBackground>
        </SafeAreaView>
        </NativeBaseProvider>
    )
}