import {View, Text, Button, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

export default function WritingExperiments() {
  return (
    <SafeAreaView style={styles.container}>


      <View style = {styles.page}>  
        <div stlye={styles.cont}>
          <TouchableOpacity disabled={true} style={styles.reflectionButton}>
            <Text style={styles.title}>Reflection Prompt Placeholder</Text>
            <View style={styles.fixToText}>
              <TouchableOpacity style={styles.smallButtons}>
                <Text style={styles.generate}>Generate!</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
          
        </div>
        
        <div>
          <TouchableOpacity style={styles.otherButtons}>
          <Text style={styles.title}>Spin the Randomizer Wheel!</Text>
          </TouchableOpacity>
        </div>
        
        <div>
          <TouchableOpacity style={styles.otherButtons}>
          <Text style={styles.title}>Open the Doors!</Text>
          </TouchableOpacity>
        </div>  
        
          <TouchableOpacity style={styles.otherButtons}>
          <Text style={styles.title}>Find your inspiration!</Text>
          </TouchableOpacity>
        
      </View>
    </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    justifyContent: 'center',
    //marginHorizontal: 16,
  },
  page:{
  
    backgroundColor: '#F5F5F5',
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
    position: 'absolute',
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 25,
    color: 'white',
  },
  cont: {
    backgroundColor: '#f00',
    //paddingBottom: 10,
    // height: 130,
  },
  reflectionButton: {
    width: 295,
    height: 160,
    left: 47,
    top: 106,
    backgroundColor: '#FFFFFF',
    padding: 30,
    marginTop: 20,
    borderRadius: 30,
    alignItems: 'center',
    
  },
  //avoid double borders for reflection butt
  otherButtons: {
    position: 'flex',
    width: 295,
    height: 113,
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
    width: 120,
    height: 33,
    // left: 206,
    // top: 222,
    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
    backgroundColor: '#73857B',
    borderRadius: 30,
    alignItems: 'center',
    
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'right',
    paddingRight: 10,
    paddingBottom: 10,
    
  }
});