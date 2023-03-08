import { useEffect, useState } from "react";
import { Text, ScrollView, View, Pressable, Image, SafeAreaView } from "react-native";
import { styles } from "./OpenedExerciseStyles";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { NativeBaseProvider } from "native-base";

export default function OpenedExercise({ navigation, route }) {
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
        if(data.mediaType == "video") {
            return(console.log("video"))
        } else if(data.mediaType == "img" || data.mediaType == "gif") {
            return(<Image
                style={styles.img}
                source={{
                    uri: 'https://media1.giphy.com/media/3oEjI4sFlp73fvEYgw/giphy.gif',
                    // uri: data.media,
                }}
            />)
        } else {
            return(console.log("INVALID MEDIA TYPE: ", data.mediaType))
        }
    }

    return (
        // <ScrollView>

        // </ScrollView>

        <NativeBaseProvider>
            <SafeAreaView >
                <KeyboardAwareScrollView contentContainerStyle={styles.container}>
                    {/* BACK BUTTON */}
                    <Pressable style={styles.arrContainer} onPress={() => { navigation.navigate('Home') }}>
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
                                    navigation.navigate('Monthly Exercises', { id: data.id })
                                } else { setDone(true) }
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

