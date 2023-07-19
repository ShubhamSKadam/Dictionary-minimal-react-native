import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";
const InputScreen = () => {
  const [inputText, setInputText] = useState("");

  const inputTextHandler = (data) => {
    setInputText(data);
  };

  const navigation = useNavigation();

  const onPressHandler = () => {
    if (inputText.length <= 1) {
      // Replace the below error with alert
      Alert.alert("Oops", "Is this a new word 🤔 ?", [
        { text: "Search Again", onPress: () => console.log("OK Pressed") },
      ]);
    } else {
      navigation.navigate("Result", { inputText: inputText });
    }
  };

  return (
    <View style={styles.container}>
      {/* Input Text Box */}
      <View style={styles.inputTextContainer}>
        <TextInput
          placeholder="Search..."
          placeholderTextColor="#999999"
          style={styles.textInput}
          onChangeText={inputTextHandler}
        />
      </View>

      <Pressable style={styles.logoContainer} onPress={onPressHandler}>
        <AntDesign name="rightcircleo" size={32} color="#999999" />
      </Pressable>
    </View>
  );
};

export default InputScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  inputTextContainer: {
    borderBottomWidth: 2,
    borderBottomColor: "white",
    width: "50%",
  },
  textInput: {
    color: "white",
    fontFamily: "Major",
    fontSize: 18,
    paddingBottom: 2,
  },
  logoContainer: {
    marginTop: 18,
  },
});
