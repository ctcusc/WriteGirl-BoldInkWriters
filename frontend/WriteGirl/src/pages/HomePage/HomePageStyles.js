// import { StyleSheet } from 'react-native';

// const styles = StyleSheet.create({
//     container: {
//       paddingLeft: 40,
//       paddingRight:40,
//       paddingBottom: 80,
//       flex:1,
//       justifyContent:'space-between',
//       backgroundColor: '#F0EBE8'
//     },
//     welcome: {
//         height: '20%',
//         paddingTop: 50
//     },
//     welcometext1: {
//         fontSize: 18,
//         color: '#0D4D5E'
//     },
//     welcometext2: {
//         fontSize: 30,
//         color: '#0D4D5E',
//         alignSelf: 'center'
//     },
//     pic: {
//         width:40,
//         height:40
//     },
//     horizontal: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         width: '100%'
//     },

//     tip: {
//         height: '20%',
//         marginTop: '5%',
//         marginBottom: '5%',
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//     },
//     tipbox: {
//         width: 74.72,
//         height: 112.33,
//         alignSelf: 'flex-end'
//     },
//     tiptext: {
//         color: '#0D4D5E',
//         fontSize: 18,
//         paddingRight: 30,
//         paddingLeft: 30,
//         paddingBottom: '6%'
//     },
//     tipimagecontainer: {
//         width: "70%",
//         justifyContent: 'flex-start',
//         alignItems: 'flex-end'
//     },
//     tipimage: {
//         // width: '200px',
//         // height: '90px',
//         width: '240px',
//         height: '108px',
//         resizeMode: 'contain',
//         alignItems: 'center',
//         textAlign: 'left',
//         justifyContent: 'center',
//     },

//     exercises: {
//         borderWidth: 1,
//         height: '40%',
//         // paddingTop: 20,
//         paddingBottom: 20,
//         alignItems: 'center',
//         borderRadius: 20,
//         borderColor: '#FFFFFF',
//         elevation: 5,
//         shadowRadius: 5,
//         shadowColor: '#E1E0DE',
//         shadowOpacity: 1,
//         shadowOffset: {width: 0, height: 4},
//         backgroundColor: "#FFFFFF"
//     },
//     exercisesbutton: {
//         color: '#0D4D5E',
//         backgroundColor: '#C5DA01',
//         paddingLeft: 30,
//         paddingRight: 30,
//         paddingTop: 5,
//         paddingBottom: 5,
//         borderRadius: 20,
//         textAlign: 'center',
//         marginTop: '5%',
//         shadowRadius: 5,
//         shadowColor: '#E1E0DE',
//         shadowOpacity: 1,
//         shadowOffset: {width: 0, height: 4},
//         fontSize: 25
//     },
//     exercisestext1: {
//         fontSize: 27,
//         fontWeight: 'bold',
//         color: '#0D4D5E',
//     },
//     exerciseimg: {
//         width: '100%',
//         height: '80%',
//         justifySelf: 'flex-start',
//         // aspectRatio: 1,
//         resizeMode: 'cover',
//         borderTopLeftRadius: 20,
//         borderTopRightRadius: 20,
//         borderBottomWidth: 2,
//         borderColor: '#FFFFFF',
//         zIndex: 999,
//         // elevation: 10,
//         // shadowRadius: 51,
//         // shadowColor: '#E1E0DF',
//         // shadowOpacity: 1,
//         // shadowOffset: {width: 0, height: 4},
//     },
//     horizontal2: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         width: '100%',
//         paddingTop: '3%',
//         paddingLeft: 15,
//         paddingRight: 15,
//     },
//     rating: {
//         color: '#0D4D5E',
//         backgroundColor: '#C5DA01',
//         borderBottomLeftRadius: 30,
//         borderTopLeftRadius: 30,
//         paddingLeft: 6,
//         paddingRight: 6,
//         fontSize: 25,
//         position: 'absolute',
//         alignSelf: 'flex-end',
//         marginTop: '10%',
//         zIndex: 999,
//     },

//     jumpstart: {
//         marginLeft: -40,
//         marginRight: -40,
//         height: '20%',
//         backgroundColor: '#49A5AD',
//         borderTopLeftRadius: 20,
//         borderTopRightRadius: 20
//     },
//     jumpstartarrow: {
//         height: '50%',
//         width: '50%',
//         marginTop: 20,
//         alignSelf: 'center',
//         resizeMode: 'contain'
//     },
//     jumpstartbutton: {
//        height: '30%',
//        marginBottom: '5%'
//     },
//     jumpstarttext: {
//         alignSelf: 'center',
//         fontSize: 24,
//         color: '#FFFFFF'
//     }
//   });

//   export { styles };

import { StyleSheet, Dimensions } from 'react-native';

// const { width, height } = Dimensions.get('window');
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        paddingLeft: width * 0.1,
        paddingRight: width * 0.1,
        paddingTop: height * 0.08,
    //   paddingBottom: 80,
        flex:1,
        justifyContent:'space-between',
        backgroundColor: '#F0EBE8'
    },
    welcome: {
        // height: '20%',
        // borderWidth: 2,
        // paddingTop: height * 0.08,
    },
    welcometext1: {
        fontSize: '1.1rem',
        color: '#0D4D5E',
        fontFamily: 'Hubballi'
    },
    welcometext2: {
        fontSize: '1.6rem',
        color: '#0D4D5E',
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
        // borderWidth: 2,
        height: '20%',
        width: '100%',
        marginTop: '5%',
        marginBottom: '5%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    tipbox: {
        // width: 74.72,
        // height: 112.33,
        width: '30%',
        height: '85%',
        resizeMode: 'contain',
        alignSelf: 'flex-end',
    },
    tiptext: {
        color: '#0D4D5E',
        fontSize: '1.1rem',
        paddingRight: 20,
        paddingLeft: 20,
        paddingBottom: '6%',
        fontFamily: 'Hubballi',
        position: 'absolute'
    },
    tipimagecontainer: {
        width: "70%",
        height: '100%',
        // justifyContent: 'flex-start',
        justifyContent: 'center',
        alignItems: 'center'
    },
    tipimage: {
        // width: '240px',
        // height: '108px',
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        alignItems: 'center',
        textAlign: 'left',
        justifyContent: 'center',
    },

    exercises: {
        borderWidth: 1,
        height: '40%',
        justifyContent: 'space-between',
        // paddingTop: 20,
        // paddingBottom: 20,
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
        color: '#0D4D5E',
        backgroundColor: '#C5DA01',
        paddingLeft: width * 0.05,
        paddingRight: width * 0.05,
        paddingTop: 5,
        paddingBottom: 5,
        borderRadius: 20,
        textAlign: 'center',
        shadowRadius: 5,
        shadowColor: '#E1E0DE',
        shadowOpacity: 1,
        shadowOffset: {width: 0, height: 4},
        fontSize: '1.4rem',
        fontFamily: 'DroidSans'
    },
    exercisestext1: {
        fontSize: '1.7rem',
        fontWeight: 'bold',
        color: '#0D4D5E',
        fontFamily: 'DroidSans'
    },
    exerciseimg: {
        width: '100%',
        height: '80%',
        justifySelf: 'flex-start',
        resizeMode: 'cover',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomWidth: 2,
        borderColor: '#FFFFFF',
        zIndex: 999,
    },
    horizontal2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingBottom: '3%',
        paddingLeft: width * 0.03,
        paddingRight: width * 0.03,
    },
    rating: {
        color: '#0D4D5E',
        backgroundColor: '#C5DA01',
        borderBottomLeftRadius: 30,
        borderTopLeftRadius: 30,
        paddingLeft: 6,
        paddingRight: 6,
        fontSize: '1.5rem',
        position: 'absolute',
        alignSelf: 'flex-end',
        marginTop: '10%',
        zIndex: 999,
        fontFamily: 'DroidSans'
    },

    jumpstart: {
        marginLeft: width * -0.1,
        marginRight: width * -0.1,
        height: '20%',
        backgroundColor: '#49A5AD',
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
       height: '25px',
       width: '35px',
       marginTop: '10px',
    },
    jumpstarttext: {
        alignSelf: 'center',
        fontSize: '1.4rem',
        color: '#FFFFFF'
    },
    todaysJumpstart: {
        marginTop: '7%',
        marginBottom: '3%',
        color: '#ffffff',
        textAlign: 'center',
        width: '80%',
        height: '33px',
        fontSize: '27px',
        fontWeight: 150
    },
    jumpstartView: {
        marginTop: '30%',
        position: 'absolute',
        backgroundColor: '#272e32',
        width: '70%',
        height: '40%',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
    }, 
    jumpstartTitle: {
        color: '#ffffff',
        fontSize: '20px',
        fontWeight: 400,
    },
    wordJumpstart: {
        color: '#ffffff',
        fontSize: '50px',
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
        width: '332px',
        height: '44px',
        alignItems: 'center',
        borderRadius: '20px',
        position: 'absolute',
        marginTop: '80%',
    },
    completeText: {
        color: "#ffffff",
        fontSize: '25px',
        fontWeight: 200,
        textAlign: 'center',
    }


  });

  export { styles };