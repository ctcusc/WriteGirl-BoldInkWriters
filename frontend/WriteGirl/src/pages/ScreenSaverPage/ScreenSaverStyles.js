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
        fontSize: '20%',
        textAlign: 'center',
        paddingTop: '1%',
        paddingBottom: '3%',
        width: '70%',
        alignSelf: 'center',
    },

    cardContainer: {
        // height: height/4,
        height: 'auto',
        // borderWidth: 2, 
        borderColor: '#000',
        borderRadius: 15,
    },

    promptText: {
        fontSize: '12%',
        paddingBottom: '1%',
        textAlign: 'center',
    },

    img: {
        maxWidth: width*0.8,
        height: height*0.35,
        resizeMode: 'cover',
        borderRadius: 15,
        borderWidth: 2, 
        borderColor: '#000',
        borderRadius: 15,
    },

    timerContainer: {
        // marginTop: height / 20,
        backgroundColor: '#FAFAFA',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: height,
        flex: 1,
        justifyContent: 'flex-end',
        bottom: 0,
        // paddingTop: 3,
        marginTop: '3%',
        paddingBottom: height/6,
    },

    timerPicker: {
        flex: 1,
        flexDirection: 'row',
        marginTop: '5%',
    },

    // timerText: {
    //     // fontSize: 'auto',
    //     width: '80%',
    //     fontSize: '5%',
    //     color: '#000',
    //     alignSelf: 'center',
    // },

    button: {
        backgroundColor: '#0D4D5E',
        height: 'auto',
        width: '60%',
        padding: 10,
        // marginVertical: 20,
        // marginBottom: '5%',
        borderRadius: 30,
        alignSelf: 'center',
    },

    buttonLabel: {
        color: 'white',
        fontSize: '10%',
        textAlign: 'center',
    },

    setupToast: {
        backgroundColor: '#FFA1A1', //tan background: F0EBE8
        padding: 10,
        width: 'auto',
        color: '#000',
        borderRadius: 10, 
    },


    // ------------------ SCREEN SAVER PAGE STYLES ------------------ //
    screensaverContainer: {
        flex: 1,
    },
    
    screensaverBg: {
        flex: 1,
        opacity: 0.7,
    },

    arrContainer: {
        // paddingLeft: '2%',
        paddingTop: '2%',
    },

    backArrow: {
        // height: '100%',
        width: '10%',
        marginLeft: '3%',
        resizeMode: 'cover',
    },  

    timeText: {
        color: 'white',
        fontSize: '70%',
        textAlign: 'center',
        // fontWeight: 'bold',
        marginTop: '2%',
    }, 

    // timeUpText: {
    //     color: 'white',
    //     backgroundColor: 'red',
    //     fontSize: '50%',
    //     textAlign: 'center',
    //     fontWeight: 'bold',
    //     marginTop: '5%',
    // }, 

    screensaverPrompt: {
        fontSize: '15%',
        textAlign: 'center',
        color: 'white',
        // marginTop: '1%',
        // fontWeight: 'bold',
    },

    timeUpToast: {
        backgroundColor: '#FFA1A1', //tan background: F0EBE8
        padding: 10,
        width: 'auto',
        color: '#000',
        borderRadius: 10, 
    },

});

export { styles };