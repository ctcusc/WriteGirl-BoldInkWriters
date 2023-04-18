
import React from 'react';
import './ProfilePage.css';
import { View, Text, TouchableOpacity, ToastAndroid , StyleSheet, Dimensions, Image} from 'react-native';
export default function ProfilePage() {
    const handleWriteGirlPress = () => {
        ToastAndroid.show('Welcome to your profile page! Click on the dates to explore your previous writing prompts!', ToastAndroid.SHORT);
      };
      const DateGrid = ({ activities }) => {
        return (
          <View style={styles.gridContainer}>
            {/* map through the activities and create a grid item for each */}
            {activities.map((activity, index) => (
              <View style={styles.item} key={index}>
                <View style={styles.dateContainer}>
                  <Text style={styles.day}>{activity.day}</Text>
                  <Text style={styles.monthYear}>{activity.month} {activity.year}</Text>
                </View>
              </View>
            ))}
          </View>
        );
      };
      const activities = [
        { day: 1, month: 'Jan', year: 2023, prompt: 'Activity 1', completed: false },
        { day: 5, month: 'Jan', year: 2023, prompt: 'Activity 2', completed: false },
        { day: 10, month: 'Jan', year: 2023, prompt: 'Activity 3', completed: true },
        { day: 14, month: 'Jan', year: 2023, prompt: 'Activity 4', completed: true },
        { day: 20, month: 'Jan', year: 2023, prompt: 'Activity 5', completed: false },
        { day: 25, month: 'Jan', year: 2023, prompt: 'Activity 6', completed: false },
        ];
    
      return (
        <View style =  {styles.container}>
            <View style={styles.internalContainer}>
                <Text style={styles.bigText}>Jane Doe</Text>
                <Text style={styles.smallText}>she/her</Text>
                <Text style={styles.medText}>email: jane.doe@example.com</Text>
                <Text style={styles.medText}>location: los angeles, california</Text>
                <TouchableOpacity onPress={handleWriteGirlPress} style={{ backgroundColor: '#C5DA01', borderRadius: 10, padding: 10, marginTop: 10 }}>
                <Text style={{ color: '#0D4D5E', fontSize: 16}}>what is WriteGirl?</Text>
                </TouchableOpacity>
                <Image source={require('./needhelp.png')} style={{ width: 200, height: 200 }} />
            


            
            
            </View>

            <View>
                <DateGrid activities={activities}/>
            </View>
        </View>
        // <View style={{ flex: 1 }}>
        // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        //     <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Jane Doe</Text>
        //     <Text style={{ fontSize: 16 }}>she/her</Text>
        //     <Text style={{ fontSize: 16 }}>jane.doe@example.com</Text>
        //     <Text style={{ fontSize: 16 }}>Los Angeles, CA</Text>
        //     <TouchableOpacity onPress={handleWriteGirlPress} style={{ backgroundColor: 'green', borderRadius: 10, padding: 10, marginTop: 10 }}>
        //     <Text style={{ color: 'white', fontSize: 16 }}>What is WriteGirl?</Text>
        //     </TouchableOpacity>
        //     <View style={{ backgroundColor: 'white', height: 10, width: '80%', marginTop: 10 }}></View>
        // </View>
        // <View style={{ flex: 1 }}>
        //     {/* Bottom half with In Progress and Completed sections */}
        // </View>
        // </View>

        // <div classname = "userContent">
        //     <label classname = "userName">Jane Doe</label>
        //     <label classname = "userPronouns">email: janedoe@gmail.com</label>
        //     <label classname = "userLocation">los angeles, california</label>
        //     <button>what is WriteGirl?</button>
        // </div>
        
      );

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#359FAB',
      alignItems: 'center',
      justifyContent: 'center',
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      borderColor: 'black',
      flex: 0.5,
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
    gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
      },
      item: {
        width: '32%',
        aspectRatio: 1,
        borderRadius: 10,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
      },
      dateContainer: {
        justifyContent: 'center',
        alignItems: 'center',
      },
      day: {
        fontSize: 24,
        fontWeight: 'bold',
      },
      monthYear: {
        fontSize: 12,
      },
  });



// return (
//     <View style={{ flex: 1 }}>
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Jane Doe</Text>
//         <Text style={{ fontSize: 16 }}>she/her</Text>
//         <Text style={{ fontSize: 16 }}>jane.doe@example.com</Text>
//         <Text style={{ fontSize: 16 }}>Los Angeles, CA</Text>
//         <TouchableOpacity onPress={handleWriteGirlPress} style={{ backgroundColor: 'green', borderRadius: 10, padding: 10, marginTop: 10 }}>
//           <Text style={{ color: 'white', fontSize: 16 }}>What is WriteGirl?</Text>
//         </TouchableOpacity>
//         <View style={{ backgroundColor: 'white', height: 10, width: '80%', marginTop: 10 }}></View>
//       </View>
//       <View style={{ flex: 1 }}>
//         {/* Bottom half with In Progress and Completed sections */}
//       </View>
//     </View>
//   );

// const ProfilePage = () => {
//   const handleWriteGirlPress = () => {
//     ToastAndroid.show('Welcome to your profile page! Click on the dates to explore your previous writing prompts!', ToastAndroid.SHORT);
//   };

//   return (
//     <View style={{ flex: 1 }}>
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Jane Doe</Text>
//         <Text style={{ fontSize: 16 }}>she/her</Text>
//         <Text style={{ fontSize: 16 }}>jane.doe@example.com</Text>
//         <Text style={{ fontSize: 16 }}>Los Angeles, CA</Text>
//         <TouchableOpacity onPress={handleWriteGirlPress} style={{ backgroundColor: 'green', borderRadius: 10, padding: 10, marginTop: 10 }}>
//           <Text style={{ color: 'white', fontSize: 16 }}>What is WriteGirl?</Text>
//         </TouchableOpacity>
//         <View style={{ backgroundColor: 'white', height: 10, width: '80%', marginTop: 10 }}></View>
//       </View>
//       <View style={{ flex: 1 }}>
//         {/* Bottom half with In Progress and Completed sections */}
//       </View>
//     </View>
//   );
// };

// export default ProfilePage({navigation});
