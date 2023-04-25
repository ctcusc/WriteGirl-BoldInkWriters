import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const circleContainerSize = width*0.4;
const exerciseContw = width*0.75;
const exerciseConth = height*0.11

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#F0EBE8",
    height: height,
  },
  arrContainer: {
    paddingTop: '2%',
  },
  backArrow: {
    // height: '100%',
    width: '100%',
    marginLeft: '3%',
    resizeMode: 'cover',
  },  
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: "8%",
    marginTop: "15%"
  },
  titleBold: {
    fontSize: width/15,
    // fontWeight: "bold",
    color: "#0D4D5E",
  },
  titleRegular: {
    fontSize: width/16,
    // fontWeight: 400,
    color: "#0D4D5E",
  },
  ringContainer: {
    width: circleContainerSize,
    height: circleContainerSize,
    marginBottom: "10%",
    textAlign: "center",
    justifyContent: "center",
    alignContent: "center",
  },
  progressRing: {
    height: circleContainerSize,
    width: "auto",
  },  
  exerciseContainer: {
    width: exerciseContw,
    height: exerciseConth,
    backgroundColor: "white",
    marginBottom: "5%",
    padding: "5%",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 4,
    shadowOpacity: 0.25,
  },
  activeExerciseContainer: {
    width: exerciseContw,
    height: exerciseConth,
    backgroundColor: "#0D4D5E",
    marginBottom: "5%",
    padding: "5%",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 4,
    shadowOpacity: 0.25,
  },
  exerciseTitle: {
    fontSize: exerciseContw*0.065,
    // fontWeight: "bold",
    color: "#545454",
    paddingBottom: 4,
  },
  activeExerciseTitle: {
    fontSize: exerciseContw*0.065,
    // fontWeight: "bold",
    color: "white",
    paddingBottom: 4,
  },
  exerciseDescription: {
    fontSize: exerciseContw*0.06,
    // fontWeight: 400,
    color: "#0D4D5E",
  },
  activeExerciseDescription: {
    fontSize: exerciseContw*0.06,
    // fontWeight: 400,
    color: "white",
  },
  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  
  playButton: {
  }, 

  backArrow:{
      position: 'relative',
      right: '45%',
      bottom: '5%',
      marginLeft: "10%",
      marginTop: '15%',
  },
  backText:{
      fontSize: 35,
      // fontWeight: 500,
      color: "#49A5AD",
  }
});

export { styles };
