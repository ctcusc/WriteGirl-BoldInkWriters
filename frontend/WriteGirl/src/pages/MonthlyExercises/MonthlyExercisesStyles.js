import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
  },
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: "16.5pt",
    marginTop: "15%"
  },
  titleBold: {
    fontSize: "20.25pt",
    fontWeight: 700,
    color: "#0D4D5E",
  },
  titleRegular: {
    fontSize: "27px",
    fontWeight: 400,
    color: "#0D4D5E",
  },
  ringContainer: {
    width: "18%",
    height: "18%",
    marginBottom: "40px",
    textAlign: "center",
    justifyContent: "center",
    backgroundColor: "green",
  },
  ringTitle: {
    fontSize: "40px",
    fontWeight: 700,
    color: "#49A5AD",
  },
  exerciseContainer: {
    width: "70%",
    height: "30%",
    backgroundColor: "white",
    marginBottom: "5%",
    paddingLeft: "5%",
    paddingTop: "5%",
    borderRadius: "20px",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 4,
    shadowOpacity: 0.25,
  },
  activeExerciseContainer: {
    width: "70%",
    height: "30%",
    backgroundColor: "#49A5AD",
    marginBottom: "5%",
    paddingLeft: "5%",
    paddingTop: "5%",
    borderRadius: "20px",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 4,
    shadowOpacity: 0.25,
  },
  exerciseTitle: {
    fontSize: "20px",
    fontWeight: 700,
    color: "#73857B",
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
    color: "#49A5AD",
  },
  activeExerciseDescription: {
    fontSize: '18px',
    fontWeight: 400,
    color: "white",
  },
});

export { styles };
