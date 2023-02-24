import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      marginTop: 80,
      marginLeft: 40,
      marginRight:40,
      marginBottom: 80,
      flex:1,
      justifyContent:'space-between',
    },
    welcome: {
        marginLeft: -40,
        marginRight: -40,
        backgroundColor: '#49A5AD',
        borderBottomLeftRadius: 40,
        height: '20%',
        paddingLeft: 30,
        paddingTop: 20
    },
    welcometext1: {
        fontSize: 20,
        color: '#FFFFFF'
    },
    welcometext2: {
        paddingTop: 15,
        fontSize: 25,
        color: '#FFFFFF'
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    tip: {
        height: '20%',
        marginTop: '10%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    tipbox: {
        borderWidth: 2,
        width: '20%',
        height: 100,
        alignSelf: 'flex-end',
        marginRight: '10%',
    },
    tiptext: {
        color: '#0D4D5E',
        fontSize: "0.8em",
        paddingRight: 30,
        paddingLeft: 30,
        paddingBottom: '15%'
    },
    tipimagecontainer: {
        width: "70%",
        justifyContent: 'flex-start',
        alignItems: 'flex-end'
    },
    tipimage: {
        // width: '200px',
        // height: '90px',
        width: '240px',
        height: '108px',
        resizeMode: 'contain',
        alignItems: 'center',
        textAlign: 'left',
        justifyContent: 'center',
    },

    exercises: {
        borderWidth: 2,
        height: '30%',
        marginTop: '10%',
        justifyContent: 'space-evenly',
        paddingTop: 20,
        paddingBottom: 20,
        alignItems: 'center',
        borderRadius: 20
    },
    exercisesbutton: {
        color: '#0D4D5E',
        backgroundColor: '#C5DA01',
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 20,
        textAlign: 'center',
    },
    exercisestext1: {
        fontSize: 27,
        fontWeight: 'bold',
        color: '#0D4D5E'
    },
    exercisestext2: {
        fontSize: 20,
        color: '#0D4D5E',
        textAlign: 'center',
        paddingLeft: 30,
        paddingRight: 30
    },

    jumpstart: {
        marginLeft: -40,
        marginRight: -40,
        height: '20%',
        backgroundColor: '#49A5AD',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    jumpstartarrow: {
        height: '50%',
        width: '50%',
        marginTop: 20,
        alignSelf: 'center',
        resizeMode: 'contain'
    },
    jumpstartbutton: {
       height: '30%',
       marginBottom: '5%'
    },
    jumpstarttext: {
        alignSelf: 'center',
        fontSize: 24,
        color: '#FFFFFF'
    }
  });

  export { styles };