import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, ImageBackground, SafeAreaView} from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useState } from "react";
import {CreateAccountPage} from "../" 
import { styles } from "./SignInPageStyles.js";

// const logo = require('...../assets/adaptive-icon.png');

export default function Sign_In_Page({navigation}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (           
        <SafeAreaView >
            <KeyboardAwareScrollView style={styles.container}>
            <ImageBackground source={require('./background.png')} resizeMode="cover" style={styles.screensaverBg}>

            <View style={styles.contentContainer}>
                {/* <Image style={styles.image} source={logo} />  */}
                <Text style ={styles.titleText}>Sign-In</Text>
                <Text style={styles.subTitleText}>Email</Text>
                <StatusBar style="auto" />
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholderTextColor="#003f5c"
                        onChangeText={(email) => setEmail(email)}
                    />
                </View>
                <Text style={styles.subTitleText}>Password</Text>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholderTextColor="#003f5c"
                        secureTextEntry={true}
                        onChangeText={(password) => setPassword(password)}
                    />
                </View>
                <TouchableOpacity style={styles.subButtons} >
                    <Text style={styles.subButtonText}>Forgot your Password?</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.subButtons} onPress={() => navigation.navigate("Create Account")}>
                    <Text style={styles.subButtonText}>Create An Account</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.loginBtn}  onPress={() => navigation.navigate("Home Tabs")}>
                    <Text style={styles.loginText}>Start Writing</Text>
                </TouchableOpacity>
            </View>  
            </ImageBackground>
            </KeyboardAwareScrollView> 
        </SafeAreaView>      
    );
}