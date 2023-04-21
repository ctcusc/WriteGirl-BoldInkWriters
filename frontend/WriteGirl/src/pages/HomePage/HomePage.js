import { ScrollView, Animated, Text, View, ImageBackground, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { useState, useRef, useState, useEffect } from 'react';
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


//different titles for the 
const wordJumpstart = "Use this word for inspiration:";
const pictureJumpstart = "Use this picture for inspiration:";


const dummyImage = require('./assets/JumpstartDummyImage.png');
const downArrow = require('./assets/downArrow.png');
const upArrow = require('./assets/Vector3.png');

const wordMode = (
<Text style={styles.wordJumpstart}>
    SILLY
</Text>
);

const pictureMode = (
    <Image source={dummyImage} style={styles.jumpstartImage}/>
);

const downMode = (
    <View></View>
);
const upMode = (
    <View></View>
);

//different background colors for the jumpstart
const blue = '#359fab';
const black = '#1a1e21';

let modeNumber = 0;
let up = false;


// export default function HomePage({navigation}) {
    {/* mode
    *  0 = word
    *  1 = audio
    *  2 = picture
    */}
    const [mode, setMode] = useState(wordMode);
    const [modeTitle, setModeTitle] = useState(wordJumpstart);
    const [color, setColor] = useState(blue);
    const [image, setImage] = useState(upArrow);
    const moveAnim = useRef(new Animated.Value(0)).current;
    const fadeAnim = useRef(new Animated.Value(1)).current;

    //changing the modes to either word or picture
    const changeMode = () => {
        modeNumber = (modeNumber + 1) % 2;
        switch(modeNumber) {
            case 0:
                setMode(wordMode);
                setModeTitle(wordJumpstart);
                break;
            case 1:
                setMode(pictureMode);
                setModeTitle(pictureJumpstart);
                break;
        }
    };

    //changing the color and the position of the jumpstart
    const shift = () => {
        if (up) {
            Animated.parallel([
                Animated.timing(moveAnim, {
                    toValue: 0,
                    duration: 800,
                    useNativeDriver: true,
                }),
                Animated.timing(fadeAnim, {
                    toValue: 1,
                    duration: 800,
                    useNativeDriver: true,
                })
            ]).start(() => {
                setColor(blue);
                setImage(upArrow);
            });
        }
        else {
            setColor(black);
            Animated.parallel([
                Animated.timing(moveAnim, {
                    toValue: -400,
                    duration: 800,
                    useNativeDriver: true,
                }),
                Animated.timing(fadeAnim, {
                    toValue: 0,
                    duration: 800,
                    useNativeDriver: true,
                })
            ]).start(() => {
                setImage(downArrow);
            });
        }
        
        up = !up;
    };




    // is originally a SafeAreaView
    return (
        // <SafeAreaView style={{ backgroundColor: "#"}} contentContainerStyle={styles.container}>
        <SafeAreaView style={styles.container}>
            <View style={styles.welcome}>
                <View style={styles.horizontal}>
                    <View>
                      <Text style={styles.welcometext1}>Welcome, {userInfo ? userInfo.firstName : null} 👋</Text>
                      <Text style={styles.welcometext2}>What inspires you today?</Text>
                    </View>
                    <Image style={styles.pic} source={require('./assets/profilePic.png')}/>
                </View>
                {/* <span role="img" aria-label="wave">👋</span> */}
            </View>

            
            <View style={styles.exercises}>
                <Image style={styles.exerciseimg} source={require('./assets/exerciseImage.png')}/>
                <Text style={styles.rating}>5.0 ⭐</Text>
                <View style={styles.horizontal2}>
                    <Text style={styles.exercisestext1}>{month}</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Monthly Exercises', {arrId: -1})}>
                      <Text style={styles.exercisesbutton}>unlock</Text>
                  </TouchableOpacity>
                </View>
            </View>
            
            <View style={styles.tip}>
                <Image style={styles.tipbox} source={require('./assets/icon.png')}/>
                <View style={styles.tipimagecontainer} >
                    <ImageBackground style={styles.tipimage} source={require('./assets/speech-bubble.png')}>
                        <Text style={styles.tiptext}>Listening to music is a great way to set the mood for writing 🎼</Text>
                    </ImageBackground>
                </View>
            </View>


            {/* 
            * onPress = {() => navigation.navigate('JumpstartPage')}
            *  use the above if we decide to change pages on the button press
             */}
            <Animated.View style={[styles.jumpstart, 
                {
                    backgroundColor: color,
                    transform: [{translateY: moveAnim}]
                },
            ]}>
                <TouchableOpacity style={styles.jumpstartbutton} onPress={shift}>
                    <Image style={styles.jumpstartarrow} source={image}/>
                </TouchableOpacity>
                <Animated.Text style={[styles.jumpstarttext,
                    {
                        opacity: fadeAnim,
                    },
                ]}>
                jumpstart your writing
                </Animated.Text>

                <Text style={styles.todaysJumpstart}>
                    Today's Jumpstart
                </Text>

                <View style={styles.jumpstartView}>
                    <Text style={styles.jumpstartTitle}>
                        {modeTitle}
                    </Text>
                    <br></br>
                    {mode}
                </View>

                <TouchableOpacity style={styles.completeButton} onPress={changeMode}>
                    <Text style={styles.completeText}>
                        complete
                    </Text>
                </TouchableOpacity>
            </Animated.View>
        </SafeAreaView >
  )
}