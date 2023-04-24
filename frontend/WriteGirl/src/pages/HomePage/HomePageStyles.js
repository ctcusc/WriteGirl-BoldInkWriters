import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    backgroundView: {
        flex:1,
        justifyContent:'space-between',
        backgroundColor: '#F0EBE8'
      },
    container: {
    //   paddingLeft: 40,
    //   paddingRight:40,
    //   paddingBottom: 80,
        marginHorizontal: 20,
        marginBottom: 90,
      flex:1,
      justifyContent:'space-between',
      backgroundColor: '#F0EBE8'
    },
    welcome: {
        height: '20%',
        paddingTop: 50,
        paddingRight: 50,
        paddingLeft: 50
    },
    welcometext1: {
        fontSize: 20,
        color: "#0D4D5E",
        // fontFamily: 'Hubballi'
    },
    welcomenametext: {
        fontSize: 50,
        fontWeight: 400,
        color: "#0D4D5E",
        // fontFamily: 'Hubballi_bold'
    },
    welcometext2: {
        fontSize: 20,
        color: "#0D4D5E",
        alignSelf: 'center',
        fontFamily: 'DroidSansBold'
    },
    pic: {
        width:40,
        height:40
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
    },

    tip: {
        height: '20%',
        marginTop: '5%',
        marginBottom: '5%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    tipbox: {
        width: 74.72,
        height: 112.33,
        alignSelf: 'flex-end'
    },
    tiptext: {
        color: "#0D4D5E",
        fontSize: 18,
        paddingRight: 30,
        paddingLeft: 30,
        paddingBottom: '6%',
        // fontFamily: 'Hubballi'
    },
    tipimagecontainer: {
        width: "70%",
        // height: "100%",
        justifyContent: 'flex-start',
        alignItems: 'flex-end'
    },
    tipimage: {
        width: "100%",
        height: "100%",
        resizeMode: 'contain',
        alignItems: 'center',
        textAlign: 'left',
        justifyContent: 'center',
        resizeMode:'contain',
    },

    exercises: {
        borderWidth: 1,
        height: '40%',
        // paddingTop: 20,
        paddingBottom: 20,
        alignItems: 'center',
        borderRadius: 20,
        borderColor: '#FFFFFF',
        elevation: 5,
        shadowRadius: 5,
        shadowColor: '#E1E0DE',
        shadowOpacity: 1,
        shadowOffset: {width: 0, height: 4},
        backgroundColor: "#FFFFFF"
    },
    exercisesbutton: {
        color: "#0D4D5E",
        backgroundColor: '#C5DA01',
        width: '50%',
        height: '120%',
        // alignContent: 'center',
        // justifyContent: 'center',
        // paddingLeft: 30,
        // paddingRight: 30,
        // paddingTop: 5,
        // paddingBottom: 5,
        borderRadius: 20,
        textAlign: 'center',
        // marginTop: '5%',
        // marginBottom: '5%',
        shadowRadius: 5,
        shadowColor: '#E1E0DE',
        shadowOpacity: 1,
        shadowOffset: {width: 0, height: 4},
        fontSize: 25,
        fontFamily: 'DroidSans'
    },
    exercisestext1: {
        fontSize: 27,
        fontWeight: 'bold',
        color: "#0D4D5E",
        fontFamily: 'DroidSans',
        alignSelf: 'center'
    },
    exerciseimg: {
        width: '100%',
        height: '80%',
        // justifySelf: 'flex-start',
        // aspectRatio: 1,
        resizeMode: 'cover',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomWidth: 2,
        borderColor: '#FFFFFF',
        zIndex: 999,
        // elevation: 10,
        // shadowRadius: 51,
        // shadowColor: '#E1E0DF',
        // shadowOpacity: 1,
        // shadowOffset: {width: 0, height: 4},
    },
    horizontal2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingTop: '3%',
        paddingLeft: 15,
        paddingRight: 15,
    },
    rating: {
        color: "#0D4D5E",
        backgroundColor: '#C5DA01',
        borderBottomLeftRadius: 30,
        borderTopLeftRadius: 30,
        paddingLeft: 6,
        paddingRight: 6,
        fontSize: 25,
        position: 'absolute',
        alignSelf: 'flex-end',
        marginTop: '10%',
        zIndex: 999,
        fontFamily: 'DroidSans'
    },

    jumpstart: {
        marginTop: '170%',
        // marginBottom: '0%',
        // justifySelf: 'flex-end',
        position: 'absolute',
        height: '100%',
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    jumpstartarrow: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        resizeMode: 'contain'
    },
    jumpstartbutton: {
        justifyContent: 'center',
        height: 19,
        width: 27,
        marginTop: "5%",
        // marginBottom: "5%",
    },
    jumpstarttext: {
        alignSelf: 'center',
        fontSize: 24,
        color: '#FFFFFF'
    },
    todaysJumpstart: {
        marginTop: '3%',
        marginBottom: '3%',
        color: '#ffffff',
        textAlign: 'center',
        width: '80%',
        height: 25,
        fontSize: 20,
        fontWeight: 200
    },
    jumpstartView: {
        // marginTop: '5%',
        // marginLeft: '10%',
        marginBottom: '110%',
        alignSelf: 'center',
        // position: 'absolute',
        backgroundColor: '#272e32',
        width: '70%',
        height: '30%',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
    }, 
    jumpstartTitle: {
        color: '#ffffff',
        fontSize: 15,
        fontWeight: 400,
        marginTop: '10%',
    },
    wordJumpstart: {
        color: '#ffffff',
        fontSize: 38,
        fontWeight: 400,
        textAlign: 'center',
    },
    jumpstartImage: {
        resizeMode: 'stretch',
        padding: '10%',
        height: '50%',
        width: '70%',
        alignSelf: 'center',
    },



    completeButton: {
        backgroundColor: '#272e32',
        width: 270,
        height: 10,
        alignItems: 'center',
        borderRadius: 15,
        position: 'absolute',
        marginTop: '100%',
        paddingBottom: 5,
        // alignSelf: 'center',
        // alignContent: 'center',
    },
    completeText: {
        color: "#ffffff",
        fontSize: 25,
        fontWeight: 200,
        textAlign: 'center',
        alignSelf: 'center',
        padding: "15%",
        fontFamily: 'Droid Sans',
    }


  });

  export { styles };