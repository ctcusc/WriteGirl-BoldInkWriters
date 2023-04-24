
import React from 'react';
// import './ProfilePage.css';
import styles from './ProfilePageStyles.js';
import { View, Text, TouchableOpacity, ToastAndroid , StyleSheet, Dimensions, Image, ScrollView} from 'react-native';
import { useState, useEffect } from 'react';
import { auth } from "../../../firebaseConfig";


export default function ProfilePage({ navigation }) {
    // const handleWriteGirlPress = () => {
    //     ToastAndroid.show('Welcome to your profile page! Click on the dates to explore your previous writing prompts!', ToastAndroid.SHORT);
    //   };

    //get user data
    const[userInfo, setUserInfo] = useState();
    const[userToken, setUserToken] = useState("");
    const [userLocation, setUserLocation] = useState("");

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
              // console.log(data)
              return data
          })
          .then((data) => {
            let loc = "";
            if(data.city && data.state) { loc = data.city + ", " + data.state }
            else if(data.city && data.country) { loc = data.city + ", " + data.country }
            else if(data.state && data.country) { loc = data.state + ", " + data.country }
            else { loc = data.country }
            setUserLocation(loc)
            return;
          })
        } catch (err) {
          console.log("ProfilePage.js:onAuthStateChanged", err)
        }
      }
    }, [userToken])

      const DateGrid = ({ activities }) => {
        return (
          <TouchableOpacity onPress={() => {
            navigation.navigate('Past Monthly Exercise')
          }}
          style={styles.gridContainer}>
            {/* map through the activities and create a grid item for each */}
            {activities.map((activity, index) => (
              <View style={styles.item} key={index}>
                <View style={styles.dateContainer}>
                  <Text style={styles.day}>{activity.day}</Text>
                  <Text style={styles.monthYear}>{activity.month} {activity.year}</Text>
                </View>
              </View>
            ))}
          </TouchableOpacity>
        );
      };
      function completeFilter(item) {
        if (item.completed) {
          return true;
        }
        return false;
      }
      function incompleteFilter(item) {
        if (item.completed) {
          return false;
        }
        return true;
      }
      const activities = [
        { day: 1, month: 'Jan', year: 2023, prompt: 'Activity 1', completed: false },
        { day: 10, month: 'Jan', year: 2023, prompt: 'Activity 3', completed: true },
        { day: 14, month: 'Jan', year: 2023, prompt: 'Activity 4', completed: true },
        { day: 20, month: 'Jan', year: 2023, prompt: 'Activity 5', completed: false },
        { day: 25, month: 'Jan', year: 2023, prompt: 'Activity 6', completed: false },
        ];
    
    
      return (
        <ScrollView>
          <View style = {styles.container}>
            <View style={styles.internalContainer}>
                <Text style={styles.bigText}>{userInfo ? (userInfo.firstName + " " + userInfo.lastName) : null}</Text>
                {/* <Text style={styles.smallText}>she/her</Text> */}
                <Text style={styles.medText}>email: {userInfo ? userInfo.email : null}</Text>
                <Text style={styles.medText}>location: {userLocation}</Text>
                <TouchableOpacity 
                  onPress={() => {
                    navigation.navigate('About Us Page')
                  }} 
                  style={{ backgroundColor: '#C5DA01', borderRadius: 10, padding: 15, marginTop: 10 }}
                >
                <Text style={{ color: '#0D4D5E', fontSize: 16}}>What is WriteGirl?</Text>
                </TouchableOpacity>
                <Image source={require('./needhelp.png')} style={{ width: 200, height: 240, paddingTop: 10 }} />
            </View>
          </View>

          <Text style={styles.headerText}>In progress</Text>
          <View>
              <DateGrid activities={activities.filter(incompleteFilter)}/>
          </View>
          <Text style={styles.headerText}>Completed</Text>
          <View>
              <DateGrid activities={activities.filter(completeFilter) }/>
          </View>
        </ScrollView>
      );
}