import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');


const styles = StyleSheet.create({

    container: {
        // backgroundColor: '#FFF',
        // padding: 40,
        display: 'flex',
    }, 

    contentContainer: {
        padding: 40,
    },  

    title: {
        fontSize: 35,
        marginTop: 30,
        marginBottom: 20,
        color: "#0D4D5E",
        fontWeight: 500,
    },

    label: {
        color: '#0D4D5E',
        fontSize: 20,
        // fontWeight:
        // fontFamily: 'DroidSans'
    },

    input: {
        backgroundColor: '#FFFFFF',
        borderColor: '#000',
        borderWidth: 2,
        fontSize: 20,
        height: 60,
        padding: 10,
        marginTop: 5,
        marginBottom: 25,
        borderRadius: 10
    },

    button: {
        backgroundColor: '#49A5AD',
        height: 'auto',
        width: '100%',
        padding: 10,
        marginVertical: 20,
        marginBottom: 30,
        borderRadius: 30,
    },

    buttonLabel: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
    },

    buttonWrapper: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        marginBottom: 30,
    },

    alertContainer: {
        backgroundColor: '#FFF',
        height: 'auto',
    },

    alertModal: {
        height: 'auto',
    },

    alertView: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '100%',
        height: 'auto',
        backgroundColor: '#688175',
    },

    closeButton: {
        backgroundColor: '#688175',
        height: 'auto',
        width: 'auto',
        marginTop: 10,
        marginRight: 20,
        alignSelf: 'flex-end',
    },

    closeText: {
        color: 'white',
        fontSize: 20,
    },

    messageContainer: {
        paddingBottom: 20,
        paddingLeft: '3%',
        paddingRight: '3%',
    },

    // errorText: {
    //     color: 'black',
    //     fontSize: 20,
    // },

    // successText: {
    //     color: 'white',
    //     fontSize: 20,
    //     alignSelf: 'center',
    // },

    errorToast: {
        backgroundColor: '#FFA1A1', //tan background: F0EBE8
        padding: 10,
        width: 'auto',
        color: '#000',
        // borderWidth: 2,
        // borderColor: '#000',
        borderRadius: 10, 
    },

    successToast: {
        backgroundColor: '#C5DA01', //tan background: F0EBE8
        padding: 10,
        width: 'auto',
        color: '#000',
        // borderWidth: 2,
        // borderColor: '#000',
        borderRadius: 10, 
    },

    backImage: {
        resizeMode: 'contain',
        width: "100%",
        height: "100%",
    },

    backButton: {
        width: 40,
        height: 50,
        // marginRight: "85%",
        marginTop: 15,
        marginLeft: 0
        // marginBottom: "%",
        // position: "absolute",
    },

});

export { styles };
