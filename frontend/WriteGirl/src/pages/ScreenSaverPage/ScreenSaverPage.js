import { Toast, useToast, Box, NativeBaseProvider } from "native-base";
import { SafeAreaView, View, Text, Pressable, ImageBackground } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { styles } from "./ScreenSaverStyles.js";
import data from './screenSaverData.json'
import React, { useCallback, useEffect, useState } from "react";
import { SvgUri } from 'react-native-svg';

export default function ScreenSaverPage({ navigation, route }) {
    const [timeEnded, setTimeEnded] = useState(false)
    
    const promptId = route.params.promptId;
    const prompt = data.at(promptId).prompt;
    const img = data.at(promptId).img

    // from https://medium.com/bb-tutorials-and-thoughts/how-to-create-a-countdown-timer-in-react-app-e99916046292
    const minSecs = route.params.time;
    const{ minutes = 0, seconds = 0 } = minSecs;
    const [ [mins, secs], setTime ] = useState( [minutes, seconds] )
    const [done, setDone] = useState(false)

    // useEffect(() => {
    //     console.log("in page", mins, secs)
    // }, [])
    React.useEffect(() => {
        navigation.addListener('focus', () => {
          console.log("reloaded");
        });
      }, [route]);

    const tick = () => {
        if ((mins === 0 || mins === '00') && (secs === 0 || secs === '00')) {
            // reset()
            setDone(true)
        } else if (secs === 0) {
            setTime([mins - 1, 59]);
        } else {
            setTime([mins, secs - 1]);
        }
    }
    // const reset = () => setTime([parseInt(minutes), parseInt(seconds)])
    const reset = () => {
        // alert('done')
        
    }

    useEffect(() => {
        const timerId = setInterval(() => tick(), 1000)
        return () => clearInterval(timerId)
    }, [mins, secs])

    useEffect(() => {
        if(done) {
            Toast.show({
                placement: "top",
                render: () => {
                    return <Box style={styles.successToast}>
                        Time's Up!
                    </Box>;
                }
            });
        } 
    }, [done])


    return (
        <NativeBaseProvider>
        <SafeAreaView style={styles.screensaverContainer}>
        <ImageBackground source={{uri: img}} resizeMode="cover" style={styles.screensaverBg}> 

            {/* BACK ARROW */}
            <View>
                {/* BACK ARROW GO HERE */}
                {/* <Pressable style={styles.button} onPress={() => {
                    const minSecs = { minutes: 0, seconds: 0 }
                    navigation.navigate('Screen Saver Setup')
                }}>
                    <Text style={styles.buttonLabel}>Set Timer</Text>
                </Pressable> */}
                <SvgUri
                    width="100%"
                    height="100%"
                    uri='./arrow.svg'
                />
            </View>

            {/* TIMER */}
            <View> 
                {/* {done ?
                    <Text style={styles.timeUpText}>Time's Up!</Text>
                :
                    <Text style={styles.timeText}>{`${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`}</Text>
                } */}
                <Text style={styles.timeText}>{`${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`}</Text>
            </View>

            {/* PROMPT */}
            <View>
                <Text style={styles.screensaverPrompt}>{prompt}</Text>
            </View>

        </ImageBackground>
        </SafeAreaView>
        </NativeBaseProvider>
    )
}