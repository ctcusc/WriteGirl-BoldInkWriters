import { NativeBaseProvider, Toast, Box } from "native-base";
import { SafeAreaView, View, Text, Image, ScrollView, Dimensions, Pressable, FlatList } from "react-native";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { styles } from "./ScreenSaverStyles.js";

// npm i react-native-wheel-scrollview-picker
import ScrollPicker from 'react-native-wheel-scrollview-picker';

// import SideSwipe from 'react-native-sideswipe';
import data from './screenSaverData.json'
// import timerNumbers from './timerNumbers'
const timerNumbers = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09',
    '10', '11', '12', '13', '14', '15', '16', '17', '18', '19',
    '20', '21', '22', '23', '24', '25', '26', '27', '28', '29',
    '30', '31', '32', '33', '34', '35', '36', '37', '38', '39',
    '40', '41', '42', '43', '44', '45', '46', '47', '48', '49',
    '50', '51', '52', '53', '54', '55', '56', '57', '58', '59']

const { width, height } = Dimensions.get('window');
const PROMPT_SIZE = width * 0.75
const PROMPT_HEIGHT = height * 0.2
const SPACING = 10
const FULLSIZE = PROMPT_SIZE + (SPACING * 2)
const START_END_PADDING = (width - PROMPT_SIZE) / 2 + 2
const TIMER_ITEM_HEIGHT = 50


// timer component
const TimerList = React.forwardRef(({ setType }, ref) => {
    return (

        <ScrollPicker 
            dataSource={timerNumbers}
            selectedIndex={0}
            renderItem={(data, index, isSelected) => {
                return (
                    // <Text style={styles.timerText}>{data}</Text>
                    <Text>{data}</Text>
                )
            }}
            onValueChange={(data, selectedIndex) => {
                // console.log("just selected", selectedIndex)
                setType(data)
            }}
            style = {{
                backgroundColor: '#fff',
            }}
            // wrapperBackground={'#000'}
            activeItemColor={'#e31919'}
            wrapperHeight={height/12}
            highlightColor='#000'

        />
    )
})



export default function ScreenSaverSetup({ navigation }) {


    //for timer picker
    const [min, setMin] = useState(0)
    const [sec, setSec] = useState(0)
    // const minSecs = {minutes: min, seconds: sec} 
    const onTimerChange = useCallback(setMin, [])
    const onMinChange = useCallback(setMin, [])
    const onSecChange = useCallback(setSec, [])


    // for carousel gallery
    const [promptIndex, setPromptIndex] = useState(0)
    const viewConfigRef = React.useRef({ itemVisiblePercentThreshold: 50 })
    const promptChanged = React.useRef((viewableItems) => {
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
                    contentContainerStyle={{
                        paddingLeft: START_END_PADDING,
                        paddingRight: START_END_PADDING,
                    }}
                    data={data}
                    horizontal
                    // contentContainerStyle={{ alignItems: 'center' }}
                    showsHorizontalScrollIndicator={false}
                    bounces={false}
                    snapToAlignment="center"
                    snapToInterval={FULLSIZE}
                    decelerationRate="fast"
                    onViewableItemsChanged={promptChanged.current}
                    viewabilityConfig={viewConfigRef.current}
                    ListFooterComponent={() => <View style={{ padding: 10 }}></View>} //padding needs to be better figured out
                    renderItem={({ item }) => (
                        <View
                            style={{
                                width: PROMPT_SIZE,
                                height: PROMPT_HEIGHT,
                                paddingHorizontal: SPACING,
                            }}
                        >
                            <View style={styles.cardContainer}>
                                <Text style={styles.promptText}> {item.prompt} </Text>
                                <View style={styles.imgContainer}>
                                    <Image style={styles.img} source={{ uri: item.img }} />
                                </View>
                            </View>
                        </View>
                    )}
                />
                {/* </View> */}



                <View style={styles.timerContainer}>
                    {/* TIMER SETUP */}

                    <View style={styles.timerPicker}>
                        <TimerList setType={setMin} />
                        <TimerList setType={setSec} />
                    </View>


                    


                    {/* BUTTON */}
                    <View style={styles.buttonWrapper}>
                        <Pressable style={styles.button} onPress={() => {
                            console.log("min", min, ' : sec', sec)
                            const minSecs = { minutes: min, seconds: sec }
                            if(min === 0 && sec === 0) {
                                Toast.show({
                                    placement: "top",
                                    render: () => {
                                        return <Box style={styles.successToast}>
                                            Please select a time!
                                        </Box>;
                                    }
                                });
                            } else {
                                navigation.navigate('Screen Saver Page', { promptId: promptIndex, time: minSecs })
                            }
                        }}>
                            <Text style={styles.buttonLabel}>Set Timer</Text>
                        </Pressable>
                    </View>

                </View>

                {/* </KeyboardAwareScrollView> */}
            </SafeAreaView>
        </NativeBaseProvider>
    )
}
