import {View, Text, Button, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

export default function WritingExperiments() {
  return (
    <SafeAreaView style={styles.container}>


      <View style = {styles.page}>  
        <div stlye={styles.cont}>
          <Text style={styles.title}>Reflection Prompt Placeholder</Text>
            <View style={styles.fixToText}>
              <TouchableOpacity style={styles.smallButtons}>
                <Text>R</Text>
              </TouchableOpacity>
            </View>
        </div>
        
        <View >
          <TouchableOpacity style={styles.otherButtons}>
          <Text>Randomizer wheel</Text>
          </TouchableOpacity>
        </View>
        
          <TouchableOpacity style={styles.otherButtons}>
          <Text>Door Exercise</Text>
          </TouchableOpacity>
            
          <TouchableOpacity style={styles.otherButtons}>
          <Text>Video/Audio Inspo/Timer</Text>
          </TouchableOpacity>
        
      </View>
    </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
    padding: 10,
  },
  page:{
    marginBottom: 10,
    backgroundColor: 'pink',
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  cont: {
    backgroundColor: '#f00',
    height: 130,
  },
  otherButtons: {
    height: 100,
    backgroundColor: '#fff',
    padding: 10,
    alignItems: 'center',
    
  },
  smallButtons: {
    height: 38,
    backgroundColor: '#fff',
    padding: 10,
    alignItems: 'center',
    
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'right',
    paddingRight: 10,
    paddingBottom: 10,
    
  }
});