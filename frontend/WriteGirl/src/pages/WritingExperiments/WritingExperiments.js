import {View, Text, Button, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

export default function WritingExperiments({navigation}) {

  return (
    <SafeAreaView style={styles.container}>
      <View style = {styles.page}>  
          <View style={styles.reflectionDiv}>
            <Text style={styles.title}>Reflection Prompt Placeholder</Text>
            <View style={styles.buttonPadding} />
            <View style={styles.fixToText}>
              <TouchableOpacity disabled={false} style={styles.smallButtons} onPress={() => {
                navigation.navigate('Screen Saver Setup')
              }}>
                  <Text style={styles.generate}>Generate!</Text>
              </TouchableOpacity>
            </View>
          </View>
        
          <TouchableOpacity style={styles.otherButtons}>
            <Text style={styles.title}>Spin the Randomizer Wheel!</Text>
          </TouchableOpacity>
        
          <TouchableOpacity style={styles.otherButtons}>
            <Text style={styles.title}>Open the Doors!</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.otherButtons}>
          <Text style={styles.title}>Find your inspiration!</Text>
          </TouchableOpacity>
        
      </View>
    </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    height: '100%',
  },

  page:{
    backgroundColor: '#F5F5F5',
    height: '100%',
  },

  title: {
    textAlign: 'center',
    marginVertical: 8,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 25,
    textColor: '#0D4D5E',
  },
  
  reflectionButton: {
    position: 'absolute',
    width: "50%",
    height: 160,
    left: 47,
    top: 106,
    backgroundColor: '#FFFFFF',
    padding: 30,
    marginTop: 20,
    borderRadius: 30,
    alignItems: 'center',
    
  },

  reflectionDiv: {
    position: 'relative',
    width: "70%",
    minHeight: "20%",
    margin: "auto",
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
  },
  
  otherButtons: {
    position: 'relative',
    width: "70%",
    height: "20%",
    margin: 'auto',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
  },

  buttonPadding: {
    paddingVertical: "1%",
    paddingHorizontal: "5%",
    height: "5vh",
  },

  fixToText: {
    // Absolutely positioned to `reflectionDiv` container
    position: 'absolute',
    width: "100%",
    height: "100%",
  },

  smallButtons: {
    // Absolutely positioned to `fixToText` container
    position:'absolute',
    right: "3vw",
    bottom: "1.5vh",
    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
    backgroundColor: '#0D4D5E',
    borderRadius: 30,
    paddingVertical: "1%",
    paddingHorizontal: "5%",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: "auto"
  },

  generate:{
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: "1.5em",
    color: 'white',
    margin: 0,
    padding: 0,
  }
 
});