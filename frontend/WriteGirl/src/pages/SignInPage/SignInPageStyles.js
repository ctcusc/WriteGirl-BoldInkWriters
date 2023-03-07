import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');


const styles = StyleSheet.create({
    container: {
        // backgroundColor: '#0D4D5E',
        display: 'flex',
        height: height,
        width: width,
    },
    contentContainer: {
        padding: 40,
        alignItems: "center",
    }, 
    screensaverBg: {
        display: 'flex',
        opacity: 0.7,
        height: height,
        width: width,
    },
    image: {
        marginBottom: 40,
    },
    inputView: {
        backgroundColor: "#fff",
        width: "60%",
        height: "8%",
        marginBottom: "1%",
        alignItems: "center",
        borderColor: "#000",
        borderWidth: 2,
    },
    TextInput: {
        height: "100%",
        width: "100%",
        flex: 1,
        padding: 10,
        textAlign: "center",
    },
    subButtons: {
        marginBottom: "1%",
        fontSize: 16,
        alignSelf: "flex-end",
        color: "#fff",
        marginRight: "20%",
    },
    subButtonText: {
        fontSize: 16,
        color: "#fff",
        textDecorationLine: "underline",
    },
    loginBtn: {
        width: "40%",
        borderRadius: 40,
        height: "7%",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "10%",
        backgroundColor: "#C5DA01",
        color: '#0D4D5E',
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
        marginLeft: "20%",
        alignSelf: "flex-start",
    },
    subTitleText: {
        fontWeights: "bold",
        color: "#fff",
        fontSize: 25,
        alignSelf: "flex-start",
        marginLeft: "20%",
        marginTop: "5%",
    },
    
});

export { styles };