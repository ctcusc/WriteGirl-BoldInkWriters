import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#49a5ad",
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },

    backButton: {
        width: "33px",
        height: "27px",
        marginRight: "85%",
        marginTop: "20px",
        position: "absolute",
    },

    backImage: {
        resizeMode: 'stretch',
        width: "100%",
        height: "100%",
    },

    title: {
        position: "absolute",
        width: "133px",
        height: "32px",
        marginTop: "5%",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "20px",
        color: "#fff",
        textAlign: "center",
    },

    tipsView: {
        backgroundColor: "#fff",
        borderRadius: "30px",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "220px",
        height: "200px",
        marginTop: "12%",
        position: "absolute",
    },

    tipTitle: {
        color: "#0d4d5e",
        fontSize: "20px",
        fontWeight: 450,
        position: "absolute",
        textAlign: "center",
        width: "170px",
        height: "51px",
        marginTop: "10%",
    },

    tip: {
        color: "#0d4d5e",
        width: "194px",
        height: "66px",
        fontStyle: "normal",
        fontWeight: 200,
        fontSize: "18px",
        textAlign: "center",
        position: "absolute",
        marginTop: "40%",
    },

    pepTalkView: {
        position: "absolute",
        width: "220px",
        height: "200px",
        marginTop: "54%",
        backgroundColor: "#fff",
        borderRadius: "30px",
        justifyContent: "flex-start",
        alignItems: "center",
    },

    pepTalk: {
        color: "#0d4d5e",
        width: "194px",
        height: "66px",
        fontStyle: "normal",
        fontWeight: 200,
        fontSize: "18px",
        textAlign: "center",
        position: "absolute",
        marginTop: "30%",
    },

    generateButton: {
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: "30px",
        paddingVertical: "5px",
        position: "absolute",
        width: "140px",
        height: "33px",
        marginTop: "70%",

        backgroundColor: "#c5da01",
        borderRadius: "20px",
    },

    generateText: {
        width: "90px",
        height: "23px",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "20px",
        color: "#0d4d5e",
        flex: "none",
        textAlign: "center",
        flexGrow: 0,
    },


});

export { styles };