import { StatusBar } from "expo-status-bar";
import {StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, } from "react-native";
import logo from '../assets/adaptive-icon.png';

export default function Sign_In_Page() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <View style={StyleSheet.container}>
            <Image style={styles.image} source={require(logo)} />
            <StatusBar style="auto" />
            <Text style={styles.signInText}>
                /n
                Sign-In
            </Text>
            <Text style={styles.emailpassText}>
                /n
                Email
            </Text>
            <View style={styles.TextInput}>
                <TextInput
                    style={styles.TextInput}
                    placeholder=""
                    placeholderTextColor = "#003f5c"
                    onChangeText={(email) => setEmail(email)}
                />
            </View>
            <Text style={styles.emailpassText}>
                /n
                Password
            </Text>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder=""
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                />
            </View>

            <TouchableOpacity>
                <Text style={styles.forgot_button}>Forgot your Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text style={styles.createAccount_button}>Create an account</Text>
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
        marginBotton: 40,
    },

    signInText: {
        fontFamily: "sans-serif",
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
        textAlign: "left",
    },

    emailpassText: {
        fontFamily: "sans-serif",
        fontSize: 16,
        fontWeight: "bold",
        color: 'white',
        textAlign: "left",
        textDecorationLine: 'underline',
    },

    inputView: {
        backgroundColor: "#FFFFFF",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
    },

    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
    },

    forgot_button: {
        height: 30,
        marginBottom: 30,
        textAlign: "right",
    },
    
    createAccount_button: {
        height: 30,
        marginBottom: 30,
        textAlign: "right",
    },

    loginBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "E5A7A0",
    },
});