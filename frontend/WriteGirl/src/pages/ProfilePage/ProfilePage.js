
import React from 'react';
import './ProfilePage.css';
import { View, Text, Button, TouchableWithoutFeedback, TouchableOpacity, ToastAndroid , StyleSheet, Dimensions, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
export default function ProfilePage() {
    const navigation = useNavigation();
    const handleWriteGirlPress = () => {
        ToastAndroid.show('Welcome to your profile page! Click on the dates to explore your previous writing prompts!', ToastAndroid.SHORT);
      };
      const activitytest = { day: 25, month: 'Jan', year: 2023, prompt: 'Activity 6', completed: false };
      function handleButtonPress() {
        navigation.navigate('ActivityPage', {activitytest});
      }
      const DateGrid = ({ activities }) => {
        return (
          <View style={styles.gridContainer}>
            {/* map through the activities and create a grid item for each */}
            {activities.map((activity, index) => (
              <View style={styles.item} key={index}>
                  <TouchableWithoutFeedback onPress={ handleButtonPress }>
                <View style={styles.dateContainer}>
                  <Text style={styles.day}>{activity.day}</Text>
                  <Text style={styles.monthYear}>{activity.month} {activity.year}</Text>
                </View>
                </TouchableWithoutFeedback>
              </View>
            ))}
          </View>
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
        <>
        <View style =  {styles.container}>
            <View style={styles.internalContainer}>
                <Text style={styles.bigText}>Jane Doe</Text>
                <Text style={styles.smallText}>she/her</Text>
                <Text style={styles.medText}>email: jane.doe@example.com</Text>
                <Text style={styles.medText}>location: los angeles, california</Text>
                <TouchableOpacity onPress={handleWriteGirlPress} style={{ backgroundColor: '#C5DA01', borderRadius: 10, padding: 15, marginTop: 10 }}>
                <Text style={{ color: '#0D4D5E', fontSize: 16}}>what is WriteGirl?</Text>
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
        </>
      );



}

const styles = StyleSheet.create({
    container: {
    //   flex: 1,
      backgroundColor: '#359FAB',
      alignItems: 'center',
      justifyContent: 'center',
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      borderColor: 'black',
      paddingTop: 70,
      paddingBottom: 40,

    //   flex: 0.5, 
    },
    bottomContainer: {
        flex: 1,
        backgroundColor: '#F0EBE8',
        alignItems: 'left',
        justifyContent: 'left',

      },
    bigText: {
        fontFamily: 'sans-serif',
        fontSize: 30, 
        fontWeight: 'bold',
        color: 'white',
        // textAlign: center,
    },
    smallText: {
        fontFamily: 'sans-serif',
        fontSize: 16, 
        fontWeight: 'bold',
        color: 'white',
        // textAlign: center,
    },
    medText: {
        fontFamily: 'sans-serif',
        fontSize: 18, 
        fontWeight: 'bold',
        color: 'white',
    },
    headerText:{
        color: '#0D4D5E', 
        fontSize: 28,
        paddingLeft: 40,
        paddingTop: 10,
    },
    gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'start',
        paddingHorizontal: 20,
        padding: 20,
      },
      item: {
        width: '27%',
        aspectRatio: 1,
        borderRadius: 25,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        // marginBottom: 10,
        marginLeft: 30,
        marginTop: 10,
      },
      dateContainer: {
        justifyContent: 'left',
        alignItems: 'left',
      },
      day: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#0D4D5E', 
        // textAlign: center,
      },
      monthYear: {
        fontSize: 20,
        color: '#0D4D5E', 
      },

  });

