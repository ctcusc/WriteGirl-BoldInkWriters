import { useEffect, useState } from "react";
import { Text, ScrollView, View, Pressable, Image } from "react-native";
import { styles } from "./MonthlyExercisesStyles";
import * as Progress from 'react-native-progress';

export default function MonthlyExercises({ navigation, route }) {
  const [viewed, setViewed] = useState([true, true, false]) //update this later with useEffect
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

  useEffect(() => {
    let count = 0;
    viewed.forEach((v) => (v === true && count++));
    setProgress(count)
  }, [viewed])

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
              navigation.navigate('Monthly Exercise Opened', { data: datum })
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
