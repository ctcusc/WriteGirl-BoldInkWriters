import { StyleSheet, Dimensions } from 'react-native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default StyleSheet.create({

container: {
    height: height,
    width: width,
    alignItems: "center",
    justifyContent: "flex-start",
},

containerFull: {
    height: "100%",
    width: "100%",
    // alignItems: "center",
    justifyContent: "flex-start",
},

topLayout: {
    width: width,
    height: height,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    backgroundColor: "#F0EBE8",
    zIndex: 1,
},

title: {
    textAlign: "left",
    marginTop: "7%",
    marginLeft: "10%",
    color: "#0D4D5E",
    fontSize: 30,
    // fontWeight: 700,
},

subtitle: {
    color: "#0D4D5E",
    marginLeft: "10%",
    fontSize: 14,
    marginBottom: "7%",
    marginRight: "10%",
    marginTop: "5%",
},

bottomLayout: {
    position: 'absolute',
    backgroundColor: "#FFF",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    height: height * 0.5,
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginTop: height * 0.5,
    zIndex: 2,
},

bottomTitleLayout: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    height: "15%",
    width: "90%",
    marginTop: '5%',
    marginLeft: "5%",
    marginRight: "5%",
},

bottomBottomTitleLayout: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    height: "15%",
    width: "90%",
    marginLeft: "5%",
    marginRight: "5%",
},

bottomTitle: {
    color: "#0d4d5e",
    height: "100%",
    width: '50%',
    // adjustsFontSizeToFit: "true",
    allowFontScaling: "true",
    // fontWeight: 700,
    fontSize: 30,
},

arrowStyle: {
    width: 30,
    height: 15,
    marginLeft: "35%",
},

arrow: {
    height: "100%",
    width: "100%",
    resizeMode: 'contain',
},

learnMoreLayout: {
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    height: "30%",
    width: "60%",
    // marginLeft: "20%",
},

learnMoreButton: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    height: 81,
    width: 81,
    marginRight: "5%",
    marginLeft: "5%",
    resizeMode: "contain"
},

iconText: {
    fontSize: 12,
    color: "#0d4d5e",
},

topButton: {
    borderRadius: 15,
    backgroundColor: "#f0f5bb",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
},

booksButton: {
    borderRadius: 15,
    backgroundColor: "#f0f5bb",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
},

booksImage: {
    height: "80%",
    width: "80%",
    resizeMode: 'contain',
},

mainPageButton: {
    backgroundColor: "#f6ed93",
    borderRadius: 15,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
},

mainPageImage: {
    height: "80%",
    width: "80%",
    resizeMode: 'contain',
},

otherProgButton: {
    backgroundColor: "#f7db93",
    borderRadius: 15,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
},

otherProgImage: {
    height: "80%",
    width: "80%",
    resizeMode: 'contain',
},

donateInputLayout: {
    flexDirection: "row",
    backgroundColor: "#f7ed93",
    borderRadius: 90,
    justifyContent: "flex-start",
    alignItems: "center",
    height: 35,
    width: 120,
    marginLeft: "40%",
},

moneyBag: {
    padding: 10,
    margin: "5%",
    height: "75%",
    width: "25%",
    backgroundColor: "#f0f5bb",
    resizeMode: "stretch",
    borderRadius: 90,
},

dollarSign: {
    color: "#49a5ad",
    fontSize: 16,
},

donateInput: {
    color: "#49a5ad",
    width: "70%",
},

bottomDonateLayout: {
    flexDirection: "row",
    marginLeft: "5%",
    marginRight: "5%",
    // height: "20%",
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginTop: "1%",
},

donationDescription: {
    color: "#49a5ad",
    fontSize: 18,
    marginRight: "1%",
    width: "60%"
},

donateButton: {
    backgroundColor: "#c5da01",
    height: 66,
    width: 109,
    borderRadius: 90,
    alignItems: "center",
    justifyContent: "center",
    marginRight: "5%",
},

donateImage: {
    height: "60%",
    width: "60%",
    backgroundColor: "#f0f5bb",
    borderRadius: 100,
},

backArrow:{
    // position: 'relative',
    // right: '45%',
    // bottom: '5%',
    marginLeft: "5%",
    width: "10%",
    marginTop: "10%"
  },
backText:{
    fontSize: 35,
    //fontWeight: 500,
    color: "#359FAB",
    // borderColor: '#F0EBE8',
    // backgroundColor: '#F0EBE8',
}

});