import {View, Text, Button, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

export default function WritingExperiments() {

  return (
    <SafeAreaView style={styles.container}>


      <View style = {styles.page}>  
          <View style={styles.reflectionDiv}>
            <Text style={styles.title}>Reflection Prompt Placeholder</Text>
            <View style={styles.fixToText}>
              <TouchableOpacity disabled={false} style={styles.smallButtons}>
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
    overflow: 'scroll'
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
  generate:{
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: "35px",
    color: 'white',
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
    position: 'absolute',
    width: "70%",
    height: "20%",
    left: 47,
    top: 106,
    backgroundColor: '#FFFFFF',
    marginTop: 20,
    borderRadius: 30,

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',


    overflow: 'hidden',

    
  },
  
  otherButtons: {
    position: 'top',
    width: "70%",
    height: "20%",
    left: 47,
    top: 307,
    backgroundColor: '#FFFFFF',
    padding: 30,
    marginVertical: 20,
    borderRadius: 30,
    alignItems: 'center',
    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
  },

  smallButtons: {
    width: '21vw',
    minWidth: '120px',
    height: '6vh',
    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
    backgroundColor: '#73857B',
    borderRadius: 30,
    alignItems: 'center',
    marginRight: 0,
  },

  fixToText: {
    flexDirection: 'row',
    justifyContent: 'right',
    marginLeft: "50%",
  }
});