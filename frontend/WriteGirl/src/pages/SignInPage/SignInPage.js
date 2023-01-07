import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, } from "react-native";
import { useState } from "react";
// const logo = require('...../assets/adaptive-icon.png');

export default function Sign_In_Page() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <View style={styles.container}>
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
            <TouchableOpacity style={styles.subButtons}>
                <Text style={styles.subButtonText}>Forgot your Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.subButtons}>
                <Text style={styles.subButtonText}>Create An Account</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginBtn}>
                <Text style={styles.loginText}>Start Writing</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#6D8076",
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        marginBottom: 40,
    },
    inputView: {
        backgroundColor: "#fff",
        width: "70%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
        borderColor: "#000",
        borderWidth: 2,
    },
    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
    },
    subButtons: {
        marginBottom: "1%",
        fontSize: 16,
        alignSelf: "flex-end",
        color: "#fff",
        marginRight: "15%",
    },
    subButtonText: {
        fontSize: 16,
        color: "#fff",
        textDecorationLine: "underline",
    },
    loginBtn: {
        width: "50%",
        borderRadius: 40,
        height: "5%",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "10%",
        backgroundColor: "#E5A7A0",
    },
    loginText: {
        fontWeights: "bold",
        color: "#fff",
        fontSize: 23,
    },
    titleText: {
        fontWeights: "bold",
        color: "#fff",
        fontSize: 30,
        marginTop: "15%",
        marginLeft: "15%",
        alignSelf: "flex-start",
    },
    subTitleText: {
        fontWeights: "bold",
        color: "#fff",
        fontSize: 25,
        alignSelf: "flex-start",
        marginLeft: "15%",
        marginTop: "5%",
    },
});