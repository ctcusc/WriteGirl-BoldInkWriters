import { Text, View, Button, StyleSheet, SafeAreaView } from 'react-native';

export default function HomePage() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.welcome}>
                <View style={styles.horizontal}>
                    <Text style={styles.welcometext1}>Welcome, Name</Text>
                    <Text style={styles.welcomebox}></Text>
                </View>
                <Text style={styles.welcometext2}>What inspires you today?</Text>
            </View>

            <View style={styles.tip}>
                <Text style={styles.text}>View weekly tip</Text>
            </View>

            <View style={styles.exercises}>
                <Text style={styles.text}>Monthly Exercises</Text>
            </View>

            <View style={styles.jumpstart}>
                <View style={styles.xbutton}>
                    <Button color="black" title="X"/>
                </View>
                <Text style={styles.text}>View Daily Jumpstart</Text>
                <View style={styles.openbutton}>
                    <Button color="black" title="open"/>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      marginTop: 80,
      marginLeft: 40,
      marginRight:40,
      marginBottom: 80,
      flex:1,
      justifyContent:'space-between'
    },
    welcome: {
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    welcomebox: {
        borderWidth: 2,
        width: 40,
        height: 45
    },
    welcometext1: {
        fontSize: 20
    },
    welcometext2: {
        paddingTop: 15,
        fontSize: 25
    },
    title: {
        textAlign: 'center'
    },
    tip: {
        borderWidth: 2,
        height: '22%',
        justifyContent: 'center'
    },
    exercises: {
        borderWidth: 2,
        height: '32%',
        justifyContent: 'center'
    },
    jumpstart: {
        marginLeft: -40,
        marginRight: -40,
        borderWidth: 2,
        height: '22%',
    },
    xbutton: {
        alignSelf: 'flex-end',
        marginRight: 10,
        marginTop: 5
    },
    openbutton: {
        paddingLeft: 30,
        paddingRight: 30,
        marginTop: 20,
        alignSelf: 'center',
        borderWidth: 2
    },
    text: {
        alignSelf: 'center',
        fontSize: 20
    }

  });