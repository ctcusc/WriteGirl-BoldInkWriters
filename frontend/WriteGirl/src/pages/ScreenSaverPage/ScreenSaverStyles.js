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
        paddingTop: '10%',
        paddingBottom: '5%',
    },

    cardContainer: {
        // height: height/4,
        height: 'auto',
        // borderWidth: 2, 
        borderColor: '#000',
        borderRadius: 15,
        // padding: '2vh',
    },

    promptText: {
        fontSize: 20,
        paddingBottom: 8,
        textAlign: 'center',
    },

    img: {
        maxWidth: width*0.8,
        height: height*0.4,
        resizeMode: 'cover',
        borderRadius: 15,
        borderWidth: 2, 
        borderColor: '#000',
        borderRadius: 15,
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

    timerPicker: {
        flex: 1,
        flexDirection: 'row',
    },

    timerText: {
        // fontSize: height/20,
        fontSize: 30,
        color: '#000',
        alignSelf: 'center',
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
        fontSize: height/8,
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: height/10,
    }, 

    screensaverPrompt: {
        fontSize: height/40,
        textAlign: 'center',
        color: 'white',
        marginTop: '10',
        fontWeight: 'bold',
    },

});

export { styles };