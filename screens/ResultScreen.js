import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { fetchData } from "../api";
import { useRoute } from "@react-navigation/native";

const ResultScreen = () => {
  const route = useRoute();
  const { inputText } = route.params;

  const [result, setResult] = useState(null);

  console.log(inputText);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchData(inputText);
        console.log(data);
        setResult(data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [inputText]);

  return (
    <View style={styles.container}>
      {result && (
        <View>
          <Text style={[styles.headerText, { textAlign: "center" }]}>
            {result[0].word}
          </Text>
          <Text style={styles.textCommon}>
            <Text style={styles.mainText}>Definition :</Text>{" "}
            {result[0].meanings[0].definitions[0].definition}
          </Text>
          <Text style={styles.textCommon}>
            <Text style={styles.mainText}>Part of Speech :</Text>{" "}
            {result[0].meanings[0].partOfSpeech}
          </Text>
        </View>
      )}
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
    fontSize: 14,
    lineHeight: 18,
  },
  mainText: {
    fontFamily: "Major",
  },
});
