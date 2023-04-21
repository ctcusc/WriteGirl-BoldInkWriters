import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, ImageBackground, SafeAreaView} from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useState, useCallback } from "react";
import { styles } from "./SignInPageStyles.js";
import { Toast, useToast, Box, NativeBaseProvider} from "native-base";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebaseConfig";
import {CreateAccountPage} from "../" 


// const logo = require('...../assets/adaptive-icon.png');

export default function Sign_In_Page({navigation}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const toast = useToast();

    const clearForm = useCallback(() => {
      setEmail("")
      setPassword("")
    }, [])

    const onSubmit = async () => {
      // SIGN IN USER
      await signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // sign in successful
        const user = userCredential.user;
        clearForm()
        navigation.navigate("Home Tabs")
      })
      .catch((error) => {
        const errorCode = error.code;
        const msg = "Invalid email or password"
        if (!Toast.isActive("error-toast")) {
          Toast.show({
            id: "error-toast",
            placement: "top",
            render: () => {
                return <Box style={styles.errorToast}>
                    {msg}
                </Box>;
            }
          });
        }
      })
    }

    return (         
      <NativeBaseProvider>
        <SafeAreaView >
            <KeyboardAwareScrollView style={styles.container}>
            <ImageBackground source={require('./background.png')} resizeMode="cover" style={styles.screensaverBg}>

            <View style={styles.contentContainer}>
                {/* <Image style={styles.image} source={logo} />  */}
                <View style={styles.imageView}>
                    <Image source={require('./logo.png')} style={styles.image}/>
                </View>
                <Text style ={styles.titleText}>Sign-In</Text>
                <Text style={styles.subTitleText}>Email</Text>
                <StatusBar style="auto" />
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholderTextColor="#003f5c"
                        onChangeText={(email) => setEmail(email)}
                        value={email}
                    />
                </View>
                <Text style={styles.subTitleText}>Password</Text>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholderTextColor="#003f5c"
                        secureTextEntry={true}
                        onChangeText={(password) => setPassword(password)}
                        value={password}
                    />
                </View>
                <TouchableOpacity style={styles.subButtons} >
                    <Text style={styles.subButtonText}>Forgot your Password?</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.subButtons} onPress={() => navigation.navigate("Create Account")}>
                    <Text style={styles.subButtonText}>Create An Account</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.loginBtn}  onPress={() => {onSubmit()}}>
                    <Text style={styles.loginText}>Start Writing</Text>
                </TouchableOpacity>
            </View>  
            </ImageBackground>
            </KeyboardAwareScrollView> 
        </SafeAreaView>  
      </NativeBaseProvider>  
    );
}