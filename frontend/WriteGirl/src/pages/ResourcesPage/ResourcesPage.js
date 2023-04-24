import {styles} from './ResourcesPageStyles.js';
import { Text, Image, TouchableOpacity, View, Animated, state, ScrollView} from "react-native";
import {useState, useRef} from 'react';
const backButtonImage = require('../../../assets/BackButton.png');
const samplePepTalk1 = "Relax and don't forget to breathe :)";
const samplePepTalk2 = "Keep going, you're on the write track!";
const samplePepTalk3 = "I like big books and I cannot lie."
let sampleNumber = 0;

export default function ResourcesPage() {
    const [pepTalk, setPepTalk] = useState(samplePepTalk1);
    const fadeAnim = useRef(new Animated.Value(1)).current;
    const springAnim = useRef(new Animated.Value(1)).current;

    const animationStep = () => {
        generatePepTalk();
        Animated.sequence([
            Animated.timing(springAnim, {
                toValue: 0.5,
                duration: 50,
                useNativeDriver: true,
            }),
            Animated.parallel([
                Animated.timing(fadeAnim, {
                    toValue: 1,
                    duration: 1000,
                    useNativeDriver: true,
                }),
                Animated.spring(springAnim, {
                    toValue: 1,
                    duration: 400,
                    friction: 2,
                    tension: 10,
                    useNativeDriver: true,
                }),
            ]),
        ]).start();
    };

    const beginAnimation = () => {
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true,
        }).start(() => animationStep());
    };

    // const bounceAnim = useRef(new Animated.Value(0)).current;

    const generatePepTalk = () => {
        sampleNumber++;
        sampleNumber %= 3;
        switch (sampleNumber) {
            case 0:
                setPepTalk(samplePepTalk1);
                break;
            case 1:
                setPepTalk(samplePepTalk2);
                break;
            case 2:
                setPepTalk(samplePepTalk3);
                break;
        }
    };

    return (
        <ScrollView 
        style = {{
            backgroundColor: "#49a5ad",
        }}
        contentContainerStyle = {styles.container}>

            <Text style={styles.title}>
                Resources 
            </Text>
            <View style={styles.tipsView}>
                <Text style={styles.tipTitle}>
                    Writer Tip of the Day
                </Text>
                <Text style={styles.tip}>
                    Remember to always sharpen your pencils!
                </Text>
            </View>

            <View style={styles.pepTalkView}>
                <Text style={styles.tipTitle}>
                    Tiny Pep-Talks
                </Text>
                <Animated.Text style={[styles.pepTalk,
                    {
                        opacity: fadeAnim,
                        transform: [{scale: springAnim}],
                    },
                ]}>
                    { pepTalk }
                </Animated.Text>
                <TouchableOpacity style={styles.generateButton} onPress={beginAnimation}>
                    <Text style={styles.generateText}>
                        Generate!
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}