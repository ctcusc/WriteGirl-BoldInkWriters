import { StyleSheet } from 'react-native';

export default StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "flex-start",
},

top: {
    width: "100%",
    height: "25%",
    marginBottom: "5%",
},

middleLayout: {
    maginTop: "5%",
    width: "100%",
    height: "75%",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    backgroundColor: "#49A5AD",
    borderRadius: 30,
},

title: {
    textAlign: "left",
    marginTop: "7%",
    marginLeft: "10%",
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
},

subtitle: {
    color: "#FFF",
    marginLeft: "10%",
    fontSize: 12,
    marginBottom: "7%",
},

bottomLayout: {
    backgroundColor: "#FFF",
    borderRadius: 30,
    height: "80%",
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "flex-start",
},

bottomTitle: {
    color: "#0d4d5e",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: "7%",
    marginLeft: "10%",
},

learnMoreLayout: {
    marginLeft: "33%",
    flexDirection: "row",
    alignItems: "center",
    marginTop: "5%",
    justifyContent: "center",
    height: "30%",
    width: "30%",
},

learnMoreButton: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    marginLeft: "20%",
    height: "50%",
    width: "50%",
},

iconText: {
    fontSize: 10,
    color: "0d4d5e",
},

booksButton: {
    borderRadius: 15,
    backgroundColor: "#f0f5bb",
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
},

booksImage: {
    padding: 10,
    margin: 5,
    height: "70%",
    width: "70%",
    resizeMode: 'stretch',
},

mainPageButton: {
    backgroundColor: "#f6ed93",
    borderRadius: 10,
},

mainPageImage: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
},

otherProgButton: {
    backgroundColor: "#f7db93",
    borderRadius: 10,
},

otherProgImage: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
},

topDonateLayout: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    height: "30%",
    width: "100%",
},

donateInputLayout: {
    flexDirection: "row",
    backgroundColor: "#f7ed93",
    borderRadius: 90,
    justifyContent: "flex-start",
    alignItems: "center",
    height: "40%",
    width: "30%",
    marginLeft: "10%",
    marginTop: "7%",
},

moneyBag: {
    padding: 5,
    height: "20%",
    width: "20%",
    backgroundColor: "#f0f5bb",
    resizeMode: "stretch",
    borderRadius: 90,
},

dollarSign: {
    color: "#49a5ad",
},

donateInput: {
    color: "#49a5ad",
    width: "70%",
},

bottomDonateLayout: {
    flexDirection: "row",
    marginLeft: "10%",
    marginRight: "10%",
    height: "20%",
    width: "80%",
},

donationDescription: {
    color: "#49a5ad",
    fontSize: 10,
},

donateButton: {
    backgroundColor: "#c5da01",
    height: "80%",
    width: "20%",
    borderRadius: 70,
    alignItems: "center",
    justifyContent: "center",
},

donateImage: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 35,
    resizeMode: 'stretch',
    backgroundColor: "#f0f5bb",
    borderRadius: 90,
},
});