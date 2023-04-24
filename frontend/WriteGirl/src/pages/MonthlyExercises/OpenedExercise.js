import { useEffect, useState } from "react";
import { Text, ScrollView, View, Pressable, Image, SafeAreaView } from "react-native";
import { styles } from "./OpenedExerciseStyles";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { NativeBaseProvider } from "native-base";
// import { Video } from 'react-native-video';
//TODO: use this in the future: https://stackoverflow.com/questions/60184592/how-to-fix-import-error-requirenativecomponent-from-react-native-web
// import stockVid from './assets/stockVid.mp4'

export default function OpenedExercise({ navigation, route }) {
    const [showConfetti, setShowConfetti] = useState(false);

    const handleConfetti = () => {
        setShowConfetti(true);
        setTimeout(() => {
            setShowConfetti(false);
        }, 4000);
    }

    const [data, setData] = useState(route.params.data)
    const [done, setDone] = useState(false) //set style for button

    useEffect(() => {
        navigation.addListener('focus', () => {
            const newData = route.params.data;
            setData(newData)
            setDone(false);
        });
    }, [route.params.data]);

    
    const renderMedia = () => {
        if(data.mediaType == "Video") {
            try{
              return(
                // <Video
                //   source={stockVid}
                //   paused={false} //make it auto start
                //   // style={styles.img}
                //   controls={true}
                // />
                <Text style={styles.img}>VIDEO HERE!!</Text>
              )
            } catch (err) {
              console.log("video render error", err)
            }
        } else if(data.mediaType == "Picture" || data.mediaType == "gif") {
            return(<Image
                style={styles.img}
                source={{
                    uri: data.media[0].url,
                    // uri: data.media,
                }}
            />)
        } else if(data.mediaType == "Audio") {
            return(
              console.log("AUDIO ONLY MEDIA TYPE")
            )
        } else if(data.mediaType == "Text Only") {
            return(
              console.log("TEXT ONLY MEDIA TYPE")
            )
        } else {
            return(console.log("INVALID MEDIA TYPE: ", data.mediaType))
        }
    }

    return (
        // <ScrollView>

        // </ScrollView>

        <NativeBaseProvider>
            <SafeAreaView style={styles.container}>
                {showConfetti ? (
                    <Image
                        style={{ width: '100%', height: '100%', position: 'absolute', zIndex: 999 }}
                        source={require('./croppedconfetti.gif')}
                    />
                ) : null}
                <KeyboardAwareScrollView contentContainerStyle={styles.container}>
                    {/* BACK BUTTON */}
                    <Pressable style={styles.arrContainer} onPress={() => { navigation.navigate('Monthly Exercises') }}>
                        <Image
                            style={styles.backArrow}
                            source={require('./assets/backArrowIcon.png')}
                        />
                    </Pressable>


                    {/* EXERCISE PROMPT CONTAINER */}
                    <View style={styles.exerciseContainer}>

                        {/* MEDIA */}
                        <View>
                            {renderMedia()}
                        </View>
                        

                        <Text style={styles.title}>{data.title}</Text>
                        <Text style={styles.description}>{data.description}</Text>

                    </View>

                    {/* BUTTON */}
                    <View>
                        <Pressable 
                            style={
                                done
                                ? styles.closeButton
                                : styles.completeButton
                            }
                            onPress={() => {
                                if(done) {
                                    setDone(false)
                                    navigation.navigate('Monthly Exercises', { id: data.id, arrId: route.params.arrId })
                                } else { 
                                    setDone(true)
                                    setShowConfetti(true);
                                    setTimeout(() => {
                                        setShowConfetti(false);
                                    }, 4000);
                                    }
                            }}
                        >
                            <Text style={
                                done
                                ? styles.closeButtonText
                                : styles.completeButtonText
                            }>
                                {done ? "close" : "complete"}
                            </Text>
                        </Pressable>
                    </View>

                </KeyboardAwareScrollView>
            </SafeAreaView>
        </NativeBaseProvider>
    )
}

