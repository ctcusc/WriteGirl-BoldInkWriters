import { useState } from "react";
import {Animated, Text, View, Image, TextInput, TouchableOpacity, ScrollView} from "react-native";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebaseConfig";

import styles from './AboutUsPageStyles.js';
const books = require('./AboutPageBooks.png');
const mainPage = require('./AboutUsMainPage.png');
const otherProg = require('./AboutUsOtherProg.png');
const moneyBag = require('./AboutUsMoneyBag.png');
const donateIcon = require('./AboutUsDonateIcon.png');
const arrow = require('./AboutUsArrow.png');
const fold = require('./AboutUsFold.png');

export default function AboutPage({ navigation }) {
    const [donation, setDonation] = useState("");
    const [isOpenBottom, setIsOpenBottom] = useState(false);
    const foldBottom = () => setIsOpenBottom(isOpenBottom != isOpenBottom);


    // sign out user
    const onClick = async () => {
      await signOut(auth).then(() => {
        // Sign-out successful.
        // console.log("sign out successful")
        navigation.navigate('Sign In')
      }).catch((error) => {
        // An error happened.
        console.log("log out error:", error)
      });
    }


    return (
        <View style={styles.containerFull}>
        <TouchableOpacity onPress={() => {
            navigation.navigate('Home Tabs', { screen: 'Profile Page' });
        }}>
            <Text style={styles.backText}> ←</Text>
        </TouchableOpacity>
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.topLayout}>
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
            </ScrollView>

            <Animated.View style={styles.bottomLayout}>
                <View style={styles.bottomTitleLayout}>
                    <Text style={styles.bottomTitle}>
                        <Text style={{fontWeight: "bold"}}>Learn</Text> More
                    </Text>
                    <TouchableOpacity style={styles.arrowStyle} onPress={foldBottom}>
                        <Image source={arrow} style={styles.arrow}/>
                    </TouchableOpacity>
                </View>

                <View style={styles.learnMoreLayout}>
                    <View style={styles.learnMoreButton}>
                        <TouchableOpacity style={styles.booksButton}>
                            <Image source={books} style={styles.booksImage}/>
                        </TouchableOpacity>
                        <Text style={styles.iconText}>
                            Books
                        </Text>
                    </View>
                    <View style={styles.learnMoreButton}>
                        <TouchableOpacity style={styles.mainPageButton} onPress={() => {onClick()}}>
                            <Image source={mainPage} style={styles.mainPageImage}/>
                        </TouchableOpacity>
                        <Text style={styles.iconText}>
                            Main Page
                        </Text>
                    </View>
                    <View style={styles.learnMoreButton}>
                        <TouchableOpacity style={styles.otherProgButton}>
                            <Image source={otherProg} style={styles.otherProgImage}/>
                        </TouchableOpacity>
                        <Text style={styles.iconText}>
                            Other Prog
                        </Text>
                    </View>
                </View>

                <View style={styles.bottomBottomTitleLayout}>
                    <Text style={styles.bottomTitle}>
                        <Text style={{fontWeight: "bold"}}>Donate</Text> Now
                    </Text>
                    <View style={styles.donateInputLayout}>
                        <Image source={moneyBag} style={styles.moneyBag}/>
                        <Text style={styles.dollarSign}>
                            $
                        </Text>
                        <TextInput style={styles.donateInput}
                            placeholderTextColor="#FFF"
                            onChangeText={(donation) => setDonation(donation)}
                            keyboardType="numeric"
                        />
                    </View>
                </View>

                <View style={styles.bottomDonateLayout}>
                    <Text style={styles.donationDescription}>
                        Like our services? Donate now to ensure we can continue hosting events, and inviting speakers!
                    </Text>
                    <TouchableOpacity style={styles.donateButton}>
                        <Image source={donateIcon} style={styles.donateImage}/>
                    </TouchableOpacity>
                </View>
            </Animated.View>
        </View>
        </View>
    )
}