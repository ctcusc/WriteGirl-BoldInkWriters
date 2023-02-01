import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#49A5AD',
        display: 'flex',
        paddingTop: 50,
        height: height,
    },

    backarrow: {
        height: 100,
        width: 'auto',
    },

    title: {
        color: '#FFF',
        fontSize: width / 12,
        textAlign: 'center',
        padding: '10%',
    },

    cardContainer: {
        // height: height/4,
        height: 'auto',
        borderWidth: 2, 
        borderColor: '#000',
        borderRadius: 15,
        backgroundColor: '#FFF',
        // padding: '2vh',
    },

    img: {
        maxWidth: width*0.8,
        height: height/3,
        // height: ,
        resizeMode: 'cover',
        marginTop: 3,
    },

    timerContainer: {
        // marginTop: height / 20,
        backgroundColor: '#FFF',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        height: height,
        flex: 1,
        justifyContent: 'flex-end',
        // bottom: 0,
    },

    timerText: {
        fontSize: height/20,
    },

    button: {
        backgroundColor: '#0D4D5E',
        height: 'auto',
        width: '60%',
        padding: 10,
        marginVertical: 20,
        marginBottom: 30,
        borderRadius: 30,
        alignSelf: 'center',
    },

    buttonLabel: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
    },


    // SCREEN SAVER PAGE STYLES
    screensaverContainer: {
        flex: 1,
    },
    
    screensaverBg: {
        flex: 1,
        opacity: 0.7,
    },

    timeText: {
        color: 'white',
        fontSize: height/10,
        alignSelf: 'center',
        fontWeight: 'bold',
        marginTop: height/12,
    }, 

    promptText: {
        color: 'white',
        fontSize: height/20,
        textAlign: 'center',
    },

});

export { styles };