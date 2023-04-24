import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        height: '100%',
        backgroundColor: '#F0EBE8'
      },
    page:{
        flex: 1,
        backgroundColor: '#F0EBE8',
        height: '100%',
        overflow: 'scroll',
        
      },
    chooseText:{
      color: '#0D4D5E',
      fontFamily: 'DroidSans',
      fontStyle: 'normal',
      fontSize: 20,
      fontWeight: 700,
      lineHeight: 32,
      textAlign: 'center',
    },
    popup: {
        filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
      },
    openDiv: {
      display: 'flex',
      width: "90%",
      minHeight: "20%",
      margin: "auto",
      alignItems: 'center',
    },
    doorDiv:{
      flex: 1,
      width: "90%",
      margin: "auto",
      alignItems: 'center',
      alignSelf: "center"
    },
    openDoor: {
      position: 'relative',
      filter: 'drop-shadow(0px 4px 4px #E1E0DE)',
      backgroundColor: '#FFFFFF',
      borderRadius: 30,
      width: "100%",
      paddingVertical: "60%",
      paddingHorizontal: "20%",
      alignItems: 'center',
      justifyContent: 'center',
      },
      openText: {
        color: '#0D4D5E', 
        // font: 'Droid Sans',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: 30,
      },
      promptTitle:{
        color: '#0D4D5E',
        fontFamily: 'Hubballi',
        // fontStyle: 'normal',
        fontSize: 30,
        fontWeight: 700,
        paddingTop: 10,
      },
      prompt:{
        color: '#0D4D5E',
        fontFamily: 'Hubballi',
        fontStyle: 'normal',
        fontSize: 30,
        paddingTop: 15,
      },
      interactive: {
        // Absolutely positioned to the `openDoor` container
        position: 'absolute',
        top:'60%',
        filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
        backgroundColor: '#C5DA01',
        borderRadius: 20,
        paddingVertical: '1%',
        paddingHorizontal: '5%',
      },
      intText:{
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 15,
        lineHeight: 24,
        color: '#0D4D5E',
      },
      compButton:{
        position: 'relative',
        width: "90%",
        height: "5%",
        margin: 'auto',
        backgroundColor: '#49A5AD',
        filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
        borderRadius: 20,
        paddingVertical: '5%',
        justifyContent: 'center',
      },
      compText:{
        textAlign: 'center',
        color: '#FFFFFF',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 19,
        lineHeight: 30,
        color: '#FFFFFF',
      },

      helpButton:{
        position: 'relative',
        marginLeft: '45%',
        marginRight: '10%',
        marginBottom: 38,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
      },
      exploreButton:{
        position: 'relative',
        borderRadius: 30,
        backgroundColor: '#0D4D5E',
        marginTop: '70%',
        // minHeight: '60%',
        minWidth: '22%',
        width: '30%',
        //Increase vertical height
        // height: '150px',

      },
      exploreText:{
        color: '#FFFFFF',
        fontFamily: 'DroidSans',
        paddingVertical: '5%',
        paddingHorizontal: '10%',
        textAlign: 'center',
        fontSize: 15,
      },
      doorActivityText:{
        fontFamily: 'DroidSans',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 20,
        lineHeight: 30,
        color: '#0D4D5E',
        textAlign: 'center',
        marginTop: '37%',
      },
      helpText:{
        paddingVertical: '5%',
        textAlign: 'center',
        fontFamily: 'Hubballi',
        color: '#0D4D5E',
        fontSize: 15,
        color: '#49A5AD',
      },
      backArrow:{
        position: 'relative',
        right: '45%',
        bottom: '5%',
      },
      backText:{
        fontSize: 35,
        fontWeight: 500,
        color: '#49A5AD',
      },
      alert:{
        margin: '10%',
        marginTop: '20%',
        maxW:"400",
        maxH:"800",
        height: '80%',
        borderRadius:30,
        backgroundColor:"#FFFFFF",
        filter:"drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.25))",
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
      doorIcon:{
        width: "28%", 
        height: 90,
        marginVertical: 25, 
        marginHorizontal: 10, 
        marginLeft: 10, 
        borderRadius: 20, 
        filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))'
      },
      doorImage: {
        resizeMode: 'stretch',
        width: "100%",
        height: "100%",
      },
    tip: {
      height: '20%',
      marginTop: '10%',
      marginLeft: '5%',
      marginBottom: '5%',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    tipbox: {
        // width: 74.72,
        // height: 112.33,
        alignSelf: 'flex-end',
        marginLeft: "5%",
        resizeMode: 'contain',
        // marginTop: "20%"

        
    },
    tiptext: {
        color: '#0D4D5E',
        fontSize: 20,
        // paddingRight: 30,
        // paddingLeft: 30,
        padding: '10%',
        fontFamily: 'Hubballi',
        alignSelf: 'center',
        textAlign: 'center'
    },
    tipimagecontainer: {
        width: "70%",
        // height: "100%",
        justifyContent: 'flex-start',
        alignSelf: 'flex-end',
        resizeMode: 'contain',
    },
    tipimage: {
        width: "100%",
        padding: '10%',
        // height: "100%",
        // resizeMode: 'contain',
        alignItems: 'center',
    },
      
});

export {styles}