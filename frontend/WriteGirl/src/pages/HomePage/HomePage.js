import { useState, useEffect } from 'react';
import { Text, View, ImageBackground, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { styles } from "./HomePageStyles.js";
import { auth } from "../../../firebaseConfig";


export default function HomePage({navigation, route}) {
  const[userInfo, setUserInfo] = useState();
  const[userToken, setUserToken] = useState("");
  const[month, setMonth] = useState("")

  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  useEffect(() => {
    // get user token
    const fetchToken = async () => {
      const token = await auth.currentUser.getIdToken();
      setUserToken(token);
    }
    fetchToken()
  }, [])

  useEffect(() => {
    // get user name and data
    if(userToken) {
      try{
        fetch(`http://localhost:8000/api/account/`, {
          method: "GET",
          headers: { 
            'Content-Type': 'application/json', 
            Authorization: `Bearer ${userToken}` 
          }
        })
        .then((res) => {
            console.log("/api/account/", res)
            return res.json()
        })
        .then((data) => {
            setUserInfo(data)
            return data
        })
      } catch (err) {
        console.log("HomePage.js:onAuthStateChanged", err)
      }
    }
  }, [userToken])

  useEffect(() => {
    // get current month to display
    const monthIndex = new Date().getMonth();
    console.log("month", monthNames[monthIndex])
    setMonth(monthNames[monthIndex])
  }, [])


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.welcome}>
                <Text style={styles.welcometext1}>Welcome, {userInfo ? userInfo.firstName : null}</Text>
                <Text style={styles.welcometext2}>What inspires you today?</Text>
            </View>

            
            <View style={styles.exercises}>
                <Text style={styles.exercisestext1}>{month}</Text>
                <Text style={styles.exercisestext2}>Imagine you are walking through the forest</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Monthly Exercises', {arrId: -1})}>
                    <Text style={styles.exercisesbutton}>unlock</Text>
                </TouchableOpacity>
            </View>
            
            <View style={styles.tip}>
                <Text style={styles.tipbox}></Text>
                <View style={styles.tipimagecontainer} >
                    <ImageBackground style={styles.tipimage} source={require('./assets/speech-bubble.png')}>
                        <Text style={styles.tiptext}>Listening to music is a great way to set the mood for writing</Text>
                    </ImageBackground>
                </View>
            </View>

            <View style={styles.jumpstart}>
                <TouchableOpacity style={styles.jumpstartbutton} onPress={() => navigation.navigate('JumpstartPage')}>
                    <Image style={styles.jumpstartarrow} source={require('./assets/Vector3.png')}/>
                </TouchableOpacity>
                <Text style={styles.jumpstarttext}>jumpstart your writing</Text>
            </View>
        </SafeAreaView>
    )
}