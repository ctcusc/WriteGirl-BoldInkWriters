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
        display: 'flex',
        padding: 40,
        alignItems: "flex-start",
        justifyContent: 'flex-start',
        height: height,
        width: width,
    }, 
    screensaverBg: {
        display: 'flex',
        opacity: 0.7,
        height: height,
        width: width,
    },
    imageView: {
        width: '60%',
        height: '139px',
        marginLeft: '20%',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    titleText: {
        fontWeight: 700,
        color: "#fff",
        fontSize: 30,
        marginTop: "5%",
        marginLeft: "10%",
        marginBottom: '5%',
    },
    subTitleText: {
        fontWeights: "bold",
        color: "#fff",
        fontSize: 25,
        alignSelf: "flex-start",
        marginLeft: "10%",
        marginTop: '5%',
    },
    TextInput: {
        placeholderTextColor: "#003f5c",
        backgroundColor: '#fff',
        borderColor: '#000',
        borderWidth: 2,
        borderRadius: 15,
        height: '40px',
        width: '150%',
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
        marginTop: '2%',
    },
    subButtonText: {
        fontSize: 16,
        color: "#000",
        textDecorationLine: "underline",
    },
    loginBtn: {
        width: "60%",
        borderRadius: 25,
        height: "40px",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#C5DA01",
        color: '#0D4D5E',
        marginLeft: '20%',
        marginTop: '5%',
    },
    loginText: {
        fontWeight: 600,
        color: "#0d4d5e",
        fontSize: '100%',
    },
    
});

export { styles };