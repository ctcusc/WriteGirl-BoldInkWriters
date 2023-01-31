import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        height: '100%',
      },
    page:{
        backgroundColor: '#F5F5F5',
        height: '100%',
        overflow: 'scroll'
      },
    popup: {
        filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
      },
    openDiv: {
      display: 'flex',
      alignItems: 'center',
    },
    openDoor: {
        filter: 'drop-shadow(0px 4px 4px #E1E0DE)',
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        paddingVertical: "60%",
        paddingHorizontal: "20%",
        margin: "auto",
        display: 'flex',
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
});

export {styles}