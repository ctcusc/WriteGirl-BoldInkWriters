import { useState } from "react";
import {Text, View, Image, TextInput, TouchableOpacity, } from "react-native";

import styles from './AboutUsPageStyles.js';
const topImage = require('./AboutPageBackground.png');
const books = require('./AboutPageBooks.png');
const mainPage = require('./AboutUsMainPage.png');
const otherProg = require('./AboutUsOtherProg.png');
const moneyBag = require('./AboutUsMoneyBag.png');
const donateIcon = require('./AboutUsDonateIcon.png');

export default function AboutPage() {
    const [donation, setDonation] = useState("");
    return (
        <View style={styles.container}>
        <Image style={styles.top} source = {topImage}/>
        <View style={styles.middleLayout}>
            <Text style={styles.title}>
                About Us ✍🏻
            </Text>
            <Text style={styles.subtitle}>
                Empowering Young Women to Slay
            </Text>

            <View style={styles.bottomLayout}>
                <Text style={styles.bottomTitle}>
                    Learn More
                </Text>
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
                        <TouchableOpacity style={styles.mainPageButton}>
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

                <View style={styles.topDonateLayout}>
                    <Text style={styles.bottomTitle}>
                        Donate Now
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
                                    maxLength={10}
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
            </View>
        </View>
        
    </View>
    )
}