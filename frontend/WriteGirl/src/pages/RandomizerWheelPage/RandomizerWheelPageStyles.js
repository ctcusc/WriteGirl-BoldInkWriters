import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        height: '30%',
        backgroundColor: '#49A5AD',
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    headertext: {
        fontSize: '1.7rem',
        color: "#FFFFFF",
        paddingBottom: '35%',
        fontFamily: 'DroidSansBold'
    },

    wheelcontainer: {
        height: '50%',
        marginLeft: '5%',
        marginRight: '5%',
        alignItems: 'center',
        marginTop: '-25%'
    },
    wheelbody: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        // width: 330,
        // height: 346.46,
        position: 'absolute'
    },
    wheeltop: {
        width: '12%',
        height: '17%',
        resizeMode: 'contain',
        // width: 40,
        // height: 55,
        zIndex: 5,
        position: 'absolute',
        marginTop: -30,
    },
    wheel: {
        width: '97.403%',
        height: '95%',
        resizeMode: 'contain',
        // height: 321.43,
        // width: 321.43,
        // marginTop: 3
    },

    button: {
        backgroundColor: '#49A5AD',
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 20,
        textAlign: 'center',
        marginLeft: '5%',
        marginRight: '5%',
        marginTop: '10%',
    },
    buttontext: {
        color: '#FFFFFF',
        fontSize: 25,
        textAlign: 'center',
        fontFamily: 'DroidSans'
    },

    wordcontainer: {
        height: '10%',
        paddingLeft: '20%',
        paddingRight: '20%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relataive'
    },
    arrowleft: {
        width: '50%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        marginLeft: '-40%'
    },
    arrowright: {
        width: '50%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        marginRight: '-40%'
    },
    arrowimg: {
        width: '50%',
        height: '50%',
        resizeMode: 'contain'
    },
    wordtext: {
        color: '#0D4D5E',
        fontSize: 20,
        fontFamily: 'DroidSans'
    },

    modalcontainer: {
        backgroundColor: '#FFFFFF',
        flex: 1,
        width: '80%',
        marginTop: '40%',
        marginBottom: '50%',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 6,
        elevation: 5
    },
    modalcontent: {
        height: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderRadius: 2,
        borderColor: '#000'
    },
    modaltext: {
        color: '#0D4D5E',
        fontSize: 20,
        fontFamily: 'DroidSans'
    },
    closebutton: {
        color: '#0D4D5E',
        backgroundColor: '#C5DA01',
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 5,
        paddingBottom: 5,
        borderRadius: 20,
        textAlign: 'center',
        marginTop: '5%',
        shadowRadius: 5,
        shadowColor: '#E1E0DE',
        shadowOpacity: 1,
        shadowOffset: {width: 0, height: 4},
        fontSize: 25,
        fontFamily: 'DroidSans'
    },

    backImage: {
        resizeMode: 'stretch',
        width: "100%",
        height: "100%",
    },

    backButton: {
        width: "33px",
        height: "27px",
        marginRight: "85%",
        marginTop: "20px",
        marginBottom: "10%",
        position: "absolute",
    }

});

export { styles };