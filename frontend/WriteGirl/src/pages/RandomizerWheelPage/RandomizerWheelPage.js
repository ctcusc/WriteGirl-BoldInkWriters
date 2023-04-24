import { useState, useRef, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity, Modal, Animated, Easing, SafeAreaView } from 'react-native';
import { styles } from "./RandomizerWheelPageStyles.js";

export default function RandomizerWheelPage({ navigation, route }) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isSpinning, setIsSpinning] = useState(false);
    const [selectedWordIndex, setSelectedWordIndex] = useState(0);
    const words = ['Adjective', 'Noun', 'Verb', 'Name', 'Location', 'Time'];
    const rotation = useRef(new Animated.Value(0)).current;
    const [rotationNumber, setRotationNumber] = useState(1);
    const [selectedWord, setSelectedWord] = useState(0);
    const [data, setData] = useState(-1)

    const startSpin = () => {
        if (isSpinning) return;

        setIsSpinning(true);
        getPrompt();

        Animated.timing(rotation, {
            toValue: rotationNumber,
            duration: 3000,
            easing: Easing.out(Easing.ease),
            useNativeDriver: true,
        }).start(() => {
            // setIsModalVisible(true);
            setIsSpinning(false);
            setRotationNumber(rotationNumber + 1);
        });
    };

    useEffect(() => {
      if(!isSpinning && data !== -1) {
        setIsModalVisible(true)
      }
    }, [isSpinning])

    const rotate = rotation.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });

    const closeModal = () => {
        setIsModalVisible(false);
    };

    const renderModal = () => {
      if(isModalVisible) {
        return(
          <Modal visible={isModalVisible} animationType="fade" transparent onRequestClose={() => setIsModalVisible(false)}>
              <TouchableOpacity style={styles.modalcontainer} activeOpacity={1}>
                  <View style={styles.modalcontent}>
                      <Text style={styles.modaltext}>Congratulations!</Text>
                      <Text style={styles.modaltext}>You got this {words[selectedWordIndex].toLowerCase()}:</Text>
                      <Text style={styles.modaltext}>{selectedWord}</Text>
                      <TouchableOpacity onPress={() => setIsModalVisible(false)} style={styles.closebutton}>
                          <Text style={styles.closebuttontext}>close</Text>
                      </TouchableOpacity>
                  </View>
              </TouchableOpacity>
          </Modal>
        )
      }
    }

    const cycleWords = (direction) => {
        if (isSpinning) return;
        const maxIndex = words.length - 1;

        if (direction === 'left') {
            setSelectedWordIndex(selectedWordIndex === 0 ? maxIndex : selectedWordIndex - 1);
        } else if (direction === 'right') {
            setSelectedWordIndex(selectedWordIndex === maxIndex ? 0 : selectedWordIndex + 1);
        }
    };

    const getPrompt = async() => {
      try{
        const response = await fetch("http://" + process.env.IP + ":8000/api/randomizer-wheel-prompt/" + words[selectedWordIndex], {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        })
        const response_data = await response.json();
        setData(response_data)
        if (response_data === -1) { 
          window.alert("No words available in database for this category.")
          // console.log("No words in database for this category. Go add more words"); 
          return;
        }
        setSelectedWord(response_data["prompt"]);
      } catch (err) {
        console.log("err in getPrompt() RandomizerWheel")
        console.log(err)
        return;
      }
    }

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={() => {
                navigation.navigate('Home Tabs', { screen: 'Writing Experiments' });
            }}>
                <Text style={styles.backText}>←</Text>
            </TouchableOpacity>
            <View style={styles.header}>
                <Text style={styles.headertext}>Randomizer</Text>
            </View>

            <View style={styles.wheelcontainer}>
                <Image style={styles.wheeltop} source={require('./assets/wheelTop.png')}/>
                <Image style={styles.wheelbody} source={require('./assets/wheelBody.png')}/>
                <Animated.Image source={require('./assets/Spinner.png')} style={[styles.wheel, {transform: [{ rotate }]}]}/>
            </View>

            <TouchableOpacity onPress={startSpin} style={styles.button}>
                <Text style={styles.buttontext}>Get a random...</Text>
            </TouchableOpacity>

            <View style={styles.wordcontainer}>
                <TouchableOpacity onPress={() => cycleWords('left')} style={styles.arrowleft}>
                    <Image style={styles.arrowimg} source={require('./assets/leftArrow.png')}/>
                </TouchableOpacity>

                <Text style={styles.wordtext}>{words[selectedWordIndex]}</Text>

                <TouchableOpacity onPress={() => cycleWords('right')} style={styles.arrowright}>
                    <Image style={styles.arrowimg} source={require('./assets/rightArrow.png')}/>
                </TouchableOpacity>
            </View>

            {renderModal()}
        </SafeAreaView>
    )
}