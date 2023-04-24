import {View, Text, Button, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { useState, useEffect } from 'react';

export default function WritingExperiments({navigation}) {
  const [refPrompt, setRefPrompt] = useState("")

  const fetchPrompt = async() => {
    setRefPrompt("Generating...")
    try{
        const response = await fetch("http://" + process.env.IP + ":8000/api/reflectionprompt/", {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        })
        const response_data = await response.json();
        setRefPrompt(response_data.prompt)
        return response_data;
    }catch (err) {
      console.log("err in generating reflection prompt");
      console.log(err)
      return
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style = {styles.page}>  
      <Text style={styles.chooseText}>Writing Experiments</Text>
          <View style={styles.reflectionDiv}>
            <Text style={styles.title}>Reflection Prompt Placeholder</Text>
            <Text>{refPrompt === "" ? "Click Generate!" : refPrompt}</Text>
            {/* <View style={styles.buttonPadding} /> */}
            {/* <View style={styles.fixToText}> */}
              <TouchableOpacity disabled={false} style={styles.smallButtons} onPress={() => fetchPrompt()}>
                  <Text style={styles.generate}>Generate!</Text>
              </TouchableOpacity>
            {/* </View> */}
          </View>
        
          <TouchableOpacity style={styles.otherButtons}
          onPress={() => {
            navigation.navigate('Randomizer Wheel')
          }}
          >
            <Text style={styles.title}>Spin the Randomizer Wheel!</Text>
          </TouchableOpacity>
        
          <TouchableOpacity style={styles.otherButtons} onPress={() => {
                navigation.navigate('Door Activity')
              }}>
            <Text style={styles.title}>
                Open the Doors!</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.otherButtons} onPress={() => {
                navigation.navigate('Screen Saver Setup')
              }}>
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
    backgroundColor: '#F0EBE8',
  },
  chooseText:{
    color: '#0D4D5E',
    fontFamily: 'DroidSans',
    fontStyle: 'normal',
    fontSize: 27,
    fontWeight: 700,
    lineHeight: 32,
    textAlign: 'center',
    marginTop: 20,
    
  },

  page:{
    backgroundColor: '#F0EBE8',
    height: '100%',
  },

  title: {
    textAlign: 'center',
    marginVertical: 8,
    fontFamily: 'DroidSans',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 25,
    color: '#0D4D5E',
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
    alignSelf: 'center',
    position: 'relative',
    width: "70%",
    minHeight: "30%",
    margin: "auto",
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
    marginTop: "5%"
  },
  
  otherButtons: {
    alignSelf: 'center',
    position: 'relative',
    width: "70%",
    height: "15%",
    margin: 'auto',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
    marginTop: "5%"
  },

  buttonPadding: {
    paddingVertical: "1%",
    paddingHorizontal: "5%",
    height: 5,
  },

  fixToText: {
    // Absolutely positioned to `reflectionDiv` container
    position: 'absolute',
    width: "100%",
    height: "100%",
  },

  smallButtons: {
    // Absolutely positioned to `fixToText` container
    // position:'absolute',
    // right: 20,
    // bottom: 1.5,
    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
    backgroundColor: '#C5DA01',
    borderRadius: 30,
    paddingVertical: "1%",
    paddingHorizontal: "5%",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // margin: "auto",
    alignSelf: 'center',
    marginTop: "10%",
    // marginVertical: ""
  },

  generate:{
    textAlign: 'center',
    fontFamily: 'Droid Sans',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 24,
    color: '0D4D5E',
    margin: 0,
    padding: 0,
  }
 
});