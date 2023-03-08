import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#F0EBE8",
  },
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: "22px",
  },
  titleBold: {
    fontSize: "27px",
    fontWeight: 700,
    color: "#0D4D5E",
  },
  titleRegular: {
    fontSize: "27px",
    fontWeight: 400,
    color: "#0D4D5E",
  },
  ringContainer: {
    width: "183px",
    height: "183px",
    marginTop: "10px",
    marginBottom: "40px",
    textAlign: "center",
    justifyContent: "center",
    // backgroundColor: "green",
    alignContent: "center",
  },
  progressRing: {
    height: "183px",
    width: "auto",
  },  
  ringTitle: {
    fontSize: "40px",
    fontWeight: 700,
    color: "#49A5AD",
  },
  exerciseContainer: {
    width: "330px",
    height: "104px",
    backgroundColor: "white",
    marginBottom: "16px",
    paddingLeft: "22px",
    paddingTop: "28px",
    borderRadius: "20px",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 4,
    shadowOpacity: 0.25,
  },
  titleRow: {
    flexDirection: "row",
  },
  activeExerciseContainer: {
    width: "330px",
    height: "104px",
    backgroundColor: "#0D4D5E",
    marginBottom: "16px",
    paddingLeft: "22px",
    paddingTop: "28px",
    borderRadius: "20px",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 4,
    shadowOpacity: 0.25,
  },
  exerciseTitle: {
    fontSize: "20px",
    fontWeight: 700,
    color: "#545454",
    paddingBottom: "3px",
  },
  activeExerciseTitle: {
    fontSize: "20px",
    fontWeight: 700,
    color: "white",
    paddingBottom: "3px",
  },
  exerciseDescription: {
    fontSize: "18px",
    fontWeight: 400,
    color: "#0D4D5E",
  },
  activeExerciseDescription: {
    fontSize: "18px",
    fontWeight: 400,
    color: "white",
  },
  arrContainer: {
    // paddingLeft: '2%',
    paddingTop: '2%',
  },
  backArrow: {
    // height: '100%',
    width: '10%',
    marginLeft: '3%',
    resizeMode: 'cover',
  },  
  playButton: {
    width: "auto",
    height: 10,
    resizeMode: 'cover',
    // borderTopLeftRadius: 30,
    // borderTopRightRadius: 30,
},
});

export { styles };
