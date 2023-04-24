import {styles} from '../DoorActivity/Style'
import {Text, View, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import { useState, useEffect } from 'react';
// import FastImage from 'react-native-fast-image';

export default function MonthlyExerciseOpened({navigation}) {
    const [showConfetti, setShowConfetti] = useState(false);

    const handleConfetti = () => {
        setShowConfetti(true);
        setTimeout(() => {
            setShowConfetti(false);
        }, 4000);
    }

    return(
        <SafeAreaView style={styles.container}>
            {showConfetti ? (
                <Image
                    style={{ width: '100%', height: '100%', position: 'absolute', zIndex: 999 }}
                    source={require('./croppedconfetti.gif')}
                />
            ) : null}
            <View style={styles.page}>
                <View style = {styles.openDiv}>
                {/* Back arrow */}
                <TouchableOpacity style={styles.backArrow} onPress={() => {
                    navigation.navigate('Home Tabs', { screen: 'Monthly Exercises' });
                }}>
                    <Text style={styles.backText}>←</Text>
                </TouchableOpacity>
                
                    <View style={styles.openDoor}>
                        <Text style = {styles.openText}>Monthly Exercises Opened!</Text>
                        <Text style = {styles.prompt}>Write a story about the door opening!</Text>
                        <TouchableOpacity style={styles.interactive}>
                            <Text style={styles.intText}>see exhibits</Text>
                        </TouchableOpacity>
                    </View>
                    {/* Complete Button */}
                    <TouchableOpacity style={styles.compButton} onPress={handleConfetti}>
                        <Text style={styles.compText}>complete</Text>
                    </TouchableOpacity>

                </View>   
            </View>
        </SafeAreaView>
    )
}