import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        // paddingTop: "10%",
        backgroundColor: "#49a5ad",
        flex: 1,
        // flexDirection: 'column',
        alignItems: 'center',
        // justifyContent: 'flex-start',
        // height: "150%",
    },

    backButton: {
        width: 25,
        height: 20,
        marginRight: "85%",
        marginTop: 15,
        position: "absolute",
    },

    backImage: {
        resizeMode: 'stretch',
        width: "100%",
        height: "100%",
    },

    title: {
        marginTop: "20%",
        // position: "absolute"
        // marginTop: "5%",
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: 30,
        color: "#fff",
        textAlign: "center",
    },

    tipsView: {
        backgroundColor: "#fff",
        borderRadius: 30,
        justifyContent: "flex-start",
        alignItems: "center",
        width: "80%",
        height: "35%",
        marginTop: "5%",
    },

    tipTitle: {
        color: "#0d4d5e",
        fontSize: 25,
        fontWeight: 450,
        position: "absolute",
        textAlign: "center",
        width: 170,
        height: 51,
        marginTop: "10%",
    },

    tip: {
        color: "#0d4d5e",
        width: 194,
        height: 66,
        fontStyle: "normal",
        fontWeight: 200,
        fontSize: 23,
        textAlign: "center",
        position: "absolute",
        marginTop: "35%",
    },

    pepTalkView: {
        // position: "absolute",
        width: "80%",
        height: "35%",
        marginTop: "10%",
        backgroundColor: "#fff",
        borderRadius: 30,
        justifyContent: "flex-start",
        alignItems: "center",
    },

    pepTalk: {
        color: "#0d4d5e",
        maxWidth: "70%",
        // width: 194,
        // height: 66,
        fontStyle: "normal",
        fontWeight: 200,
        fontSize: 20,
        textAlign: "center",
        position: "absolute",
        marginTop: "30%",
    },

    generateButton: {
        // justifyContent: "center",
        // alignItems: "center",
        height: 'auto',
        // paddingHorizontal: 30,
        // paddingVertical: 5,
        // position: "absolute",
        // width: "40%",
        // height: 25,
        marginTop: "55%",
        // marginBottom: "5%",

        backgroundColor: "#c5da01",
        borderRadius: 15,
    },

    generateText: {
        // width: 90,
        // height: 23,
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: 20,
        color: "#0d4d5e",
        flex: "none",
        textAlign: "center",
        flexGrow: 0,
        paddingVertical: 10,
        paddingHorizontal: 20
    },


});

export { styles };