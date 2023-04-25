import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');


const styles = StyleSheet.create({
    bigView: {
        backgroundColor: '#B1E5D9',
    },
    container: {
        display: 'flex',
        height: height,
        width: width,
    },
    contentContainer: {
        display: 'flex',
        padding: 40,
        alignItems: "flex-start",
        justifyContent: 'flex-start',
        height: height,
        width: width,
    }, 
    screensaverBg: {
        display: 'flex',
        opacity: 1,
        height: height,
        width: width,
    },
    imageView: {
        width: '80%',
        height: 104,
        // marginLeft: '20%',
        marginTop: '20%',
        alignSelf: 'center'
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    titleText: {
        // fontWeight: 700,
        color: "#fff",
        fontSize: 30,
        marginTop: "10%",
        marginLeft: "10%",
        // marginBottom: '5%',
    },
    subTitleText: {
        color: "#fff",
        fontSize: 25,
        alignSelf: "flex-start",
        marginLeft: "10%",
        marginTop: '5%',
    },
    TextInput: {
        // placeholderTextColor: "#003f5c",
        backgroundColor: '#fff',
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 15,
        width: 250,
        padding: 10,
        textAlign: "center",
        marginLeft: '10%',
    },
    subButtons: {
        // marginBottom: "1%",
        fontSize: 16,
        alignSelf: "flex-end",
        color: "#fff",
        marginRight: "10%",
        marginTop: '3%',
    },
    subButtonText: {
        fontSize: 16,
        color: "#000",
        textDecorationLine: "underline",
    },
    loginBtn: {
        width: "60%",
        borderRadius: 25,
        height: "5%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#C5DA01",
        color: '#0D4D5E',
        marginLeft: '20%',
        marginTop: '10%',
    },
    loginText: {
        // fontWeight: 400,
        color: "#0d4d5e",
        fontSize: 25,
    },
    
});

export { styles };