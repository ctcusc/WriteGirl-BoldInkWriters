import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        //   flex: 1,
          backgroundColor: '#359FAB',
          alignItems: 'center',
          justifyContent: 'center',
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
          borderColor: 'black',
          paddingTop: 70,
          paddingBottom: 30,
    
        //   flex: 0.5, 
        },
        scroll: {
          backgroundColor: '#F0EBE8',
          height: "50%"
        },
        bottomContainer: {
            flex: 1,
            backgroundColor: '#F0EBE8',
            alignItems: 'left',
            justifyContent: 'left',
    
          },
        bigText: {
            // fontFamily: 'sans-serif',
            fontSize: 30, 
            // fontWeight: 700,
            color: 'white',
            alignSelf: 'center'
        },
        smallText: {
            // fontFamily: 'sans-serif',
            fontSize: 16, 
            // fontWeight: 'bold',
            color: 'white',
            alignSelf: 'center'
        },
        medText: {
            // fontFamily: 'sans-serif',
            fontSize: 18, 
            // fontWeight: '400',
            color: 'white',
            alignSelf: 'center'
        },
        headerText:{
            color: '#0D4D5E', 
            fontSize: 28,
            paddingLeft: 40,
            paddingTop: 10,
            // fontWeight: 500
            
        },
        gridContainer: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'start',
            paddingHorizontal: 20,
            // padding: 20,
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
            padding: 5,
          },
          dateContainer: {
            justifyContent: 'left',
            alignItems: 'left',
            padding: 2
          },
          day: {
            fontSize: 36,
            // fontWeight: 'bold',
            color: '#0D4D5E', 
            alignSelf: "center",
            // paddingHorizontal: 10
            // textAlign: center,
          },
          monthYear: {
            fontSize: 15,
            color: '#0D4D5E', 
            alignSelf: "center",
          },
          signOutText: {
            // fontFamily: 'sans-serif',
            fontSize: 15, 
            // fontWeight: 'bold',
            color: 'white',
            alignSelf: 'flex-end',
            marginRight: 20,
            textDecorationLine: 'underline',
          },
          inky: {
            width: 72, 
            height: 86, 
            marginTop: 15, 
            alignSelf: 'center'
          },
          aboutbuttontext: {
              color: '#0D4D5E', 
              fontSize: 16, 
              // fontWeight: 400,
              alignSelf: "center"
          },
          aboutusbutton: {
            // marginTop: 20,
            backgroundColor: '#C5DA01', 
            borderRadius: 20, 
            padding: 15, 
            marginTop: "5%",
          }
   
});

// export { styles };