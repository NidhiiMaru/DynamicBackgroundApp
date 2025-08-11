import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  const [color, setColor] = useState(""); // stores the input value
  const [bgColor, setBgColor] = useState("white"); // stores the background color

  const changeBackground = () => {
    const trimmedColor = color.trim(); // remove spaces

    if (trimmedColor === "") {
      setBgColor("white"); // empty → white
    } else {
      setBgColor(trimmedColor.toLowerCase()); // lowercase so "Red" works
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <Text style={styles.title}>🎨 Dynamic Background App</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter color (e.g., Red, blue, #00ff00)"
        value={color}
        onChangeText={setColor}
      />

      <Button title="Change Background" onPress={changeBackground} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // takes full screen
    alignItems: "center", // center horizontally
    justifyContent: "center", // center vertically
    padding: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: "bold",
  },
  input: {
    height: 50,
    width: "80%",
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: "white",
  },
});
