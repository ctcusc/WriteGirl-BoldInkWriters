
##### MONTHLY EXERCISES #####

import { useEffect, useState } from "react";
import { Text, ScrollView, View, Pressable, Image } from "react-native";
import { styles } from "./MonthlyExercisesStyles";
import * as Progress from 'react-native-progress';

export default function MonthlyExercises({ navigation, route }) {
  const [viewed, setViewed] = useState([false, false, false]) //update this later with useEffect
  const [data, setData] = useState([])
  const [progress, setProgress] = useState(0)

  const [month, setMonth] = useState()
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  // fetch exercise prompts
  useEffect(() => {
    fetch(`http://localhost:8000/api/monthly-exercise-prompt/`, {
      method: "GET",
    })
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        console.log(data)
        setData(data);
        return data;
    })
    .then((data) => {
      const d = new Date(data[0].date)
      setMonth(monthNames[d.getMonth()])
    })
  }, [])

  //check how many prompts have been completed
  useEffect(() => {
    let count = 0;
    viewed.forEach((v) => (v === true && count++));
    setProgress(count)
  }, [viewed])

  //check for navigation from OpenedExercise page
  useEffect(() => {
    navigation.addListener('focus', () => {
        try {
          console.log(route.params)
          const completedId = route.params.id;
          const dex = route.params.viewedIndex;
          //do whatever here to mark and exercise for a user is completed
          setViewed[dex](true);
        } catch (err) {
          console.log("updating viewed error:", err)
        }
          
    });
  }, [route.params]);

  const getProgressCircle = () => {
    return (
      <Image
        style={styles.progressRing}
        source={require('./assets/progress' + progress + '.png')}
      />
    )
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>

      {/* BACK BUTTON */}
      <Pressable style={styles.arrContainer} onPress={() => { navigation.navigate('Home') }}>
          <Image
              style={styles.backArrow}
              source={require('./assets/backArrowIcon.png')}
          />
      </Pressable>


      {/* TITLE */}
      <View style={styles.titleContainer}>
        <Text style={styles.titleBold}>{month}</Text>
        <Text style={styles.titleRegular}> Exercises</Text>
      </View>

      {/* PROGRESS CIRCLE */}
      {/* <View style={styles.ringContainer}>
        <Text style={styles.ringTitle}>33%</Text> */}
        {/* <Progress.Circle 
          size={183} 
          progress={progress}
          animated={true} 
          color={"yellow"}
          // unfilledColor={"purple"}
          borderWidth={10}
          // borderColor={"red"}
          showsText={true}
          fill="#FFF"

        /> */}
      {/* </View> */}
      <View style={styles.ringContainer}>
        {getProgressCircle()}
      </View>
      


      {/* EXERCISES */}
      {data.map((datum, i) => {
        return (
          <Pressable
            key={i}
            style={
              viewed[i]
                ? styles.activeExerciseContainer
                : styles.exerciseContainer
            }
            onPress={() => { 
              // console.log("PRESSED", datum)
              // setPromptOpened(true)
              // setActiveItem(datum)
              navigation.navigate('Monthly Exercise Opened', { id: datum.id, viewedIndex: i })
            }}
          >
            {/* TITLE */}
            <View style={styles.titleRow}>
              <Text
                style={
                  viewed[i] ? styles.activeExerciseTitle : styles.exerciseTitle
                }
              >
                {datum.title}
              </Text>
              <Pressable>
                  <Image
                      style={styles.playButton}
                      source={require('./assets/play.png')}
                  />
              </Pressable>
            </View>

            <Text
              style={
                viewed[i]
                  ? styles.activeExerciseDescription
                  : styles.exerciseDescription
              }
            >
              {datum.description}
            </Text>
          </Pressable>
        );
      })}

    </ScrollView>
  );
}



##### OPENED EXERCISE #####


import { useEffect, useState } from "react";
import { Text, ScrollView, View, Pressable, Image, SafeAreaView } from "react-native";
import { styles } from "./OpenedExerciseStyles";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { NativeBaseProvider } from "native-base";

export default function OpenedExercise({ navigation, route }) {
    const [id, setId] = useState(route.params.id)
    const [data, setData] = useState([])
    const [done, setDone] = useState(false) //set style for button
    const [index, setIndex] = useState(route.params.viewedIndex) //corresponds to exercise's index in viewed array

    useEffect(() => {
        navigation.addListener('focus', () => {
            const newId = route.params.id;
            const newDex = route.params.viewedIndex;
            setId(newId)
            setIndex(newDex)
            setDone(false);
        });
    }, [route.params.id, route.params.viewedIndex]);

    useEffect(() => {
        try {
            let url = 'http://localhost:8000/api/monthly-exercise-prompt/' + id;
            fetch(url, {
                method: "GET",
            })
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                console.log(data)
                setData(data);
                return data;
            })
        } catch (err) {
            console.log("fetch error", err)
        }
    }, [id])

    
    const renderMedia = () => {
        try {
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
        } catch (err) {
            return(console.log("renderMedia failed:", err))
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
                                    navigation.navigate('Monthly Exercises', { id: data.id, completed: true, viewedIndex: index })
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


