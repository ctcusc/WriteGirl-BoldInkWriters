import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        //   flex: 1,
          backgroundColor: '#359FAB',
          alignItems: 'center',
          justifyContent: 'center',
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          borderColor: 'black',
          paddingTop: 70,
          paddingBottom: 40,
    
        //   flex: 0.5, 
        },
        bottomContainer: {
            flex: 1,
            backgroundColor: '#F0EBE8',
            alignItems: 'left',
            justifyContent: 'left',
    
          },
        bigText: {
            fontFamily: 'sans-serif',
            fontSize: 30, 
            fontWeight: 'bold',
            color: 'white',
            // textAlign: center,
        },
        smallText: {
            fontFamily: 'sans-serif',
            fontSize: 16, 
            fontWeight: 'bold',
            color: 'white',
            // textAlign: center,
        },
        medText: {
            fontFamily: 'sans-serif',
            fontSize: 18, 
            fontWeight: 'bold',
            color: 'white',
        },
        headerText:{
            color: '#0D4D5E', 
            fontSize: 28,
            paddingLeft: 40,
            paddingTop: 10,
        },
        gridContainer: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'start',
            paddingHorizontal: 20,
            padding: 20,
          },
          item: {
            width: '27%',
            aspectRatio: 1,
            borderRadius: 25,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
            // marginBottom: 10,
            marginLeft: 30,
            marginTop: 10,
          },
          dateContainer: {
            justifyContent: 'left',
            alignItems: 'left',
          },
          day: {
            fontSize: 36,
            fontWeight: 'bold',
            color: '#0D4D5E', 
            alignSelf: "center"
            // textAlign: center,
          },
          monthYear: {
            fontSize: 20,
            color: '#0D4D5E', 
          },
          signOutText: {
            fontFamily: 'sans-serif',
            fontSize: 15, 
            fontWeight: 'bold',
            color: 'white',
            alignSelf: 'flex-end',
            marginRight: 20,
            textDecorationLine: 'underline',
          },
   
});

// export { styles };