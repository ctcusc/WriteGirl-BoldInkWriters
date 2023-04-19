import { Text, ScrollView, View } from "react-native";
import { styles } from "./MonthlyExercisesStyles";

export default function MonthlyExercises() {

  const data = [
    {
      title: "Exercise 1",
      description: "Imagine you are running away...",
      viewed: false,
    },
    {
      title: "Exercise 2",
      description: "Imagine you are running away...",
      viewed: false,
    },
    {
      title: "Exercise 3",
      description: "Imagine you are running away...",
      viewed: true,
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleBold}>October</Text>
        <Text style={styles.titleRegular}> Exercises</Text>
      </View>
      <View style={styles.ringContainer}>
        <Text style={styles.ringTitle}>33%</Text>
      </View>
      {data.map((datum, i) => {
        return (
          <View
            key={i}
            style={
              datum.viewed
                ? styles.activeExerciseContainer
                : styles.exerciseContainer
            }
          >
            <Text
              style={
                datum.viewed ? styles.activeExerciseTitle : styles.exerciseTitle
              }
            >
              {datum.title}
            </Text>
            <Text
              style={
                datum.viewed
                  ? styles.activeExerciseDescription
                  : styles.exerciseDescription
              }
            >
              {datum.description}
            </Text>
          </View>
        );
      })}
    </ScrollView>
  );
}
