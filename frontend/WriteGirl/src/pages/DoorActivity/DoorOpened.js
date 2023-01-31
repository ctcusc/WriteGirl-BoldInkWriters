import {styles} from './dastyle'
import {Text, View, SafeAreaView, TouchableOpacity} from 'react-native';

export default function DoorOpened() {

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.page}>
                <View style = {styles.openDiv}>
                    <View style={styles.openDoor}>
                        <Text style = {styles.openText}>Door Opened!</Text>
                        <Text style = {styles.prompt}>Write a story about the door opening!</Text>
                        <TouchableOpacity style={styles.interactive}>
                            <Text style={styles.intText}>see exhibits</Text>
                        </TouchableOpacity>
                    </View>
                    {/* Complete Button */}
                    <TouchableOpacity style={styles.compButton}>
                        <Text style={styles.compText}>Complete</Text>
                    </TouchableOpacity>

                </View>   
            </View>
        </SafeAreaView>
    )
}