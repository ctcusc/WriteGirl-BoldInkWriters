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
    openDoor: {
      width: "70%",
      height: "20%",
      color: "white",
      filter: 'drop-shadow(0px 4px 4px #E1E0DE)',
      },
      buttonPadding: {
        paddingVertical: "1%",
        paddingHorizontal: "5%",
        height: "5vh",
      },

});

export {styles}