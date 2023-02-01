import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        height: '100%',
      },
    page:{
        backgroundColor: '#F5F5F5',
        height: '100%',
        overflow: 'scroll',
        justifyContent: 'center',
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
        font: 'Droid Sans',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: '30px',
      },
      prompt:{
        color: '#0D4D5E',
        fontFamily: 'Hubballi',
        fontStyle: 'normal',
        fontSize: '20px',
        lineHeight: '19px',
        paddingTop: '20px',
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
        fontSize: '20px',
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
        marginBottom: '50px',
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
      },
      helpText:{
        paddingVertical: '5%',
        textAlign: 'center',
        fontFamily: 'Hubballi',
        fontColor: '#0D4D5E',
        fontSize: '20px',
      }
});

export {styles}