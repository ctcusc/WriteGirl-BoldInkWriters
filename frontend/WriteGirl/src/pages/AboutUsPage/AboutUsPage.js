import {useEffect, useRef, useState } from "react";
import {Animated, Dimensions, Easing, Text, View, Image, TextInput, TouchableOpacity, ScrollView, Linking} from "react-native";
import styles from './AboutUsPageStyles.js';

const books = require('./AboutPageBooks.png');
const mainPage = require('./AboutUsMainPage.png');
const otherProg = require('./AboutUsOtherProg.png');
const donateIcon = require('./AboutUsDonateIcon.png');
const downArrow = require('./downArrow.png');
const upArrow = require('./upArrow.png');
// const fold = require('./flap.png');
const backArrow = require('./backArrow.png');

const HomeLink = 'https://www.writegirl.org';
const DonateLink = 'https://www.writegirl.org/donate';

//state that keeps track of if the bottom part is folded or not
let isFolded = false;

export default function AboutPage({navigation}) {
    //animation value to fold the bottom part down
    const foldMove = useRef(new Animated.Value(0)).current;
    const [image, setImage] = useState(downArrow);

    const move = () => {
        if (isFolded) {
            foldUp();
        }
        else {
            foldDown();
        }
        isFolded = !isFolded;
    };

    //two methods used for overall moving and functionality of animations
    const foldDown = () => {
        Animated.timing(foldMove, {
            toValue: Dimensions.get('window').height * 0.33,
            duration: 1000,
            useNativeDriver: true,
        }).start(() => {
            setImage(upArrow);
        });
    };

    const foldUp = () => {
        Animated.timing(foldMove, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true,
        }).start(() => {
            setImage(downArrow);
        });
    };

    

    return (
        <View style={styles.containerFull}>
        <TouchableOpacity onPress={() => {
            navigation.navigate('Home Tabs', { screen: 'Profile Page' });
        }}>
            <Text style={styles.backText}> ←</Text>
        </TouchableOpacity>
        <View style={styles.container}>
            <View style={styles.topLayout}>
                <TouchableOpacity style={styles.backArrowLayout} onPress={() => navigation.navigate('Home')}>
                    <Image source={backArrow} style={styles.backArrow}/>
                </TouchableOpacity>
                <Text style={styles.title}>
                    About Writegirl ✍️
                </Text>
                <Text style={styles.subtitle}>
                    WriteGirl is a Los Angeles-based
                    creative writing and mentoring
                    organization that spotlights the
                    power of a girl and her pen. At 
                    WriteGirl, we match girls with  
                    women writers who mentor them in 
                    creative writing. WriteGirl is a 
                    thriving community with 200 
                    volunteer women writers serving 
                    more than 500 girls annually. Every 
                    year, we produce dozens of <Text style={{textDecorationLine: 'underline'}}>workshops</Text>
                    , panel discussions and 
                    special events to help girls get 
                    creative, get through high school
                    and get to college! In fact, since
                    2001, 100% of our graduating 
                    seniors have entered college, many 
                    on full or partial scholarships.
                    {"\n\n"}
                    Through one-on-one mentoring and  
                    monthly creative writing workshops, 
                    girls are given techniques, insights 
                    and hot topics for great writing in all 
                    genres from professional women 
                    writers. Workshops and mentoring 
                    sessions explore poetry, fiction, 
                    creative non-fiction, songwriting, 
                    journalism,  
                    screenwriting,playwriting, persuasive writing,  
                    journal writing, editing and more.
                </Text>

                <Animated.View style={[styles.bottomLayout, {transform: [{translateY: foldMove}] }]}>
                    <View style={styles.bottomTitleLayout}>
                        <Text style={styles.bottomTitle}>
                            Learn More
                        </Text>
                        <TouchableOpacity style={styles.arrowStyle} onPress={ move }>
                            <Image source={image} style={styles.arrow}/>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.learnMoreLayout}>
                        <View style={styles.learnMoreButton}>
                            <TouchableOpacity style={styles.booksButton} onPress={() => Linking.openURL(HomeLink)}>
                                <Image source={books} style={styles.booksImage}/>
                            </TouchableOpacity>
                            <Text style={styles.iconText}>
                                Books
                            </Text>
                        </View>
                        <View style={styles.learnMoreButton}>
                            <TouchableOpacity style={styles.mainPageButton} onPress={() => Linking.openURL(HomeLink)}>
                                <Image source={mainPage} style={styles.mainPageImage}/>
                            </TouchableOpacity>
                            <Text style={styles.iconText}>
                                Main Page
                            </Text>
                        </View>
                        <View style={styles.learnMoreButton}>
                            <TouchableOpacity style={styles.otherProgButton} onPress={() => Linking.openURL(HomeLink)}>
                                <Image source={otherProg} style={styles.otherProgImage}/>
                            </TouchableOpacity>
                            <Text style={styles.iconText}>
                                Other Prog
                            </Text>
                        </View>
                    </View>

                    <View style={styles.bottomBottomTitleLayout}>
                        <Text style={styles.bottomTitle}>
                            Donate Now
                        </Text>
                    </View>

                    <View style={styles.bottomDonateLayout}>
                        <Text style={styles.donationDescription}>
                            Like our services? Donate now to ensure we can continue hosting events, and inviting speakers!
                        </Text>
                        <TouchableOpacity style={styles.donateButton} onPress={() => Linking.openURL(DonateLink)}>
                            <Image source={donateIcon} style={styles.donateImage}/>
                        </TouchableOpacity>
                    </View>
                </Animated.View>
            </View>

            
        </View>
        </View>
    )
}