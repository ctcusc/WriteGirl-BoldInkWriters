import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        height: '100%',
      },
    page:{
        flex: 1,
        backgroundColor: '#F5F5F5',
        height: '100%',
        overflow: 'scroll',
        
      },
    chooseText:{
      color: '#0D4D5E',
      fontFamily: 'Droid Sans',
      fontStyle: 'normal',
      fontSize: '27px',
      fontWeight: 700,
      lineHeight: '32px',
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
        fontSize: '30px',
      },
      prompt:{
        color: '#0D4D5E',
        fontFamily: 'Hubballi',
        fontStyle: 'normal',
        fontSize: '15pt',
        lineHeight: '19px',
        paddingTop: '15pt',
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
        fontSize: '15pt',
        lineHeight: '24px',
        fontColor: '#0D4D5E',
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
        fontSize: '25px',
        lineHeight: '30px',
        fontColor: '#FFFFFF',
      },

      helpButton:{
        position: 'relative',
        marginLeft: '45%',
        marginRight: '10%',
        marginBottom: '38pt',
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
      },
      exploreButton:{
        position: 'relative',
        borderRadius: 30,
        backgroundColor: '#0D4D5E',
        minWidth: '22%',
      },
      exploreText:{
        color: '#FFFFFF',
        fontFamily: 'Poppins',
        paddingVertical: '5%',
        paddingHorizontal: '10%',
        textAlign: 'center',

      },
      doorActivityText:{
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '15pt',
        lineHeight: '30px',
        fontColor: '#0D4D5E',
      },
      helpText:{
        paddingVertical: '5%',
        textAlign: 'center',
        fontFamily: 'Hubballi',
        fontColor: '#0D4D5E',
        fontSize: '15pt',
        fontColor: '#49A5AD',
      },
      backArrow:{
        position: 'relative',
        right: '45%',
        bottom: '5%',
      },
      backText:{
        fontSize: '35px',
        fontWeight: 500,
        color: '#49A5AD',
      },
      alert:{
        margin: '10%',
        maxW:"400",
        maxH:"800",
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
          width: "33px",
          height: "27px",
          marginRight: "85%",
          marginTop: "15pt",
          marginBottom: "10%",
          position: "absolute",
      },
      doorIcon:{
        width: "28%", 
        height: 90,
        marginVertical: 20, 
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
      
});

export {styles}