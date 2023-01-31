import {styles} from './dastyle'
import {Text, View, SafeAreaView, TouchableOpacity} from 'react-native';

export default function DoorOpened() {

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.page} >
                <View style = {styles.openDiv}>
                    <TouchableOpacity style={styles.openDoor}>
                        <Text style = {styles.openText}>Door Opened!</Text> 
                    </TouchableOpacity>
                </View>   
            </View>
        </SafeAreaView>
    )
}