import { useState, useRef } from 'react';
import { Text, View, Image, TouchableOpacity, Modal, Animated, Easing, SafeAreaView } from 'react-native';
import { styles } from "./RandomizerWheelPageStyles.js";

const backButtonImage = require('../../../assets/BackButton.png');

export default function RandomizerWheelPage({navigation}) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isSpinning, setIsSpinning] = useState(false);
    const [selectedWordIndex, setSelectedWordIndex] = useState(0);
    const words = ['Adjective', 'Name', 'Location', 'Time'];
    const rotation = useRef(new Animated.Value(0)).current;

    const startSpin = () => {
        if (isSpinning) return;

        setIsSpinning(true);

        Animated.timing(rotation, {
            toValue: 1,
            duration: 3000,
            easing: Easing.out(Easing.ease),
            useNativeDriver: true,
        }).start(() => {
            setIsModalVisible(true);
            setIsSpinning(false);
        });
    };
    const rotate = rotation.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });

    const closeModal = () => {
        setIsModalVisible(false);
    };

    const cycleWords = (direction) => {
        if (isSpinning) return;
        const maxIndex = words.length - 1;

        if (direction === 'left') {
            setSelectedWordIndex(selectedWordIndex === 0 ? maxIndex : selectedWordIndex - 1);
        } else if (direction === 'right') {
            setSelectedWordIndex(selectedWordIndex === maxIndex ? 0 : selectedWordIndex + 1);
        }
    };

    return (
        <SafeAreaView style={styles.container}>

            <TouchableOpacity style={styles.backButton} onPress={() => {
                            navigation.navigate('Home Tabs', { screen: 'Writing Experiments' });
                        }}>
                        <Image style={styles.backImage} source={backButtonImage} />
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

            <Modal visible={isModalVisible} animationType="fade" transparent onRequestClose={() => setIsModalVisible(false)}>
                <TouchableOpacity style={styles.modalcontainer} activeOpacity={1} onPress={() => setIsModalVisible(false)}>
                    <View style={styles.modalcontent}>
                        <Text style={styles.modaltext}>Congratulations!</Text>
                        <Text style={styles.modaltext}>You got this adjective:</Text>
                        <Text style={styles.modaltext}>Goofy</Text>
                    </View>
                </TouchableOpacity>
            </Modal>

            
        </SafeAreaView>
    )
}