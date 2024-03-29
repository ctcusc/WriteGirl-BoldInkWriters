import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#F0EBE8',
        display: 'flex',
        paddingTop: 50,
        height: height,
    },

    backarrow: {
        marginTop: 10,
        height: 100,
        width: 'auto',
    },

    title: {
        color: '#0D4D5E',
        fontSize: '30%',
        // fontWeight: 700,
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
        // borderTopLeftRadius: 30,
        // borderTopRightRadius: 30,
        borderRadius: 30,
        height: height,
        flex: 1,
        // justifyContent: 'flex-end',
        // paddingTop: 3,
        marginTop: '3%',
        paddingBottom: height/6,
    },

    timerPicker: {
        flex: 1,
        flexDirection: 'row',
        marginTop: '10%',
        marginBottom: '20%'
    },

    // timerText: {
    //     // fontSize: 'auto',
    //     width: '80%',
    //     fontSize: '5%',
    //     color: '#000',
    //     alignSelf: 'center',
    // },

    button: {
        backgroundColor: '#C5DA01',
        height: 'auto',
        // widthmi: '60%',
        // marginVertical: 20,
        // marginBottom: '5%',
        borderRadius: 30,
        alignSelf: 'center',
        marginTop: '10%'
    },

    buttonLabel: {
        color: '#0D4D5E',
        fontSize: '20%',
        textAlign: 'center',
        paddingHorizontal: 40,
        paddingVertical: 10
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

    // backArrow: {
    //     // height: '100%',
    //     width: '10%',
    //     marginLeft: '3%',
    //     resizeMode: 'contain',
    // },  

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
    backArrow:{
        // position: 'relative',
        // right: '45%',
        // bottom: '5%',
        marginLeft: "5%",
        width: "10%"
      },
    backText:{
        fontSize: 35,
        // fontWeight: 500,
        color: "#0D4D5E",
        // borderColor: '#F0EBE8',
        // backgroundColor: '#F0EBE8',
    }

});

export { styles };