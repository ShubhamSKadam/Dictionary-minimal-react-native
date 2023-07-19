import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";

const ResultScreen = () => {
  const route = useRoute();
  const { inputText } = route.params;

  console.log(inputText);

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Visual</Text>

      <View>
        <Text style={styles.textCommon}>
          <Text style={styles.mainText}>Definition :</Text> Any element of
          something that depends on sight.
        </Text>

        <Text style={styles.textCommon}>
          <Text style={styles.mainText}>Part of Speech :</Text> verb.
        </Text>
      </View>
    </View>
  );
};

export default ResultScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    padding: 24,
  },
  headerText: {
    color: "white",
    fontSize: 34,
    fontFamily: "Major",
  },
  textCommon: {
    color: "#d1d1d1",
    marginTop: 8,
    fontFamily: "Arvo",
    fontSize: 12,
    lineHeight: 18,
  },
  mainText: {
    fontFamily: "Major",
  },
});
