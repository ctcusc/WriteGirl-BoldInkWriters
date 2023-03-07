import { Text, View, ImageBackground, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { styles } from "./HomePageStyles.js";

export default function HomePage() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.welcome}>
                <Text style={styles.welcometext1}>Welcome, Jane</Text>
                <Text style={styles.welcometext2}>What inspires you today?</Text>
            </View>

            
            <View style={styles.exercises}>
                <Text style={styles.exercisestext1}>November</Text>
                <Text style={styles.exercisestext2}>Imagine you are walking through the forest</Text>
                <TouchableOpacity onPress={() => navigation.navigate('ExercisesPage')}>
                    <Text style={styles.exercisesbutton}>unlock</Text>
                </TouchableOpacity>
            </View>
            
            <View style={styles.tip}>
                <Text style={styles.tipbox}></Text>
                <View style={styles.tipimagecontainer} >
                    <ImageBackground style={styles.tipimage} source={require('./speech-bubble.png')}>
                        <Text style={styles.tiptext}>Listening to music is a great way to set the mood for writing</Text>
                    </ImageBackground>
                </View>
            </View>

            <View style={styles.jumpstart}>
                <TouchableOpacity style={styles.jumpstartbutton} onPress={() => navigation.navigate('JumpstartPage')}>
                    <Image style={styles.jumpstartarrow} source={require('./Vector3.png')}/>
                </TouchableOpacity>
                <Text style={styles.jumpstarttext}>jumpstart your writing</Text>
            </View>
        </SafeAreaView>
    )
}