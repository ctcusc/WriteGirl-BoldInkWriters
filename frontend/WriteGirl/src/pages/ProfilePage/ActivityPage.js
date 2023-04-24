import {styles} from './Style'
import {Text, View, SafeAreaView, TouchableOpacity} from 'react-native';

export default function ActivityPage({ route }) {
    const { activity } = route.params;
    

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.page}>
                <View style = {styles.openDiv}>
                {/* Back arrow */}
                <TouchableOpacity style={styles.backArrow}>
                    <Text style={styles.backText}>←</Text>
                </TouchableOpacity>
                
                    <View style={styles.openDoor}>
                        <Text style = {styles.openText}>{activity.month} {activity.year} </Text>
                        <Text style = {styles.prompt}>{activity.prompt}</Text>
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
