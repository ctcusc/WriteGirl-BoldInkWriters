import { useEffect, useState } from "react";
import { Text, ScrollView, View, Pressable, Image, TouchableOpacity } from "react-native";
import { styles } from "./MonthlyExercisesStyles";

export default function MonthlyExercises({ navigation, route }) {
  const [viewed, setViewed] = useState([false, false, false]) //update this later with useEffect
  const [data, setData] = useState([])
  const [progress, setProgress] = useState(0)
  const [month, setMonth] = useState()

  useEffect(() => {
    try {
      let dex = route.params.arrId
      if(dex === 0 || dex === 1 || dex === 2) {
        setProgress(progress+1);
        let arr = [...viewed]
        arr[dex] = true;
        setViewed(arr)
      }
    } catch (err) {
      console.log("error in MonthlyExercises.js", err)
    }
  }, [route.params])

  // fetch exercise prompts
  useEffect(() => {
    fetch("http://" + process.env.IP + ":8000/api/monthly-exercise-prompt/", {
      method: "GET",
    })
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        setData(data);
        return data;
    })
    .then((data) => {
      // get date to display
      setMonth(data[0].month)
    }).catch(function(error) {
      console.log('Monthly Exercise Fetch Error: ' + error.message);
       // ADD THIS THROW error
        // throw error;
      });
  }, [])

  // check viewed array to see how many exercises are done
  useEffect(() => {
    let count = 0;
    viewed.forEach((v) => (v === true && count++));
    setProgress(count)
  }, [viewed])

  const getProgressCircle = () => {
    if(progress === 0) { 
      return (
        <Image
          style={styles.progressRing}
          source={require('./assets/progress0.png')}
        />
      )
    }
    else if(progress === 1) { 
      return (
        <Image
          style={styles.progressRing}
          source={require('./assets/progress1.png')}
        />
      )
    }
    else if(progress === 2) { 
      return (
        <Image
          style={styles.progressRing}
          source={require('./assets/progress2.png')}
        />
      )
    }
    else if(progress === 3) { 
      return (
        <Image
          style={styles.progressRing}
          source={require('./assets/progress3.png')}
        />
      )
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>

      {/* BACK BUTTON */}
      {/* <Pressable style={styles.arrContainer} onPress={() => { navigation.navigate('Home') }}>
          <Image
              style={styles.backArrow}
              source={require('./assets/backArrowIcon.png')}
          />
      </Pressable> */}

    <TouchableOpacity style={styles.backArrow} onPress={() => {
          navigation.navigate('Home Tabs', { screen: 'Home Page' });
      }}>
          <Text style={styles.backText}>←</Text>
      </TouchableOpacity>


      {/* TITLE */}
      <View style={styles.titleContainer}>
        <Text style={styles.titleBold}>{month}</Text>
        <Text style={styles.titleRegular}> Exercises</Text>
      </View>


      {/* PROGRESS CIRCLE */}
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
              navigation.navigate('Monthly Exercise Opened', { data: datum, arrId: i })
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
                  {viewed[i]
                    ? <Image
                      style={styles.playButton}
                      source={require('./assets/check.png')}
                      />
                    : <Image
                      style={styles.playButton}
                      source={require('./assets/play.png')}
                      />
                  }
              </Pressable>
            </View>

            <Text
              style={
                viewed[i]
                  ? styles.activeExerciseDescription
                  : styles.exerciseDescription
              }
            >
              {datum.description.substring(0, 25) + "..."}
            </Text>
          </Pressable>
        );
      })}

    </ScrollView>
  );
}
