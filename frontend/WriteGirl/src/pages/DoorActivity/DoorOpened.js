import {styles} from './Style'
import {Text, View, SafeAreaView, TouchableOpacity} from 'react-native';

export default function DoorOpened({navigation}) {

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.page}>
                <View style = {styles.openDiv}>
                {/* Back arrow */}
                <TouchableOpacity style={styles.backArrow}>
                    <Text style={styles.backText}>←</Text>
                </TouchableOpacity>
                
                    <View style={styles.openDoor}>
                        <Text style = {styles.openText}>Door Opened!</Text>
                        <Text style = {styles.prompt}>Write a story about the door opening!</Text>
                        <TouchableOpacity style={styles.interactive}>
                            <Text style={styles.intText}>see exhibits</Text>
                        </TouchableOpacity>
                    </View>
                    {/* Complete Button */}
                    <TouchableOpacity style={styles.compButton}>
                        <Text style={styles.compText}>complete</Text>
                    </TouchableOpacity>

                </View>   
            </View>
        </SafeAreaView>
    )
}