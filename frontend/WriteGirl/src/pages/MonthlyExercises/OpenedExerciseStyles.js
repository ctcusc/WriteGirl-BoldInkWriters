import { Center } from 'native-base';
import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const containerHeight = 3*height/5;
const containerWidth = 7*width/10

const styles = StyleSheet.create({
    container: {
        display: "flex",
        alignItems: "center",
        backgroundColor: "#F0EBE8",
        height: height,
    },
    backArrow: {
        // height: '100%',
        width: '10%',
        marginLeft: '3%',
        marginTop: '15%',
        resizeMode: 'cover',
    }, 
    arrContainer: {
        // paddingLeft: '2%',
        paddingTop: '2%',
    },

    exerciseContainer: {
        backgroundColor: "#FFF",
        height: containerHeight,
        width: containerWidth,
        marginTop: "10%",
        // width: "70%",
        // borderWidth: 2, 
        // borderColor: '#000',
        borderRadius: 30,
        shadowColor: "#E1E0DE",
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 4,
        shadowOpacity: 0.25,
    },
    img: {
        width: "auto",
        height: containerHeight/3,
        resizeMode: 'cover',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    title: {
        fontSize: width/15,
        // fontWeight: "bold",
        alignSelf: "center",
        flexWrap: "wrap",
        marginTop: containerHeight/15,
        marginBottom: containerHeight/20,
        marginHorizontal: 30,
    },
    description: {
        fontSize: width/25,
        flexWrap: "wrap",
        marginBottom: containerHeight/15,
        marginHorizontal: 30,
    },
    closeButton: {
        backgroundColor: '#C5DA01',
        height: 'auto',
        width: containerWidth,
        padding: 10,
        marginVertical: 40,
        marginBottom: 30,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 4,
        shadowOpacity: 0.2,
    },
    completeButton: {
        backgroundColor: '#49A5AD',
        height: 'auto',
        width: containerWidth,
        padding: 10,
        marginVertical: 40,
        marginBottom: 30,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 4,
        shadowOpacity: 0.2,
    },
    closeButtonText: {
        alignSelf: "center",
        fontSize: width/15,
        color: "#0D4D5E",
    },
    completeButtonText: {
        alignSelf: "center",
        fontSize: width/15,
        color: "white",
    },
    backArrow:{
        // position: 'relative',
        right: '45%',
        // bottom: '5%',
        // marginLeft: "0%",
        // marginTop: '30%',
    },
    backText:{
        fontSize: 35,
        // fontWeight: 500,
        color: "#49A5AD",
    },
    scroll: {
        marginBottom: "10%"
    }

})

export { styles };