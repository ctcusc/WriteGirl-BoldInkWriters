import { ScrollView, Animated, Text, View, ImageBackground, Image, TouchableOpacity, SafeAreaView, Modal } from 'react-native';
import { useState, useRef, useEffect } from 'react';
import { styles } from "./HomePageStyles.js";
import { auth } from "../../../firebaseConfig";


export default function HomePage({navigation, route}) {
  const[userInfo, setUserInfo] = useState();
  const[userToken, setUserToken] = useState("");
//   const[month, setMonth] = useState("")

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




// ****** JUMPSTART CODE *******
const [jumpstartData, setJumpstartData] = useState()

const dummyImage = require('./assets/JumpstartDummyImage.png');
const downArrow = require('./assets/downArrow.png');
const upArrow = require('./assets/Vector3.png');



const downMode = (
    <View></View>
);
const upMode = (
    <View></View>
);

//different background colors for the jumpstart
const blue = '#359fab';
const black = '#1a1e21';

let up = false;


    {/* mode
    *  0 = word
    *  1 = audio
    *  2 = picture
    *  3 = video
    */}
    const [mode, setMode] = useState(); // populate with type of media variable
    const [color, setColor] = useState(blue);
    const [image, setImage] = useState(upArrow);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const moveAnim = useRef(new Animated.Value(0)).current;
    const fadeAnim = useRef(new Animated.Value(1)).current;
    const appearAnim = useRef(new Animated.Value(0)).current;

    // for fetches from backend
    const [name, setName] = useState(0);
    const [month, setMonth] = useState(0);
    const [tip, setTip] = useState(0);

    // render data based on type of mode
    const renderMode = () => {
      if(mode === 0) { //word
        return(
          <Text style={styles.wordJumpstart}>
              {jumpstartData ? jumpstartData.textOnlyPrompt : "SILLY"}
          </Text>
        )
      } else if(mode === 1) { //audio
        return(
          <View></View>
        )
      } else if(mode === 2) { //picture
        return(
          <Image source={jumpstartData ? jumpstartData.media[0].url : dummyImage} style={styles.jumpstartImage}/>
        )
      } else if(mode === 3) { //video
        return(
          <View></View>
        )
      } else { return; }
    }

    // set the mode
    useEffect(() => {
      if(jumpstartData) {
        //setting media mode type
        if(jumpstartData.mediaType === "Word") { setMode(0); }
        else if(jumpstartData.mediaType === "Audio") { setMode(1); }
        else if(jumpstartData.mediaType === "Picture") { setMode(2); }
        else if(jumpstartData.mediaType === "Video") { setMode(3); }
      }
    }, [jumpstartData])


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
                }),
                Animated.timing(appearAnim, {
                    toValue: 0,
                    duration: 800,
                    useNativeDriver: true,
                })
            ]).start(() => {
                setIsModalVisible(false);
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
                }),
                Animated.timing(appearAnim, {
                    toValue: 1,
                    duration: 800,
                    useNativeDriver: true,
                })
            ]).start(() => {
                setIsModalVisible(true);
                setImage(downArrow);
            });
        }
        
        up = !up;
    };



    // open jumpstart and call airtable API
    const openJumpstart = async() => {
      try {
        shift();

        if(!jumpstartData) { //fetch data from airtable
          const response = await fetch("http://localhost:8000/api/jumpstart/", {
              method: 'GET',
              headers: {'Content-Type': 'application/json'}
          })
          const response_data = await response.json();
          setJumpstartData(response_data)

          console.log(response_data)
        }


        // shift; //animate jumpstart up
        return;
      } catch (err) {
        console.log("HomePage.js:openJumpstart error", err);
        return;
      }
    }



    return (
        <View style={styles.backgroundView}>
            <SafeAreaView style={styles.container}>
                <View style={styles.welcome}>
                    <View style={styles.horizontal}>
                        <View>
                        <Text style={styles.welcometext1}>Welcome, {userInfo ? userInfo.firstName : null} 👋</Text>
                        <Text style={styles.welcometext2}>What inspires you today?</Text>
                        </View>
                        {/* <Image style={styles.pic} source={require('./assets/profilePic.png')}/> */}
                    </View>
                </View>

                
                <View style={styles.exercises}>
                    <Image style={styles.exerciseimg} source={require('./assets/exerciseImage.png')}/>
                    <Text style={styles.rating}>5.0 ⭐</Text>
                    {/* <Text style={styles.rating}>{rating} ⭐</Text> */}
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
                            {/* <Text style={styles.tiptext}>{tip}</Text> */}
                        </ImageBackground>
                    </View>
                </View>
            </SafeAreaView >
            


            {/* 
            * onPress = {() => navigation.navigate('JumpstartPage')}
            *  use the above if we decide to change pages on the button press
             */}
             {/* <Modal> */}
            {/* <SafeAreaView> */}
            <Animated.View style={[styles.jumpstart, 
                {
                    backgroundColor: color,
                    transform: [{translateY: moveAnim}]
                },
            ]}>
                <TouchableOpacity style={styles.jumpstartbutton} onPress={() => openJumpstart()}>
                    <Image style={styles.jumpstartarrow} source={image}/>
                </TouchableOpacity>
                <Animated.Text style={[styles.jumpstarttext,
                    {
                        opacity: fadeAnim,
                    },
                ]}>
                jumpstart your writing
                </Animated.Text>

                <Animated.Text style={[styles.todaysJumpstart,
                {
                    opacity: appearAnim,
                },
                    ]}>
                    Today's Jumpstart
                </Animated.Text>

                <Animated.View style={[styles.jumpstartView,
                {
                    opacity: appearAnim,
                },
                ]}>
                    <Text style={styles.jumpstartTitle}>
                        {/* {modeTitle} */}
                        {jumpstartData ? ("Use this " + jumpstartData.mediaType.toLowerCase() + " for inspiration.") : "JUMPSTART LOADING..."}
                    </Text>
                    <br></br>
                    {/* {mode} */}
                    {renderMode()}
                </Animated.View>

                <TouchableOpacity style={styles.completeButton} >

                    <Animated.Text style={[styles.completeText,
                    {
                        opacity: appearAnim,
                    },
                    ]}>
                        complete
                        </Animated.Text>
                </TouchableOpacity>
                </Animated.View>
            {/* </Animated.View> */}
            {/* </SafeAreaView > */}
            
        </View>
  )
}