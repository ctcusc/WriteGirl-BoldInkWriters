import { Toast, useToast, Box, NativeBaseProvider } from "native-base";
import { SafeAreaView, View, Text, TouchableOpacity, ImageBackground, Image } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { styles } from "./ScreenSaverStyles.js";
import data from './screenSaverData.json'
import React, { useCallback, useEffect, useState } from "react";
import { SvgUri } from 'react-native-svg';

export default function ScreenSaverPage({ navigation, route }) {
    const [timeEnded, setTimeEnded] = useState(false)
    
    const promptId = route.params.promptId;
    // const prompt = data.at(promptId).prompt;
    // const img = data.at(promptId).img
    const [prompt, setPrompts] = useState('')
    const [img, setUri] = useState('')

    const [data, setData] = useState();
    useEffect(() => {
        let url = "http://localhost:8000/api/screen-saver-prompt/" + promptId;
        fetch(url, {
            method: "GET",
        })
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            // console.log(data)
            if(data == null) {throw console.log(data)}
            setPrompts(data.prompt);
            setUri(data.media[0].url)
        })
    }, [])

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
            // console.log(route.params.time)
            // const minSecs = route.params.time
            const{ minutes = 0, seconds = 0 } = route.params.time;
            setTime([minutes, seconds])
            setDone(false);
            Toast.closeAll()
        });
      }, [route.params.time]);

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
        if(done && !Toast.isActive("error-toast")) {
            Toast.show({
                id: "error-toast",
                placement: "top-right",
                render: () => {
                    return <Box style={styles.timeUpToast}>
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
            {/* <Pressable style={styles.arrContainer} onPress={() => { navigation.navigate('Screen Saver Setup') }}>
                <Image
                    style={styles.backArrow}
                    source={require('./backArrowIcon.png')}
                />
            </Pressable> */}
            <TouchableOpacity onPress={() => {
                navigation.navigate('Home Tabs', { screen: 'Screen Saver Setup' });
            }}>
                <Text style={styles.backText}>←</Text>
            </TouchableOpacity>

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