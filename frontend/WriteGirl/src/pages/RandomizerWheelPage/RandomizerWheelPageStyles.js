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
        // alignSelf: 'flex-start'
    },
    headertext: {
        fontSize: 30,
        color: "#FFFFFF",
        paddingTop: '25%'
    },

    wheelcontainer: {
        height: '50%',
        alignItems: 'center',
        marginTop: '-15%'
    },
    wheelbody: {
        width: 330,
        height: 346.46,
        position: 'absolute'
    },
    wheeltop: {
        width: 40,
        height: 55,
        zIndex: 5,
        position: 'absolute',
        marginTop: -30,
    },
    wheel: {
        height: 321.43,
        width: 321.43,
        marginTop: 4
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
    },
    buttontext: {
        color: '#FFFFFF',
        fontSize: 25,
        textAlign: 'center'
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
        // position: 'absolute',
        // marginLeft: '20%'
    },
    arrowright: {
        width: '50%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        // position: 'absolute',
        // marginRight: '-40%'
    },
    arrowimg: {
        width: '50%',
        height: '50%',
        resizeMode: 'contain'
    },
    wordtext: {
        color: '#0D4D5E',
        fontSize: 20,
        // marginVertical: 20
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
        height: '50%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderRadius: 2,
        borderColor: '#000'
    },
    modaltext: {
        color: '#0D4D5E',
        fontSize: 20
    },
    closebutton: {
        color: '#0D4D5E',
        backgroundColor: '#C5DA01',
        paddingLeft: 30,
        paddingRight: 30,
        // width: '100%',
        // height: '120%',
        paddingTop: 5,
        paddingBottom: 5,
        borderRadius: 20,
        marginTop: '5%',
        shadowRadius: 5,
        shadowColor: '#E1E0DE',
        shadowOpacity: 1,
        shadowOffset: {width: 0, height: 4},
        fontSize: 25
    },
    closebuttontext: {
        color: '#0D4D5E',
        textAlign: 'center',
        fontSize: 25
    },

    backImage: {
        resizeMode: 'stretch',
        width: "100%",
        height: "100%",
    },

    backButton: {
        width: 25,
        height: 20,
        marginRight: "85%",
        marginTop: 15,
        marginBottom: "10%",
        position: "absolute",
    },

    backArrow:{
        position: 'relative',
        right: '45%',
        bottom: '5%',
        color:  '#49A5AD',
        backgroundColor: '#49A5AD',
        borderColor: '#49A5AD',
        marginLeft: "3%",
        marginTop: '3%',
    },
    backText:{
        fontSize: 35,
        fontWeight: 500,
        color: "#FFFFFF",
        borderColor: '#49A5AD',
        backgroundColor: '#49A5AD',
    }

});

export { styles };